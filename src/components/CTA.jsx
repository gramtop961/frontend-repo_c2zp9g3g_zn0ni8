import { ArrowRight, Headphones } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Headphones className="h-4 w-4 text-purple-300" />
          <span className="text-sm text-white/80">Ready to talk?</span>
        </div>
        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Bring your own voice. We’ll handle the rest.</h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/70">
          Start with a quick microphone check, then try a live demo. No account required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Launch voice demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
