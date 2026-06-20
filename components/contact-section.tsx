'use client';

import { profileData } from '@/lib/portfolio-data';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl space-y-12 px-6 py-16 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Hubungi Saya</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Mari Berkolaborasi</h2>
        <p className="max-w-2xl text-slate-300">Saya selalu terbuka untuk proyek baru dan kesempatan menarik. Hubungi saya untuk diskusi lebih lanjut.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-sm text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-sm text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                placeholder="Email Anda"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-sm text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(56,189,248,0.18)] transition duration-300 hover:bg-cyan-400/95"
            >
              Kirim Pesan
            </button>

            {submitted && (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-center text-sm text-green-300">
                Terima kasih! Pesan Anda telah dikirim.
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-sm space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">Email</p>
              <a href={`mailto:${profileData.contact.email}`} className="mt-2 text-lg font-semibold text-white hover:text-cyan-300 transition duration-300">
                {profileData.contact.email}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">Telepon</p>
              <a href={`tel:${profileData.contact.phone}`} className="mt-2 text-lg font-semibold text-white hover:text-cyan-300 transition duration-300">
                {profileData.contact.phone}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">Lokasi</p>
              <p className="mt-2 text-lg font-semibold text-white">{profileData.contact.location}</p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">Sosial Media</p>
              <div className="flex gap-4">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-slate-900/50 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300 transition duration-300"
                >
                  <span>GH</span>
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-slate-900/50 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300 transition duration-300"
                >
                  <span>LI</span>
                </a>
                <a
                  href={profileData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-slate-900/50 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300 transition duration-300"
                >
                  <span>IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
