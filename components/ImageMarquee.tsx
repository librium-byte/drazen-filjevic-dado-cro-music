"use client";

import Image from 'next/image';

const images = [
    '/drazen-cro-dado-music.png',
    '/drazen-filjevic-prevara.png',
    '/drazen-filjevic-prevarant1.png',
    '/prevara-drazen-filjevic-cro-dado-music.png',
];

export default function ImageMarquee() {
    return (
        <section className="py-12 bg-black/50 backdrop-blur-sm w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 px-4">
                Galerija prevara
            </h2>
            <div className="relative w-full overflow-hidden">
                <div className="marquee">
                    {[...images, ...images].map((img, index) => (
                        <div key={index} className="marquee-item">
                            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative mx-2 md:mx-4">
                                <Image
                                    src={img}
                                    alt={`Slika ${index + 1}`}
                                    fill
                                    className="object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 12rem, (max-width: 1024px) 16rem, 20rem"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        .marquee-item {
          flex-shrink: 0;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        @media (max-width: 768px) {
          .marquee {
            animation-duration: 30s;
          }
        }
      `}</style>
        </section>
    );
}
