import Spline from '@splinetool/react-spline';
import { Rocket, Mic, Shield, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient aura overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.15)_40%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Bot className="h-4 w-4 text-purple-300" />
          <span className="text-sm text-white/80">Real AI assistant — like JARVIS</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-purple-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Voice-first AI that understands, plans, and gets things done
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Speak naturally. Your assistant listens, thinks, and executes across your apps — with memory, tools, and secure permissions.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <Mic className="h-4 w-4" />
            Try the voice demo
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <Rocket className="h-4 w-4" />
            See what it can do
          </button>
        </div>

        {/* Quick highlights */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 text-left sm:grid-cols-4">
          {[
            { icon: Mic, label: 'Real-time voice' },
            { icon: Shield, label: 'Private & secure' },
            { icon: Rocket, label: 'Tool automation' },
            { icon: Bot, label: 'Reasoning engine' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2">
              <item.icon className="h-4 w-4 text-purple-300" />
              <span className="text-xs text-white/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
