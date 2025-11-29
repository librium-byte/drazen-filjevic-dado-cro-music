"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface GlitchCounterProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
  image?: string;
}

export default function GlitchCounter({ value, label, suffix = '+', className = '', image }: GlitchCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentValue = Math.floor(easeOutQuad(progress) * (endValue - startValue) + startValue);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(timer);
  }, [isInView, value]);

  return (
    <div
      ref={counterRef}
      className={`group relative p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden ${className}`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {image ? (
          <div className="w-full h-32 relative">
            <Image
              src={image}
              alt={label || "Counter Image"}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : (
          <>
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
              {displayValue.toLocaleString()}{suffix}
            </div>
            <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-bold">{label}</div>
          </>
        )}
      </div>

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0WiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPgo8cGF0aCBkPSJNMSAwTDAgMVoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz4KPC9zdmc+')] opacity-10"></div>
      </div>
    </div>
  );
}
