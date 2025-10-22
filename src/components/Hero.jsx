import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(600px_400px_at_50%_40%,rgba(168,85,247,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(800px_500px_at_50%_50%,rgba(59,130,246,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(500px_400px_at_60%_60%,rgba(251,146,60,0.12),transparent)]" />

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center md:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live AI Voice Agent
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Conversational AI that sounds human, feels instant
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/75 md:text-lg">
          Meet Agent BHP—your autonomous voice agent with real-time understanding, natural tone, and enterprise-grade reliability.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 transition hover:bg-white/90"
          >
            Launch Console
          </a>
          <a
            href="#demo"
            className="rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/40"
          >
            Hear a Demo
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
