import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, ArrowUpRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const certifications = [
    { title: 'Nielsen Norman Group UX Master Certified', issuer: 'NN/g', year: '2023' },
    { title: 'Google UX Design Professional Certificate', issuer: 'Google', year: '2021' },
    { title: 'Advanced Design Systems with Figma', issuer: 'Design Systems Collective', year: '2022' },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2 block">
            Career & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white font-heading mb-4">
            Pengalaman Profesional & Rekam Jejak
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal">
            Lebih dari 6 tahun merancang antarmuka produk digital dengan dampak nyata bagi jutaan pengguna di seluruh dunia.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white font-heading">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">{item.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 w-fit font-mono-numbers">
                  {item.period}
                </span>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-heading">
                Pendidikan Formal
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  S1 Sistem Informasi (Mahasiswi Aktif)
                </h4>
                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">Universitas Komputama</span>
                  <span aria-hidden="true">·</span>
                  <span>2023 — Sekarang</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-numbers">IPK 3.86 / Skala 4.0</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  Mendalami Analisis & Perancangan Sistem Informasi, Manajemen Basis Data Relasional, Interaksi Manusia & Komputer (HCI), serta Rekayasa Antarmuka Pengguna Berbasis Web.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-heading">
                Sertifikasi & Pelatihan
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Google UX Design Professional Certificate', issuer: 'Google / Coursera', year: '2024' },
                { title: 'Relational Database Design & SQL Specialist', issuer: 'Oracle Academy / Binar', year: '2024' },
                { title: 'Front-End Web Development with React & Tailwind', issuer: 'Dicoding Indonesia', year: '2023' },
              ].map((cert, idx) => (
                <div key={idx} className="pb-3 border-b border-neutral-100 dark:border-neutral-800 last:border-0 last:pb-0">
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    <span>{cert.issuer}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-numbers">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
