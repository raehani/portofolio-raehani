import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'saas' | 'ecommerce'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'saas', label: 'SaaS Platforms' },
    { id: 'ecommerce', label: 'E-Commerce & Brands' },
  ] as const;

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2 block">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white font-heading">
              Selected Works & Case Studies
            </h2>
          </div>

          {/* Interactive Filter Tabs / Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-200/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 dark:bg-neutral-900/95 text-neutral-950 dark:text-white text-xs font-semibold shadow-lg backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>Lihat Studi Kasus</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project Card Meta & Summary */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  {/* Clean Unboxed Metadata with Typographic Separator */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2.5">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.categoryLabel}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors mb-2 font-heading flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors shrink-0 ml-2" />
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Impact Metric */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100 font-mono-numbers">
                    {project.impactMetric}
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 group-hover:underline">
                    Detail Kasus →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
