import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary border-t border-navy-700 px-4 py-3 flex gap-3 md:hidden">
      <a
        href="tel:18004733241"
        className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 font-semibold text-sm bg-white text-primary"
        aria-label="Call Now"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href="#"
        className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 font-semibold text-sm bg-accent text-white"
        aria-label="Get a Quote"
      >
        Get a Quote
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};
