import React, { useState } from 'react';
import {
  Twitter,
  Linkedin,
  Dribbble,
  Github,
  Instagram,
  Youtube,
  Mail,
  Check,
  ArrowDownRight,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { statsData } from '../data/portfolioData';

interface HeroSectionProps {
  profile: ProfileData;
  onExploreWork: () => void;
  onContactClick: () => void;
  onOpenProfileEdit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onExploreWork,
  onContactClick,
  onOpenProfileEdit,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(75);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            
            {/* Hand-drawn Looping Vector Arrow (Matches reference image signature detail) */}
            <div className="relative mb-3 lg:mb-5">
              <svg
                className="w-32 h-16 sm:w-40 sm:h-20 text-neutral-800 dark:text-neutral-200 stroke-current fill-none stroke-[2] select-none"
                viewBox="0 0 160 80"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Smooth looping spiral gesture pointing towards the right */}
                <path
                  d="M 12 70 C 45 40, 75 10, 105 15 C 130 18, 142 42, 120 54 C 98 62, 85 45, 95 30 C 108 14, 138 22, 152 26"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrowhead tip */}
                <path
                  d="M 142 18 L 154 26 L 140 33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.18] text-balance mb-6 font-heading">
              I am {profile.name} and I am a {profile.role}.
            </h1>

            {/* Philosophy Statement */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
              {profile.philosophy}
            </p>

            {/* Minimal Horizontal Hairline Divider */}
            <div className="w-16 h-1 bg-neutral-950 dark:bg-white mb-8 rounded-full" />

            {/* Social Icons & Direct Contact Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-neutral-700 dark:text-neutral-300">
              <a
                href={profile.socials.twitter || 'https://twitter.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-neutral-950 dark:hover:text-white hover:scale-110 transition-transform"
                aria-label="Twitter / X"
                title="Twitter / X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-neutral-950 dark:hover:text-white hover:scale-110 transition-transform"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.dribbble || 'https://dribbble.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-neutral-950 dark:hover:text-white hover:scale-110 transition-transform"
                aria-label="Dribbble"
                title="Dribbble Shots"
              >
                <Dribbble className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.github || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-neutral-950 dark:hover:text-white hover:scale-110 transition-transform"
                aria-label="GitHub"
                title="GitHub Repositories"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.instagram || 'https://instagram.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-neutral-950 dark:hover:text-white hover:scale-110 transition-transform"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.youtube || 'https://youtube.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-neutral-950 dark:hover:text-white hover:scale-110 transition-transform"
                aria-label="YouTube"
                title="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>

              {/* Copy Email Fast Action */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors ml-1"
                title="Salin alamat email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-4">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white dark:text-neutral-950 bg-neutral-950 dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm group"
              >
                <span>Lihat Portofolio</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-200/70 dark:hover:bg-neutral-800 transition-all"
              >
                <span>Konsultasi Proyek</span>
              </button>
            </div>

          </div>

          {/* Right Column: Circular Portrait Visual (Matching sleek circular aesthetic) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative">
            
            {/* Ambient circular photo frame with reduced zoom and balanced sizing */}
            <div className="relative group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[330px] lg:h-[330px] rounded-full overflow-hidden border-2 border-neutral-950/10 dark:border-white/20 shadow-xl bg-[#e8e6e1] dark:bg-neutral-900 relative flex items-center justify-center">
                
                <img
                  src={profile.avatarUrl}
                  alt={`${profile.name} - Portrait`}
                  referrerPolicy="no-referrer"
                  style={{ transform: `scale(${zoomLevel / 100})` }}
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-300 ease-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== window.location.origin + '/assets/aistudio/image_9ed42dfe.png') {
                      target.src = '/assets/aistudio/image_9ed42dfe.png';
                    }
                  }}
                />

                {/* Subtle scrim hover indicator */}
                <div className="absolute inset-0 bg-neutral-950/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Status indicator badge */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
                  Open for new projects
                </span>
              </div>
            </div>

            {/* Subtle Zoom Adjuster Controls */}
            <div className="flex items-center gap-1.5 mt-4 text-xs text-neutral-500 dark:text-neutral-400 select-none">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(50, z - 5))}
                className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                title="Perkecil zoom foto"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] min-w-[34px] text-center font-medium">
                {zoomLevel}%
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(130, z + 5))}
                className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                title="Perbesar zoom foto"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              {zoomLevel !== 75 && (
                <button
                  type="button"
                  onClick={() => setZoomLevel(75)}
                  className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors ml-1"
                  title="Reset ke ukuran default (75%)"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Full-Width Key Metrics Strip Below Hero Split */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white font-mono-numbers tracking-tight mb-1.5 font-heading">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
