# EggieOS Portfolio v1.0

A premium, retro-brutalist console-inspired portfolio website built with React and Vite. Designed as a terminal operating system (EggieOS), it features interactive terminal commands, a responsive bento grid, retro Canvas animations, and immersive micro-interactions.

---

## 🚀 Key Features

*   **Slide Navigation**: Custom slide-pagination system controllable via mouse-wheel, keyboard keys (`ArrowUp`/`ArrowDown`/`Space`/`Home`/`End`), swipe gestures, and pagination dot navigation.
*   **CRT Interactive Background**: An HTML5 Canvas grid of fine dots that responds to mouse cursor proximity. Transitioning themes flips dot colors dynamically, and tapping triggers expanding ripple waves.
*   **Interactive Sleep Avatar**: A sleeping CRT monitor terminal avatar `(-_-)` that wakes up in Light Mode `(•‿•) / (•_•)`. Features random dev quotes in speech bubbles and easter egg alerts when clicked.
*   **Glitching Uptime & Typewriter Tickers**: An active uptime counter that glitched/resets to `00:00:00` randomly, typewriter subtitles, and live ticker tracks.
*   **Bento Grid Projects Showcase**: A 3-row layout displaying 8 projects (wide and narrow). Includes individual progress bars, outbound repository/site links, and a pop-up screenshot gallery with retro SVG fallbacks if image assets aren't uploaded yet.
*   **Runaway Hire Button**: A mock "HIRE ME?" button that runs away from the user's cursor three times before yielding with a custom success message.
*   **Dual Mode Layout**: Clean, border-collapsed monochrome interface supporting Dark and Light theme states.

---

## 🛠️ Technology Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) (Client-side bundle generation)
*   **Styling**: Pure CSS (using custom HSL palettes, CRT grid overlays, animations, and custom typography)
*   **Graphics**: Native Inline SVGs + HTML5 Canvas
*   **Testing & SEO**: Structured semantic tags, optimized asset serving, and unique ID hook nodes

---

## 📂 Project Structure

```
c:/Porfolio-Website/
├── public/                  # Static assets
│   └── projects/            # Put project screenshots here (e.g. anpr-1.png)
├── src/
│   ├── assets/              # Core images (hero.png, icons, etc.)
│   ├── components/          # React Slide Components
│   │   ├── About.jsx        # Specifications and stats readout
│   │   ├── Avatar.jsx       # Interactive sleeping monitor SVG
│   │   ├── BootScreen.jsx   # simulated OS booting console
│   │   ├── Contact.jsx      # Runway buttons & LINK directory
│   │   ├── Hero.jsx         # Typewriter subtitles and uptime counter
│   │   ├── InteractiveBackground.jsx # HTML5 Canvas dot grid
│   │   ├── Projects.jsx     # Bento projects & Modal Gallery
│   │   └── Skills.jsx       # Tool checkers and running PID lists
│   ├── App.jsx              # App layout, theme state, & wheel handler
│   ├── index.css            # Core design system & grid styles
│   └── main.jsx             # Entrypoint
├── package.json             # Build configurations & deployment script
└── vite.config.js           # Relative path resolver bases
```

---

## 💻 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   npm (v9 or higher)

### Installation

1. Clone or copy this repository:
   ```bash
   git clone <repository-url>
   cd Porfolio-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Compile and minify the app for production:
```bash
npm run build
```
This outputs a lightweight static bundle in the `/dist` directory.

### Deploying to GitHub Pages

Deploy the compiled project directly to your GitHub repository:
```bash
npm run deploy
```

---

## 🖼️ Project Screenshots
To display screenshots in the project gallery modal:
1. Place your images inside the folder `public/projects/`.
2. Name the images according to the definitions in [Projects.jsx](file:///c:/Porfolio-Website/src/components/Projects.jsx) (e.g., `anpr-1.png`, `magic-1.png`).
3. If an image is missing, the site automatically renders a custom retro vector line illustration fallback.
