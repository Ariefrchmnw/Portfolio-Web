import Image from 'next/image';
import { profileData } from '@/lib/portfolio-data';

export default function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col gap-12 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div className="max-w-2xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Halo, saya</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">{profileData.name}</h1>
          <div className="space-y-4 text-slate-300">
            <p className="text-3xl font-semibold text-transparent bg-gradient-to-r from-cyan-300 via-violet-400 to-sky-400 bg-clip-text">{profileData.role}</p>
            <p className="max-w-xl text-base leading-8 text-slate-300">{profileData.tagline}</p>
            <p className="max-w-xl text-slate-400">{profileData.heroDescription}</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="cta-button inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(56,189,248,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/95">
              Lihat Proyek
            </a>
            <a href="#contact" className="secondary-button inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-300/40 hover:text-white">
              Kontak Saya
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4 text-slate-400">
          <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="social-chip inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-white">
            GitHub
          </a>
          <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-chip inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-white">
            LinkedIn
          </a>
          <a href={profileData.contact.instagram} target="_blank" rel="noopener noreferrer" className="social-chip inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-white">
            Instagram
          </a>
          <a href={`mailto:${profileData.contact.email}`} className="social-chip inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-white">
            Email
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -left-4 -top-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_32px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-slate-300"></div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-800">
              <img src={profileData.photo_url} alt={profileData.photo_alt} className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
              <p className="text-xs font-medium text-slate-300">Available for freelance projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
