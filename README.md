# 🐉 The Ancient One - 3D Scrollytelling Experience

![Project Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Framework](https://img.shields.io/badge/Framework-Next.js%2014-black)
![3D Engine](https://img.shields.io/badge/3D-React%20Three%20Fiber-blue)

A high-performance, cinematic 3D landing page featuring a "Scrollytelling" narrative experience. Built with **Next.js**, **React Three Fiber**, and **GSAP**, this project demonstrates advanced web graphics, camera choreography, and immersive UI design.

## ✨ Key Features

- **Cinematic Scrollytelling:** A synchronized 4-step camera sequence (Head -> Wings -> Face -> Full Body) triggered by user scroll.
- **Robust 3D Architecture:** 
  - Crash-proof loading system with explicit camera initialization.
  - "Lock-On" Camera Tracking (`lookAt`) ensuring the subject never leaves the frame during complex pans.
  - Optimized GLB handling with automatic base-mesh removal.
- **Immersive Visuals:**
  - Dynamic Lighting: Volumetric Spotlights, Warm Key Lights, and Cool Rim Lights for dramatic separation.
  - Atmospheric Particles: Floating embers and sparkles.
  - Contact Shadows for grounding the 3D model.
- **Modern UI/UX:**
  - Glassmorphism overlays.
  - Thematic "Containment Failure" Dashboard Footer.
  - Smooth scrolling integration via Lenis.

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **3D Engine:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (Three.js)
- **Helpers:** [React Three Drei](https://github.com/pmndrs/drei) (Environment, Sparkles, ContactShadows, Resize)
- **Animation:** [GSAP](https://gsap.com/) (ScrollTrigger) & Framer Motion
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Font:** Cinzel (Serif) & Inter (Sans)

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/dragon-web.git
    cd dragon-web
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to view the experience.

## 📂 Project Structure

```bash
├── app/
│   ├── page.tsx        # Main entry, Layout, Loader & Canvas setup
│   ├── globals.css     # Global styles & Tailwind directives
│   └── layout.tsx      # Font configuration & Meta tags
├── components/
│   ├── Experience.tsx  # Core 3D Scene, Lighting, Camera Choreography
│   ├── Overlay.tsx     # HTML UI (Text, Sections, Footer)
│   └── Loader.tsx      # Loading state component
└── public/
    └── dragon.glb      # 3D Model Asset
```

## 🎨 Visualization Details

- **Lighting Strategy:** 
  - *Key Light:* Warm Orange `5,10,5` (Intensity 80)
  - *Rim Light:* Deep Blue `-5,5,-5` (Intensity 60) mimics moonlight/magical ambiance and separates the dark model from the black background.
- **Camera Path:**
  - Uses `GSAP Timeline` scrubbed to scroll.
  - Implements a "Zig-Zag" motion path (Center -> Left -> Right -> Center) dynamically coordinated with text positioning.

## 🛡️ License

This project is licensed under the MIT License.

---
*Forged in code by [Your Name]. Beware the dragon.*
