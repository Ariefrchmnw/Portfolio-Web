import { profileData } from '@/lib/portfolio-data';

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl space-y-12 px-6 py-16 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Tentang Saya</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Siapa Saya?</h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-base leading-8 text-slate-300">{profileData.aboutDescription}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {profileData.aboutCards.map((card, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm hover:border-cyan-400/30 transition duration-300">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">{card.label}</p>
                {card.value && <p className="mt-3 text-2xl font-bold text-white">{card.value}</p>}
                {card.subtitle && <p className="mt-1 text-sm text-slate-400">{card.subtitle}</p>}
                {card.title && (
                  <>
                    <p className="mt-3 text-lg font-semibold text-white">{card.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{card.school}</p>
                    <p className="mt-1 text-sm text-cyan-300/70">{card.date}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Statistik</h3>
            <div className="mt-6 space-y-4">
              {profileData.stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
