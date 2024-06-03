"use client";

import SideSelector from "./_components/SideSelector";
import ThreeCanvas from "./_components/ThreeCanvas";

export default function HomePage() {
  return (
    <main className="max-w-screen flex h-screen w-screen items-center justify-center p-10">
      <div className="relative aspect-square max-h-[700px] w-full max-w-[700px]">
        <ThreeCanvas />
        <div
          id="canvas-corners"
          className="pointer-events-none absolute top-0 h-full w-full"
        >
          <div className="absolute left-[-10px] top-[-10px] h-5 w-5 border-l-2 border-t-2 border-white"></div>
          <div className="absolute right-[-10px] top-[-10px] h-5 w-5 border-r-2 border-t-2 border-white"></div>
          <div className="absolute bottom-[-10px] left-[-10px] h-5 w-5 border-b-2 border-l-2 border-white"></div>
          <div className="absolute bottom-[-10px] right-[-10px] h-5 w-5 border-b-2 border-r-2 border-white"></div>
        </div>
      </div>
      <div className="z-1 after: fixed bottom-2 right-2 flex w-44 flex-col gap-3 p-2">
        <SideSelector />
      </div>
    </main>
  );
}
