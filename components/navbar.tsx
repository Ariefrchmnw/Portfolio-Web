'use client';

import { useEffect, useState } from 'react';

const menuItems = [
  { name: 'Home', link: '#hero' },
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#tech' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const navLinks = document.querySelectorAll('header nav a');
    const sections = Array.from(navLinks)
      .map((link) => document.querySelector(link.getAttribute('href')!))
      .filter(Boolean);
    const navbar = document.getElementById('navbar');

    const setActiveLink = (hash: string) => {
      setActiveHash(hash);
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === hash);
      });
    };

    const updateActiveOnScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 4;
      let newHash = '#hero';

      sections.forEach((section) => {
        if ((section as HTMLElement).offsetTop <= scrollPos) {
          newHash = '#' + section!.id;
        }
      });

      setActiveLink(newHash);

      if (window.scrollY > 20) {
        navbar?.classList.add('backdrop-blur-xl', 'bg-[#121212]/80');
        setIsScrolled(true);
      } else {
        navbar?.classList.remove('backdrop-blur-xl', 'bg-[#121212]/80');
        setIsScrolled(false);
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', () => setActiveLink(link.getAttribute('href')!));
    });

    updateActiveOnScroll();
    window.addEventListener('scroll', updateActiveOnScroll);
    window.addEventListener('hashchange', () => setActiveLink(window.location.hash || '#hero'));

    return () => {
      window.removeEventListener('scroll', updateActiveOnScroll);
      window.removeEventListener('hashchange', () => setActiveLink(window.location.hash || '#hero'));
    };
  }, []);

  return (
    <header id="navbar" className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="max-w-7xl mx-auto rounded-full border border-white/10 bg-[#121212]/60 backdrop-blur-md shadow-[0_35px_80px_rgba(0,0,0,0.25)] transition duration-300">
        <div className="flex items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#hero" className="flex items-center gap-3 rounded-full px-3 py-2 transition duration-300 hover:bg-white/5">
            <span className="text-lg font-extrabold tracking-tight">
              <span className="text-cyan-400">A</span>
              <span className="text-pink-500">R</span>
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="nav-item text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-cyan-400/30 bg-transparent px-5 py-2 text-sm font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-500/15 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)] md:inline-flex"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
