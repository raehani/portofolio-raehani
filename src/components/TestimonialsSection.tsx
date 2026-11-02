import React from 'react';
import { testimonialsData } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2 block">
            Endorsements & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white font-heading mb-4">
            Apa Kata Klien & Rekan Kolaborasi
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal">
            Kemitraan jangka panjang dengan pendiri teknologi, pimpinan produk, dan tim rekayasa perangkat lunak.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-8 font-serif">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold text-sm flex items-center justify-center shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
                    {item.author}
                  </h4>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{item.role}</span>
                    <span aria-hidden="true"> · </span>
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
