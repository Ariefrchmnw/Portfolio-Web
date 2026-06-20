import { stacks } from '@/lib/portfolio-data';

export default function SkillsSection() {
  const categories = Array.from(new Set(stacks.map((s) => s.category)));

  return (
    <section id="tech" className="relative mx-auto max-w-7xl space-y-12 px-6 py-16 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Technical Skills</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Tech Stack & Tools</h2>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-300">{category}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {stacks
                .filter((s) => s.category === category)
                .map((stack, index) => (
                  <div key={index} className="group relative rounded-xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm hover:border-cyan-400/30 transition duration-300">
                    <div className="flex items-center justify-center">
                      <img src={stack.logo} alt={stack.name} className="h-12 w-12 object-contain" loading="lazy" />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-white">{stack.name}</p>
                      <p className="text-xs text-slate-400 mt-1">{stack.icon}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
