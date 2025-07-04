"use client"

import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const FloatingCallButton = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
      <Link
        href="tel:+2348161428680"
        className="fixed bottom-6 right-6 bg-primary2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary2/90 transition-colors z-50 bounce"
      >
        <Phone size={24} color="white" />
      </Link>
    </>
  );
};
