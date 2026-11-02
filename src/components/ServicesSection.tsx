import React from 'react';
import { servicesData } from '../data/portfolioData';
import { Check, Compass, Layers, Palette, Terminal } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discover & Align',
      desc: 'Wawancara stakeholder, pemetaan persona, dan audit kompetitif untuk menemukan peluang diferensiasi yang nyata.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Wireframe & Flow',
      desc: 'Merancang alur pengguna berkecepatan tinggi dan wireframe interaktif untuk validasi arsitektur sebelum styling.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'Visual System & Tokens',
      desc: 'Penerapan hierarki tipografi murni, token desain lintas platform, dan komponen UI yang konsisten dan aksesibel.',
      icon: Palette,
    },
    {
      step: '04',
      title: 'Ship & Quality Assurance',
      desc: 'Handoff terstruktur untuk developer dengan spesifikasi micro-interaction atau implementasi langsung komponen React/Tailwind.',
      icon: Terminal,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2 block">
            Capabilities & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white font-heading mb-4">
            Layanan Desain Produk & Engineering
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal">
            Menggabungkan empati riset pengguna dengan keahlian visual tingkat lanjut untuk menghasilkan produk digital yang dicintai pengguna dan menguntungkan bisnis.
          </p>
        </div>

        {/* 4 Clean Editorial Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div>
                <span className="text-sm font-bold text-neutral-400 dark:text-neutral-500 font-mono-numbers block mb-3">
                  {service.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                    Key Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <Check className="w-4 h-4 text-neutral-950 dark:text-white shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used (Clean unboxed inline list) */}
              <div className="mt-8 pt-4 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-medium text-neutral-700 dark:text-neutral-300">Tools:</span>
                <span>{service.tools.join(' · ')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Design Process Section */}
        <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2 block">
              Work Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white font-heading">
              Bagaimana Ide Menjadi Solusi Nyata
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-bold text-sm font-mono-numbers">
                      {step.step}
                    </span>
                    <IconComponent className="w-5 h-5 text-neutral-400" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-950 dark:text-white mb-2 font-heading">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
