"use client";

import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="section flex items-center justify-between">
      <a href="/" className="text-xl font-semibold font-display">
        <div className="w-10 md:w-16 h-10 md:h-16 rounded-full bg-sage-600 text-white text-xl font-semibold grid place-items-center">
          BP
        </div>
      </a>
      <div className="flex items-center gap-4">
        {/* <span className="text-xl text-sage-700">Menu</span> */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="w-14 h-14  flex items-center justify-center"
        >
          <div className="w-8 h-8 grid gap-0.5">
            <span className="block w-full h-px bg-ink" />
            <span className="block w-full h-px bg-ink" />
            <span className="block w-full h-px bg-ink" />
          </div>
        </button>
      </div>
      <Menu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
