import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onContactForSimilar: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onContactForSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-neutral-800 dark:text-neutral-200">{project.role}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-950 dark:hover:text-white rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Headline & Summary */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white mb-2 font-heading">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal">
              {project.subtitle}
            </p>
          </div>

          {/* High-Resolution Hero Visual */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 aspect-16/10">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Impact Metric Callout */}
          <div className="p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block mb-1">
                Kinerja & Hasil Terukur
              </span>
              <p className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white font-mono-numbers">
                {project.impactMetric}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-300">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Challenge and Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-950 dark:text-white uppercase tracking-wider text-xs">
                Tantangan Utama
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-950 dark:text-white uppercase tracking-wider text-xs">
                Solusi Desain
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div>
            <h3 className="text-xs font-bold text-neutral-950 dark:text-white uppercase tracking-wider mb-4">
              Lingkup Pekerjaan & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 relative">
              <Quote className="w-8 h-8 text-neutral-300 dark:text-neutral-700 mb-3" />
              <p className="text-base sm:text-lg italic text-neutral-800 dark:text-neutral-200 mb-4 font-serif">
                "{project.testimonial.quote}"
              </p>
              <div>
                <p className="text-sm font-bold text-neutral-950 dark:text-white">
                  {project.testimonial.author}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Tertarik dengan solusi serupa untuk produk Anda?
            </span>
            <button
              onClick={() => {
                onClose();
                onContactForSimilar(project.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white dark:text-neutral-950 bg-neutral-950 dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-xs"
            >
              <span>Diskusikan Proyek Serupa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
