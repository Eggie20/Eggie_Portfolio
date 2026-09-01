import { useState, useEffect, useRef, useCallback } from 'react';

const IMAGES = {
  IDLE_SLEEP: '/projects/avatar/Idle Sleep_Remove-BG.png',
  STARTLED_AWAKE: '/projects/avatar/Startled Awake (Clicked While Sleeping)_Remove-BG.png',
  LOOKING_LEFT: '/projects/avatar/Looking Left_Remove-BG.png',
  LOOKING_RIGHT: '/projects/avatar/Looking Right_Remove-BG.png',
  HAPPY_IDLE: '/projects/avatar/Happy Idle (Settled)_Remove-BG.png',
  SERIOUS_MODE: '/projects/avatar/Serious Mode_Remove-BG.png',
  NOD_DOWN: '/projects/avatar/Nod Down (Transition to Serious)_Remove-BG.png',
  SHRUG_BOUNCE: '/projects/avatar/Shrug Bounce (Back to Happy)_Remove-BG.png',
  YAWN: '/projects/avatar/Yawn (Falling Asleep)_Remove-BG.png',
  DRIFTING_OFF: '/projects/avatar/Drifting Off_Remove-BG.png'
};

export default function Avatar({ isLightTheme }) {
  const [currentImage, setCurrentImage] = useState(isLightTheme ? IMAGES.HAPPY_IDLE : IMAGES.IDLE_SLEEP);
  const [avatarState, setAvatarState] = useState(isLightTheme ? 'AWAKE_HAPPY' : 'SLEEPING'); // 'SLEEPING', 'AWAKE_HAPPY', 'AWAKE_SERIOUS'
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  const timeoutRefs = useRef([]);
  const isFirstRender = useRef(true);
  const isSequenceActive = useRef(false);

  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
  };

  const playSequence = useCallback((steps, onComplete = null) => {
    clearAllTimeouts();
    isSequenceActive.current = true;
    let accumulatedTime = 0;

    steps.forEach((step) => {
      const timer = setTimeout(() => {
        setCurrentImage(step.image);
      }, accumulatedTime);
      timeoutRefs.current.push(timer);
      accumulatedTime += step.duration;
    });

    const endTimer = setTimeout(() => {
      isSequenceActive.current = false;
      if (onComplete) {
        onComplete();
      }
    }, accumulatedTime);
    timeoutRefs.current.push(endTimer);
  }, []);

  // Auto-hide popup after 4 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  // Handle sleep/wake transitions on theme change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setShowPopup(false);

    if (isLightTheme) {
      // Transition from sleep to happy awake
      playSequence([
        { image: IMAGES.STARTLED_AWAKE, duration: 600 },
        { image: IMAGES.LOOKING_LEFT, duration: 800 },
        { image: IMAGES.LOOKING_RIGHT, duration: 800 },
        { image: IMAGES.HAPPY_IDLE, duration: 0 }
      ], () => {
        setAvatarState('AWAKE_HAPPY');
      });
    } else {
      // Transition from awake to sleep
      playSequence([
        { image: IMAGES.YAWN, duration: 1200 },
        { image: IMAGES.DRIFTING_OFF, duration: 1200 },
        { image: IMAGES.IDLE_SLEEP, duration: 0 }
      ], () => {
        setAvatarState('SLEEPING');
      });
    }
  }, [isLightTheme, playSequence]);

  // Passive animations scheduler
  useEffect(() => {
    let passiveTimer;

    const triggerPassiveAnimation = () => {
      if (isSequenceActive.current) {
        scheduleNext();
        return;
      }

      if (avatarState === 'SLEEPING') {
        playSequence([
          { image: IMAGES.DRIFTING_OFF, duration: 1000 },
          { image: IMAGES.YAWN, duration: 1800 },
          { image: IMAGES.DRIFTING_OFF, duration: 1000 },
          { image: IMAGES.IDLE_SLEEP, duration: 0 }
        ], () => {
          setAvatarState('SLEEPING');
          scheduleNext();
        });
      } else if (avatarState === 'AWAKE_HAPPY') {
        playSequence([
          { image: IMAGES.LOOKING_LEFT, duration: 1200 },
          { image: IMAGES.LOOKING_RIGHT, duration: 1200 },
          { image: IMAGES.HAPPY_IDLE, duration: 0 }
        ], () => {
          setAvatarState('AWAKE_HAPPY');
          scheduleNext();
        });
      } else {
        scheduleNext();
      }
    };

    const scheduleNext = () => {
      const nextDelay = 15000 + Math.random() * 10000; // 15-25 seconds
      passiveTimer = setTimeout(triggerPassiveAnimation, nextDelay);
    };

    // Only run if not currently playing a manual interaction sequence
    if (avatarState === 'SLEEPING' || avatarState === 'AWAKE_HAPPY') {
      scheduleNext();
    }

    return () => {
      clearTimeout(passiveTimer);
    };
  }, [avatarState, playSequence]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  const handleAvatarClick = () => {
    if (avatarState === 'SLEEPING') {
      // Clicked while sleeping in dark mode: startled awake -> look around -> drift back to sleep
      setPopupText("Ooooo... is there work? Hire me? Please click LIGHT MODE in the top-right to wake me up!");
      setShowPopup(true);

      playSequence([
        { image: IMAGES.STARTLED_AWAKE, duration: 1200 },
        { image: IMAGES.LOOKING_LEFT, duration: 1000 },
        { image: IMAGES.LOOKING_RIGHT, duration: 1000 },
        { image: IMAGES.LOOKING_LEFT, duration: 1000 },
        { image: IMAGES.DRIFTING_OFF, duration: 1200 },
        { image: IMAGES.IDLE_SLEEP, duration: 0 }
      ], () => {
        setAvatarState('SLEEPING');
      });
    } else if (avatarState === 'AWAKE_HAPPY') {
      // Happy -> Serious Transition
      setPopupText("Eggie: Serious Mode activated. Coding subroutines at 100%. Let's build something!");
      setShowPopup(true);

      playSequence([
        { image: IMAGES.NOD_DOWN, duration: 800 },
        { image: IMAGES.SERIOUS_MODE, duration: 0 }
      ], () => {
        setAvatarState('AWAKE_SERIOUS');
      });
    } else if (avatarState === 'AWAKE_SERIOUS') {
      // Serious -> Happy Transition
      setPopupText("Eggie: Happy Mode! Ready to collaborate and entertain the employer. Click me to focus!");
      setShowPopup(true);

      playSequence([
        { image: IMAGES.SHRUG_BOUNCE, duration: 1000 },
        { image: IMAGES.HAPPY_IDLE, duration: 0 }
      ], () => {
        setAvatarState('AWAKE_HAPPY');
      });
    }
  };

  return (
    <div 
      className="avatar-container" 
      style={{ 
        position: 'relative', 
        display: 'inline-block',
        width: '140px',
        height: '140px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
      onClick={handleAvatarClick}
    >
      {/* Speech Bubble / Popup Alert */}
      {showPopup && (
        <div 
          className="avatar-bubble"
          style={{
            position: 'absolute',
            bottom: '155px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '260px',
            backgroundColor: 'var(--bg)',
            color: 'var(--text)',
            border: '1px solid var(--text)',
            padding: '12px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            zIndex: 1000,
            textAlign: 'left',
            boxShadow: 'none',
            lineHeight: '1.4'
          }}
        >
          <div style={{ borderBottom: '1px dashed var(--border)', paddingBottom: '4px', marginBottom: '6px', fontWeight: 'bold' }}>
            {avatarState === 'SLEEPING' ? ":: OS_ALERT.EXE" : ":: EGGIE.EXE"}
          </div>
          {popupText}
          <div 
            style={{ 
              position: 'absolute', 
              bottom: '-6px', 
              left: '50%', 
              transform: 'translateX(-50%) rotate(45deg)', 
              width: '10px', 
              height: '10px', 
              backgroundColor: 'var(--bg)', 
              borderRight: '1px solid var(--text)', 
              borderBottom: '1px solid var(--text)' 
            }}
          />
        </div>
      )}

      {/* Floating Particles */}
      {avatarState === 'SLEEPING' ? (
        <div className="floating-particles">
          <span className="floating-particle part-z1">z</span>
          <span className="floating-particle part-z2">Z</span>
        </div>
      ) : (
        <div className="floating-particles">
          <span className="floating-particle part-code1">{"{}"}</span>
          <span className="floating-particle part-code2">{"</>"}</span>
        </div>
      )}

      {/* Circular Brutalist Photographic Frame */}
      <div className="avatar-frame">
        <img 
          src={currentImage} 
          alt="Eggie Avatar" 
          className="avatar-img" 
          key={currentImage} // Force re-render to trigger subtle fade/scale CSS transitions
        />
      </div>
    </div>
  );
}
