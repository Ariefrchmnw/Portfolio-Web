import { profileData } from '@/lib/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-12 lg:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight">
              <span className="text-cyan-400">A</span>
              <span className="text-pink-500">R</span>
            </span>
          </div>
          <p className="text-sm text-slate-400">UI/UX Designer & Frontend Developer dari Indonesia</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <a href="#hero" className="text-sm text-slate-400 hover:text-white transition duration-300">
              Home
            </a>
            <a href="#about" className="text-sm text-slate-400 hover:text-white transition duration-300">
              About
            </a>
            <a href="#tech" className="text-sm text-slate-400 hover:text-white transition duration-300">
              Skills
            </a>
            <a href="#projects" className="text-sm text-slate-400 hover:text-white transition duration-300">
              Projects
            </a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-white transition duration-300">
              Contact
            </a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Contact</h3>
          <div className="space-y-2">
            <a href={`mailto:${profileData.contact.email}`} className="block text-sm text-slate-400 hover:text-white transition duration-300">
              {profileData.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-white/10"></div>

      {/* Bottom */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        <p>&copy; {currentYear} {profileData.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            GitHub
          </a>
          <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            LinkedIn
          </a>
          <a href={profileData.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
