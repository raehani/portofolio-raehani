import React, { useState, useEffect } from 'react';
import { Mail, Check, Send, Phone, MapPin, Calendar, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileData } from '../types/portfolio';

interface ContactSectionProps {
  profile: ProfileData;
  prefillProject?: string;
  onOpenSchedule: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  profile,
  prefillProject,
  onOpenSchedule,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    budget: '$3,000 - $5,000',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefillProject) {
      setFormData((prev) => ({
        ...prev,
        message: `Halo ${profile.name}, saya sangat tertarik dengan studi kasus "${prefillProject}". Mari diskusikan kebutuhan proyek serupa untuk bisnis kami.`,
      }));
    }
  }, [prefillProject, profile.name]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // no-op
      }
    }, 700);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-neutral-50/70 dark:bg-neutral-950/60 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2 block">
            Initiate Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white font-heading mb-4">
            Mulai Proyek Baru Bersama
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal">
            Punya ide produk, butuh perancangan ulang antarmuka, atau ingin berkonsultasi? Kirimkan pesan atau jadwalkan panggilan pengantar.
          </p>
        </div>

        {/* 2-Column Split: Form + Direct Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 rounded-3xl p-8 sm:p-10 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-950 dark:text-white font-heading">
                  Pesan Anda Telah Terkirim!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Terima kasih <span className="font-semibold text-neutral-900 dark:text-white">{formData.name}</span>. Saya biasanya merespons setiap pesan baru dalam kurun waktu kurang dari 24 jam.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'UI/UX Design',
                        budget: '$3,000 - $5,000',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Email Bisnis / Pribadi
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Kategori Kebutuhan
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden"
                    >
                      <option value="Mobile App UI/UX">Mobile App UI/UX</option>
                      <option value="SaaS & Web Platform">SaaS & Web Platform</option>
                      <option value="Design System Creation">Design System Creation</option>
                      <option value="Landing Page & E-Commerce">Landing Page & E-Commerce</option>
                      <option value="Frontend Development">Frontend Development (React)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Estimasi Anggaran
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden"
                    >
                      <option value="< $3,000">&lt; $3,000 (IDR &lt; 45 Juta)</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000 (IDR 45 - 75 Juta)</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000 (IDR 75 - 150 Juta)</option>
                      <option value="> $10,000">&gt; $10,000 (IDR &gt; 150 Juta)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Detail & Deskripsi Proyek
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan tentang produk Anda, target audiens, dan target waktu peluncuran..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white dark:text-neutral-950 bg-neutral-950 dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Mengirimkan Pesan...</span>
                  ) : (
                    <>
                      <span>Kirim Formulir Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Schedule Discovery Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Intro Call Card */}
            <div className="p-8 rounded-3xl bg-neutral-950 dark:bg-neutral-900 text-white border border-neutral-900 dark:border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">
                Ingin Berdiskusi Langsung?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                Pilih waktu yang pas untuk Anda melalui Google Meet santai selama 15 menit tanpa komitmen.
              </p>
              <button
                onClick={onOpenSchedule}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-xl hover:bg-neutral-100 transition-all text-center"
              >
                Pilih Jadwal Discovery Call
              </button>
            </div>

            {/* Direct Info Details */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-0.5">
                    Email Kontak Langsung
                  </span>
                  <p className="text-sm font-semibold text-neutral-950 dark:text-white truncate">
                    {profile.email}
                  </p>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white mt-1 inline-flex items-center gap-1 underline"
                  >
                    {copiedEmail ? 'Alamat tersalin ke clipboard!' : 'Salin email'}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-0.5">
                    Lokasi & Zona Waktu
                  </span>
                  <p className="text-sm font-semibold text-neutral-950 dark:text-white">
                    {profile.location}
                  </p>
                  <span className="text-xs text-neutral-500">
                    UTC+7 (WIB) · Tersedia untuk Kolaborasi Global
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Minimal Editorial Footer */}
        <footer className="pt-10 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved. Clean editorial portfolio.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-neutral-950 dark:hover:text-white transition-colors py-1"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </footer>

      </div>
    </section>
  );
};
