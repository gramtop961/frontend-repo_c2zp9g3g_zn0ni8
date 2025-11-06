import { ListChecks, Mic, Brain, Send } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: Mic, title: 'Say it', desc: 'Speak naturally — no special commands needed.' },
    { icon: Brain, title: 'It thinks', desc: 'Plans the steps and chooses the right tools.' },
    { icon: ListChecks, title: 'You approve', desc: 'Review and approve actions in a clean checklist.' },
    { icon: Send, title: 'It executes', desc: 'Runs tasks, reports progress, and adapts in real time.' },
  ];

  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
          <p className="mt-2 text-white/70">From idea to done in four simple steps.</p>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2">
                <s.icon className="h-5 w-5 text-purple-300" />
                <span className="text-xs text-white/70">Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
