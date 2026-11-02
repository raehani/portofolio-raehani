import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { experienceData, servicesData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 print:hidden">
          <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
            Curriculum Vitae Preview
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:hover:text-white rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="max-h-[82vh] overflow-y-auto p-8 sm:p-12 space-y-8 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
          
          {/* Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white font-heading">
                {profile.name}
              </h1>
              <p className="text-base text-neutral-600 dark:text-neutral-400 font-medium capitalize mt-1">
                {profile.role}
              </p>
            </div>

            <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>portfolio.sleekdesign.dev</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Ringkasan Profesional
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              Mahasiswi Sistem Informasi berprestasi di Universitas Komputama (IPK 3.86) dengan fokus keahlian pada perancangan antarmuka pengguna (UI/UX Design), analisis proses bisnis & basis data, serta implementasi frontend web modern. Berpengalaman sebagai Asisten Laboratorium Praktikum dan Koordinator Media di HIMASI Universitas Komputama.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Pengalaman Kerja
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-neutral-950 dark:text-white">{exp.role}</span>
                    <span className="text-xs text-neutral-500 font-mono-numbers">{exp.period}</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-medium">
                    {exp.company} · {exp.location}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-neutral-700 dark:text-neutral-300 space-y-0.5 pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formal Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Pendidikan
            </h2>
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-neutral-950 dark:text-white">S1 Sistem Informasi</span>
              <span className="text-xs text-neutral-500 font-mono-numbers">2023 — Sekarang</span>
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
              Universitas Komputama · IPK: 3.86 / 4.00 (Mahasiswi Aktif)
            </div>
          </div>

          {/* Core Competencies & Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Keahlian & Penguasaan Alat
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-800">
                <span className="font-semibold block text-neutral-900 dark:text-white mb-1">Design & Strategy</span>
                <p className="text-neutral-500 dark:text-neutral-400">Figma, Framer, Design Tokens, UX Research, Heuristics</p>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-800">
                <span className="font-semibold block text-neutral-900 dark:text-white mb-1">Engineering</span>
                <p className="text-neutral-500 dark:text-neutral-400">React, TypeScript, Tailwind CSS, Next.js, HTML5/CSS3</p>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-800">
                <span className="font-semibold block text-neutral-900 dark:text-white mb-1">Methodologies</span>
                <p className="text-neutral-500 dark:text-neutral-400">Design Sprints, WCAG 2.1 AA, Rapid Usability Testing</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
