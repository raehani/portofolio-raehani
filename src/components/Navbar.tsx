import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, FileText } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface NavbarProps {
  profile: ProfileData;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenProfileEdit: () => void;
  onOpenResume: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  isDarkMode,
  onToggleTheme,
  onOpenProfileEdit,
  onOpenResume,
  onContactClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xs'
          : 'bg-transparent border-b border-neutral-100 dark:border-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark with clean circular monogram badge */}
        <a
          href="#about"
          className="flex items-center gap-3.5 group whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white rounded-lg p-1"
        >
          <span className="w-9 h-9 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold text-sm flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
            {profile.name.charAt(0)}
          </span>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-neutral-950 dark:text-white uppercase">
              {profile.name}
            </span>
            <span className="text-[11px] tracking-wide text-neutral-500 dark:text-neutral-400 font-normal">
              Portfolio & Creative Direction
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 dark:hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neutral-950 dark:after:bg-white after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform hover:after:origin-bottom-left whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + minimal utility toggles */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Quick Resume Button */}
          <button
            onClick={onOpenResume}
            title="Lihat Resume"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Edit Profile / Customize */}
          <button
            onClick={onOpenProfileEdit}
            title="Kustomisasi Profil & Data"
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
            aria-label="Edit Profile"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
            aria-label="Toggle theme"
            title={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onContactClick}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white dark:text-neutral-950 bg-neutral-950 dark:bg-white rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-98 transition-all whitespace-nowrap shrink-0 shadow-xs"
          >
            Get In Touch
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-6 py-5 shadow-xl transition-all">
          <nav className="flex flex-col gap-3.5 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 py-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Unduh / Lihat CV</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfileEdit();
              }}
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 py-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ubah Profil</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
