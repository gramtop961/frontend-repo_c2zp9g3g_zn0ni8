import { Sparkles, Workflow, Headphones, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Conversational Interface',
    desc: 'Natural, low-latency voice with wake-word and barge-in for rapid back-and-forth.',
  },
  {
    icon: Workflow,
    title: 'Orchestrates Your Tools',
    desc: 'Connect calendars, docs, email, and APIs. The assistant plans and executes multi-step tasks.',
  },
  {
    icon: ShieldCheck,
    title: 'Granular Permissions',
    desc: 'Approve actions in real-time. Full audit trail and scoped access tokens.',
  },
  {
    icon: Sparkles,
    title: 'Memory & Context',
    desc: 'Long-term memory for preferences and projects — always relevant, never repetitive.',
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Built for real-world work</h2>
          <p className="mt-2 text-white/70">Everything you need to go from request to result.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-3 inline-flex rounded-md bg-purple-600/20 p-2">
                <f.icon className="h-5 w-5 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
