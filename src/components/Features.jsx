import React from 'react';
import { Mic, Brain, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Ultra-natural voice',
    desc: 'Studio-quality neural voices with expressive prosody and low-latency streaming.',
  },
  {
    icon: Brain,
    title: 'Real-time reasoning',
    desc: 'Context-aware memory and tools so your agent can understand and act instantly.',
  },
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'PII redaction, audit logs, and enterprise SSO keep conversations protected.',
  },
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: 'Sub-200ms roundtrip with resilient edge infrastructure across regions.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-30 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for modern voice AI</h2>
        <p className="mt-3 text-white/70">
          Everything you need to deploy production-grade, real-time voice agents.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
        <a
          href="#get-started"
          className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 transition hover:bg-white/90"
        >
          Start Building
        </a>
        <p className="text-xs text-white/50">Free developer tier. No credit card required.</p>
      </div>
    </section>
  );
}
