import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Agent BHP</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#docs" className="hover:text-white transition">Docs</a>
          <button className="rounded-full bg-white px-4 py-2 text-black hover:bg-white/90 transition">Get Started</button>
        </nav>
        <button className="md:hidden rounded-full border border-white/15 px-3 py-2 text-sm text-white/80 hover:text-white">Menu</button>
      </div>
    </header>
  );
}
