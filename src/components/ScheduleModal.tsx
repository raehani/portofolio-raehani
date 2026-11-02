import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  email,
}) => {
  const [selectedDate, setSelectedDate] = useState('2026-11-05');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

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

  const availableSlots = [
    '09:30', '11:00', '14:00', '15:30', '17:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !userEmail.trim()) return;

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }

    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setName('');
    setUserEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-950 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white font-heading">
              Sesi Diskusi Terjadwal!
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-sm mx-auto">
              Undangan Google Meet telah dikirimkan ke <span className="font-semibold">{userEmail}</span> untuk tanggal <span className="font-semibold">{selectedDate}</span> pukul <span className="font-semibold">{selectedTime} WIB</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white dark:text-neutral-950 bg-neutral-950 dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-1 block">
                15-Min Intro Call
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white font-heading">
                Jadwalkan Konsultasi Singkat
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Diskusikan kebutuhan proyek, estimasi waktu, atau lingkup kerja Anda secara langsung.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Email Kerja
                </label>
                <input
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="budi@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Pilih Tanggal
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-xs focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Pilih Waktu (WIB)
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-xs focus:outline-hidden"
                  >
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot} WIB
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Topik Bahasan Singkat (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ceritakan gambaran singkat tentang aplikasi atau website yang ingin dibuat..."
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white text-xs focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white dark:text-neutral-950 bg-neutral-950 dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Konfirmasi Jadwal Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
