import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-white/60">
        <p>Built with an AI-first mindset — voice, tools, and trust.</p>
      </footer>
    </div>
  );
}

export default App;
