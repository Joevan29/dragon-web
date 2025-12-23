import React from 'react';

export const Overlay = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 pointer-events-none text-white font-[family-name:var(--font-cinzel)]">
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-9xl font-black tracking-widest text-center shadow-black drop-shadow-2xl">
          THE <br /> ANCIENT
        </h1>
        <p className="mt-4 text-sm tracking-[0.5em] text-orange-500 uppercase font-sans">Scroll to Summon</p>
      </section>

      <section className="h-screen w-full flex items-center justify-start px-12 md:px-24">
        <div className="max-w-md backdrop-blur-sm bg-black/20 p-8 rounded-xl border border-white/5">
          <h2 className="text-5xl font-bold mb-4 text-orange-500">RAZOR TEETH</h2>
          <p className="text-gray-200 font-[family-name:var(--font-inter)] leading-relaxed">
            Nature's perfect weapon. Capable of tearing through the strongest armor known to man or god.
          </p>
        </div>
      </section>

      <section className="h-screen w-full flex items-center justify-end px-12 md:px-24 text-right">
        <div className="max-w-md backdrop-blur-sm bg-black/20 p-8 rounded-xl border border-white/5">
          <h2 className="text-5xl font-bold mb-4 text-blue-500">ARMORED SCALES</h2>
          <p className="text-gray-200 font-[family-name:var(--font-inter)] leading-relaxed">
            Forged in volcanic fire. Impervious to steel, magic, and the ravages of time itself.
          </p>
        </div>
      </section>

      <section className="h-screen w-full flex flex-col items-center justify-between py-8 px-4 md:px-12 pointer-events-none">
        <div className="text-center mt-12 z-10">
          <h2 className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl">
            AWAKEN
          </h2>
          <p className="text-orange-500 tracking-[1em] text-sm mt-4 uppercase font-sans animate-pulse">The beast is alive</p>
        </div>

        <div className="w-full max-w-7xl flex justify-between items-end mb-12 px-4 md:px-12 pointer-events-auto">
          <div className="flex flex-col gap-6 text-left">
            <div className="backdrop-blur-md bg-black/40 p-6 rounded-xl border border-white/10 w-64 hover:bg-black/60 transition-colors">
              <h3 className="text-orange-500 text-xs tracking-widest uppercase mb-1">Class</h3>
              <p className="font-bold text-2xl font-[family-name:var(--font-inter)]">Elder Wyrm</p>
            </div>
            <div className="backdrop-blur-md bg-black/40 p-6 rounded-xl border border-white/10 w-64 hover:bg-black/60 transition-colors">
              <h3 className="text-orange-500 text-xs tracking-widest uppercase mb-1">Origin</h3>
              <p className="font-bold text-2xl font-[family-name:var(--font-inter)]">Abyssal Void</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-right">
            <div className="backdrop-blur-md bg-black/40 p-6 rounded-xl border border-white/10 w-64 hover:bg-black/60 transition-colors flex flex-col items-end">
              <h3 className="text-orange-500 text-xs tracking-widest uppercase mb-1">Age</h3>
              <p className="font-bold text-2xl font-[family-name:var(--font-inter)]">10,000+ Years</p>
            </div>
            <div className="backdrop-blur-md bg-black/40 p-6 rounded-xl border border-white/10 w-64 hover:bg-black/60 transition-colors flex flex-col items-end">
              <h3 className="text-orange-500 text-xs tracking-widest uppercase mb-1">Danger</h3>
              <p className="font-bold text-2xl font-[family-name:var(--font-inter)] text-red-500">Cataclysmic</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen w-full bg-black flex items-center justify-center relative z-20">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-12 pointer-events-auto">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white font-[family-name:var(--font-cinzel)]">
              JOIN THE <span className="text-red-600">LEGION</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-8 font-[family-name:var(--font-inter)]">
              The barrier has fallen. The dragon is awake. Sign the ancient pact to be spared when the skies turn to fire.
            </p>

            <div className="flex gap-4 mb-12">
              <input type="email" placeholder="Enter your true name..." className="bg-white/5 border border-white/20 text-white px-6 py-4 w-full focus:outline-none focus:border-red-600 transition-colors font-[family-name:var(--font-inter)]" />
              <button className="px-8 py-4 bg-red-700 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
                Pledge
              </button>
            </div>

            <div className="flex gap-6 text-sm text-gray-500 font-[family-name:var(--font-inter)] uppercase tracking-widest">
              <span className="hover:text-red-500 cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-red-500 cursor-pointer transition-colors">Instagram</span>
              <span className="hover:text-red-500 cursor-pointer transition-colors">Discord</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-xl font-[family-name:var(--font-inter)]">
            <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-8 border-b border-white/10 pb-4">System Status</h3>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Containment Field</span>
                <span className="text-red-500 font-bold animate-pulse">FAILED</span>
              </div>
              <div className="w-full bg-gray-800 h-1">
                <div className="bg-red-600 h-1 w-full"></div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400">Core Temperature</span>
                <span className="text-orange-500 font-bold">CRITICAL (4000°C)</span>
              </div>
              <div className="w-full bg-gray-800 h-1">
                <div className="bg-orange-600 h-1 w-[90%]"></div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400">Threat Level</span>
                <span className="text-red-600 font-black text-xl">OMEGA</span>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-600 leading-relaxed">
                  WARNING: DO NOT APPROACH THE ENTITY. ALL PERSONNEL SHOULD EVACUATE TO SECTOR 7 IMMEDIATELY. THIS IS NOT A DRILL.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
