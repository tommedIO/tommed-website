/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-black flex items-center justify-center select-none m-0 p-6">
      {/* 
        Filigranes Monospace-Raster (Courier New):
        - Klassische, schlanke Schreibmaschinen-Schriftart ('Courier New', Courier, monospace)
        - 100% lizenzfrei & auf allen Betriebssystemen vorinstalliert
        - Deutlich vergrößerter Zeilenabstand mit perfekt symmetrischem horizontalen & vertikalen Raum
        - Zeile 1: "tom"
        - Zeile 2: "e"
        - Zeile 3: ".de"
        - Vertikale Achse: "m" - "e" - "d"
      */}
      <div 
        className="grid grid-cols-4 gap-5 sm:gap-8 md:gap-10 lg:gap-12 font-['Courier_New',Courier,'Liberation_Mono',monospace] font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black select-none tracking-normal"
        aria-label="tommed.de"
      >
        {/* Zeile 1: t o m [leer] */}
        <span className="w-[1ch] h-[1ch] flex items-center justify-center leading-none">t</span>
        <span className="w-[1ch] h-[1ch] flex items-center justify-center leading-none">o</span>
        <span className="w-[1ch] h-[1ch] flex items-center justify-center leading-none">m</span>
        <span className="w-[1ch] h-[1ch]" aria-hidden="true" />

        {/* Zeile 2: [leer] [leer] e [leer] */}
        <span className="w-[1ch] h-[1ch]" aria-hidden="true" />
        <span className="w-[1ch] h-[1ch]" aria-hidden="true" />
        <span className="w-[1ch] h-[1ch] flex items-center justify-center leading-none">e</span>
        <span className="w-[1ch] h-[1ch]" aria-hidden="true" />

        {/* Zeile 3: [leer] . d e */}
        <span className="w-[1ch] h-[1ch]" aria-hidden="true" />
        <span className="w-[1ch] h-[1ch] flex items-center justify-center leading-none">.</span>
        <span className="w-[1ch] h-[1ch] flex items-center justify-center leading-none">d</span>
        <span className="w-[1ch] h-[1ch] flex items-center justify-center leading-none">e</span>
      </div>
    </main>
  );
}
