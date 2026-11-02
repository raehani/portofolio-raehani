/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ProfileData, Project } from './types/portfolio';
import { defaultProfile } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ScheduleModal } from './components/ScheduleModal';
import { ProfileEditModal } from './components/ProfileEditModal';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('sleek_portfolio_profile_v4');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return defaultProfile;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('sleek_portfolio_theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [prefillProject, setPrefillProject] = useState<string>('');

  // Apply dark mode class to html document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('sleek_portfolio_theme', 'dark');
      } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('sleek_portfolio_theme', 'light');
      } catch {}
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSaveProfile = (newProfile: ProfileData) => {
    setProfile(newProfile);
    try {
      localStorage.setItem('sleek_portfolio_profile_v4', JSON.stringify(newProfile));
    } catch {}
  };

  const handleContactClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const worksElem = document.getElementById('works');
    if (worksElem) {
      worksElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactForSimilar = (projectTitle: string) => {
    setPrefillProject(projectTitle);
    handleContactClick();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-200">
      {/* Thin animated reading progress bar at the very top of the screen */}
      <ScrollProgressBar />

      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar
        profile={profile}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onOpenProfileEdit={() => setIsProfileEditOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onContactClick={handleContactClick}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching exact reference composition */}
        <HeroSection
          profile={profile}
          onExploreWork={handleExploreWork}
          onContactClick={handleContactClick}
          onOpenProfileEdit={() => setIsProfileEditOpen(true)}
        />

        {/* Selected Works Bento Grid with Case Studies */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Services & 4-step Design Methodology */}
        <ServicesSection />

        {/* Experience & Career Timeline */}
        <ExperienceSection />

        {/* Client Endorsements & Testimonials */}
        <TestimonialsSection />

        {/* Interactive Contact & Inquiry Section */}
        <ContactSection
          profile={profile}
          prefillProject={prefillProject}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />
      </main>

      {/* Modals & Dialogs */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactForSimilar={handleContactForSimilar}
      />

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        email={profile.email}
      />

      <ProfileEditModal
        isOpen={isProfileEditOpen}
        onClose={() => setIsProfileEditOpen(false)}
        currentProfile={profile}
        onSaveProfile={handleSaveProfile}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />
    </div>
  );
}
