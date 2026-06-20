import { stacks } from '@/lib/portfolio-data';

export default function SkillsSection() {
  return (
    <section id="tech" className="relative mx-auto max-w-7xl space-y-12 px-6 py-16 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Technical Skills</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Tech Stack & Tools</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stacks.map((stack, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm hover:border-cyan-400/30 hover:bg-slate-900/90 transition duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-500/10 to-violet-500/10"></div>
            <div className="relative flex flex-col items-center justify-center h-full">
              <div className="flex items-center justify-center mb-4">
                <img src={stack.logo} alt={stack.name} className="h-16 w-16 object-contain" loading="lazy" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-white">{stack.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60 mt-2">{stack.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
