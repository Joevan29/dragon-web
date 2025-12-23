"use client";

import { useProgress } from '@react-three/drei';

export const Loader = () => {
    const { active, progress } = useProgress();

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 pointer-events-none 
        ${active ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="text-center">
                <h1 className="text-white text-2xl font-bold tracking-[0.2em] animate-pulse">
                    SUMMONING DRAGON...
                </h1>
                <p className="text-white/50 mt-2 font-mono">{progress.toFixed(0)}%</p>
            </div>
        </div>
    );
};
