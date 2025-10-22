import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-white/60 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Agent BHP. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
