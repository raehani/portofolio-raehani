import React, { useState, useEffect } from 'react';
import { X, Check, RefreshCw, UserCheck, Sparkles, Image } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { defaultProfile, alternateProfileNatasha } from '../data/portfolioData';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: ProfileData;
  onSaveProfile: (profile: ProfileData) => void;
}

export const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSaveProfile,
}) => {
  const [formData, setFormData] = useState<ProfileData>(currentProfile);

  useEffect(() => {
    setFormData(currentProfile);
  }, [currentProfile]);

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

  const handleApplyPreset = (preset: ProfileData) => {
    setFormData({ ...preset });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  const sampleAvatars = [
    { label: 'Foto Asli Raehani', url: '/assets/aistudio/image_9ed42dfe.png' },
    { label: 'Raehani Azkia (Studio)', url: '/src/assets/images/raehani_portrait_1793592413829.jpg' },
    { label: 'Studio Portrait (Natasha)', url: '/src/assets/images/designer_hero_portrait_1793591813971.jpg' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-950 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-neutral-900 dark:text-white" />
            <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold">
              Kustomisasi Portofolio
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white font-heading">
            Sesuaikan Data & Profil Pribadi
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Ganti nama, role, filosofi hidup, atau pilih preset instan untuk portofolio Anda.
          </p>
        </div>

        {/* Preset Quick Selectors */}
        <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
          <button
            type="button"
            onClick={() => handleApplyPreset(defaultProfile)}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition-all ${
              formData.name === defaultProfile.name
                ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            Preset Raehani Azkia
          </button>
          <button
            type="button"
            onClick={() => handleApplyPreset(alternateProfileNatasha)}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition-all ${
              formData.name === alternateProfileNatasha.name
                ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            Preset Natasha Benjamin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
              Peran / Jabatan (Role)
            </label>
            <input
              type="text"
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
              Filosofi Desain / Bio Hero
            </label>
            <textarea
              rows={3}
              required
              value={formData.philosophy}
              onChange={(e) => setFormData({ ...formData, philosophy: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Email Kontak
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-xs focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Lokasi Domisili
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-xs focus:outline-hidden"
              />
            </div>
          </div>

          {/* Avatar Selector */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              Pilihan Foto Avatar Hero
            </label>
            <div className="grid grid-cols-2 gap-3 mb-2">
              {sampleAvatars.map((av, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, avatarUrl: av.url })}
                  className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all ${
                    formData.avatarUrl === av.url
                      ? 'border-neutral-900 dark:border-white bg-neutral-100 dark:bg-neutral-800'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
                  }`}
                >
                  <img
                    src={av.url}
                    alt={av.label}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200 truncate">
                    {av.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white dark:text-neutral-950 bg-neutral-950 dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
