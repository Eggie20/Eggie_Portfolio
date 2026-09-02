/**
 * cyberAudio.js
 * --------------------------------------------------------------------------
 * Native Web Audio API Sound Synthesizer for EggieOS.
 * Zero external audio files required — 100% synthesized in real-time.
 * --------------------------------------------------------------------------
 */

class CyberAudioSynthesizer {
  constructor() {
    this.ctx = null;
  }

  // Lazy initialization of AudioContext on user gesture
  getAudioContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Synthesize Robotic Mechanical Transformation Sound
   * Emulates servo shifting, frequency pitch-bends, and magnetic latching.
   */
  playTransformSound() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // 1. Mechanical Servo Whir / Pitch-Bend Oscillator
      const servoOsc = ctx.createOscillator();
      const servoGain = ctx.createGain();

      servoOsc.type = 'sawtooth';
      // Pitch shifting up and down in quick succession (classic mechanical servo sound)
      servoOsc.frequency.setValueAtTime(140, now);
      servoOsc.frequency.exponentialRampToValueAtTime(580, now + 0.12);
      servoOsc.frequency.exponentialRampToValueAtTime(220, now + 0.28);
      servoOsc.frequency.exponentialRampToValueAtTime(740, now + 0.45);
      servoOsc.frequency.exponentialRampToValueAtTime(120, now + 0.65);

      servoGain.gain.setValueAtTime(0.12, now);
      servoGain.gain.linearRampToValueAtTime(0.22, now + 0.25);
      servoGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      servoOsc.connect(servoGain);
      servoGain.connect(ctx.destination);

      servoOsc.start(now);
      servoOsc.stop(now + 0.7);

      // 2. High-Tech Energon Zap / Resonance Pulse
      const zapOsc = ctx.createOscillator();
      const zapGain = ctx.createGain();

      zapOsc.type = 'triangle';
      zapOsc.frequency.setValueAtTime(880, now + 0.05);
      zapOsc.frequency.exponentialRampToValueAtTime(180, now + 0.5);

      zapGain.gain.setValueAtTime(0.001, now);
      zapGain.gain.linearRampToValueAtTime(0.18, now + 0.08);
      zapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      zapOsc.connect(zapGain);
      zapGain.connect(ctx.destination);

      zapOsc.start(now + 0.05);
      zapOsc.stop(now + 0.55);

      // 3. Mechanical Armor Plate Locking Click
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();

      clickOsc.type = 'square';
      clickOsc.frequency.setValueAtTime(320, now + 0.4);
      clickOsc.frequency.setValueAtTime(120, now + 0.48);

      clickGain.gain.setValueAtTime(0.001, now + 0.4);
      clickGain.gain.linearRampToValueAtTime(0.15, now + 0.42);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      clickOsc.connect(clickGain);
      clickGain.connect(ctx.destination);

      clickOsc.start(now + 0.4);
      clickOsc.stop(now + 0.6);

    } catch (err) {
      console.warn('Web Audio synthesis unavailable:', err);
    }
  }

  /**
   * Synthesize Soft Electronic Intake Hum on Hover
   */
  playHoverHum() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.15);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    } catch {
      // Ignore hover audio errors
    }
  }
}

export const cyberAudio = new CyberAudioSynthesizer();
