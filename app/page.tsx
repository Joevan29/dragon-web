"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { Experience } from "@/components/Experience";
import { Overlay } from "@/components/Overlay";
import { ReactLenis } from 'lenis/react'

function LoadingScreen() {
  const { progress, active } = useProgress();
  if (!active && progress === 100) return null;
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="text-center w-64">
        <h2 className="text-xl font-bold tracking-[0.2em] animate-pulse text-orange-500 whitespace-nowrap font-sans">
          SUMMONING... {progress.toFixed(0)}%
        </h2>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ReactLenis root>
      <main className="relative w-full h-full bg-black">
        <LoadingScreen />

        <div className="fixed inset-0 w-full h-full z-0">
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 35 }}
            gl={{ antialias: false, stencil: false, alpha: true }}
            dpr={[1, 1.5]}
          >
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
        </div>

        <Overlay />

        <div className="h-[500vh] w-full invisible pointer-events-none"></div>
      </main>
    </ReactLenis>
  );
}
