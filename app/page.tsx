"use client";

import GlitchCounter from '../components/GlitchCounter';
import { PulsatingBadge } from '../components/PulsatingBadge';
import { ShareButton } from '../components/ShareButton';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/drazen-cro-dado-music.png',
  '/drazen-filjevic-prevara.png',
  '/drazen-filjevic-prevarant1.png',
  '/prevara-drazen-filjevic-cro-dado-music.png',
];

export default function Home() {
  return (
    <div className="w-full">
      <ShareButton />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto text-center relative">
          {/* PREVARANT Stamps - More Visible */}
          <div className="absolute -left-4 top-10 -rotate-12 opacity-70 pointer-events-none hidden lg:block z-0">
            <div className="border-8 border-red-600 rounded-lg p-6 bg-red-600/20">
              <p className="text-red-600 font-black text-7xl tracking-wider">PREVARANT</p>
            </div>
          </div>
          <div className="absolute -right-4 top-32 rotate-12 opacity-70 pointer-events-none hidden lg:block z-0">
            <div className="border-8 border-red-600 rounded-lg p-6 bg-red-600/20">
              <p className="text-red-600 font-black text-7xl tracking-wider">PREVARANT</p>
            </div>
          </div>
          <div className="absolute left-10 bottom-20 rotate-6 opacity-60 pointer-events-none hidden lg:block z-0">
            <div className="border-8 border-red-600 rounded-lg p-6 bg-red-600/20">
              <p className="text-red-600 font-black text-6xl tracking-wider">PREVARANT</p>
            </div>
          </div>
          <div className="absolute right-10 bottom-40 -rotate-6 opacity-60 pointer-events-none hidden lg:block z-0">
            <div className="border-8 border-red-600 rounded-lg p-6 bg-red-600/20">
              <p className="text-red-600 font-black text-6xl tracking-wider">PREVARANT</p>
            </div>
          </div>

          <div className="mb-8 md:mb-12 px-4 relative z-10">
            <PulsatingBadge>
              BOK, ja sam DADO i najviše volim krast tuđi novac!
            </PulsatingBadge>
            <div className="flex flex-col space-y-4 mt-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white">
                Dražen Filjević
              </h1>
              <p className="text-2xl md:text-3xl text-white/80 font-semibold">
                dado cro music
              </p>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
              <GlitchCounter
                value={130}
                label="prevarenih ljudi"
                className="hover:shadow-red-500/20 hover:border-red-400/50 h-full"
              />
              <GlitchCounter
                value={12}
                label="RAZLIČITIH FIRMI"
                className="hover:shadow-yellow-500/20 hover:border-yellow-400/50 h-full"
              />
              <GlitchCounter
                value={20}
                label="OSUDA ZA PRIJEVARU"
                suffix=""
                className="hover:shadow-pink-500/20 hover:border-pink-400/50 h-full"
              />
              <GlitchCounter
                value={400000}
                label="UKRADENO OD LJUDI"
                suffix="+ €"
                className="hover:shadow-green-500/20 hover:border-green-400/99 h-full"
              />
            </div>

            {/* Companies and Accomplices Section */}
            <div className="w-full mt-12 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-red-400 text-center mb-8">
                FIRME I SURADNICI KORIŠTENI ZA PREVARE
              </h2>

              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <Link href="/tamara-vukmanovic" className="bg-red-950 border-2 border-red-500/50 rounded-lg p-6 hover:bg-red-800/80 transition-all block">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">👤</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-red-400 mb-2">Tamara Vukmanović</h3>
                      <p className="text-xl text-white font-semibold mb-2">VGS Fenster j.d.o.o.</p>
                      <p className="text-white/80">📍 Donjozelinska ulica 124</p>
                      <p className="text-white/80">Donja Zelina</p>
                    </div>
                  </div>
                </Link>

                <Link href="/unitec-international" className="bg-yellow-950 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-800/80 transition-all block">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🏢</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">UNITEC INTERNATIONAL j.d.o.o.</h3>
                      <p className="text-white/80">📍 Donjozelinska ulica 124</p>
                      <p className="text-white/80">Općina: Sveti Ivan Zelina</p>
                    </div>
                  </div>
                </Link>

                <Link href="/damir-iharosi" className="bg-red-950 border-2 border-red-500/50 rounded-lg p-6 hover:bg-red-800/80 transition-all block">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">👤</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-red-400 mb-2">Damir Iharoši</h3>
                      <p className="text-xl text-white font-semibold mb-2">THERMO FEN PLAST j.d.o.o.</p>
                      <p className="text-white/80">📍 Brezovec Zelinski 3A</p>
                      <p className="text-white/80">Brezovec Zelinski</p>
                    </div>
                  </div>
                </Link>

                <Link href="/vrhunska-gradjevinska-stolarija" className="bg-yellow-950 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-800/80 transition-all block">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🏢</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o.</h3>
                      <p className="text-red-400 font-bold mb-2">⚠️ U STEČAJU</p>
                      <p className="text-white/80">📍 Zagrebačka cesta 68</p>
                      <p className="text-white/80">Goričica</p>
                    </div>
                  </div>
                </Link>

                <Link href="/vgs-fenster" className="bg-yellow-950 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-800/80 transition-all block">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🏢</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">VGS Fenster j.d.o.o.</h3>
                      <p className="text-white/80">📍 Donjozelinska ulica 124</p>
                      <p className="text-white/80">Donja Zelina</p>
                    </div>
                  </div>
                </Link>

                <Link href="/porta-nova" className="bg-yellow-950 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-800/80 transition-all block">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🏢</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">PORTA NOVA d.o.o.</h3>
                      <p className="text-white/80 text-sm italic">Korištena za prevare</p>
                    </div>
                  </div>
                </Link>

                <Link href="/thermo-fen-plast" className="bg-yellow-950 border-2 border-yellow-500/50 rounded-lg p-6 hover:bg-yellow-800/80 transition-all block">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🏢</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">THERMO FEN PLAST j.d.o.o.</h3>
                      <p className="text-white/80">📍 Brezovec Zelinski 3A</p>
                      <p className="text-white/80">Brezovec Zelinski</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <p className="text-white/70 text-lg">
                  <strong className="text-red-400">UPOZORENJE:</strong> Sve navedene firme i osobe povezane su s prijevarama Dražena Filjevića
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 px-4 bg-black/40 backdrop-blur-sm w-full relative">
        <div className="absolute -right-8 top-10 rotate-12 opacity-50 pointer-events-none hidden lg:block">
          <div className="border-8 border-red-600 rounded-lg p-6 bg-red-600/20">
            <p className="text-red-600 font-black text-6xl tracking-wider">PREVARANT</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Video Dokaz Prevara
          </h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl border-4 border-red-500/50">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/pc35vPmWZGA"
              title="Dražen Filjević Prevara"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-white/70 text-center mt-4">
            Dokumentarni video o prijevarama Dražena Filjevića
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black/30 backdrop-blur-sm w-full relative">
        <div className="absolute left-10 top-20 -rotate-12 opacity-50 pointer-events-none hidden lg:block">
          <div className="border-8 border-red-600 rounded-lg p-6 bg-red-600/20">
            <p className="text-red-600 font-black text-6xl tracking-wider">PREVARANT</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            "Testimonials" Njegovih Firmi
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Dokazi i slike iz njegovih "uspješnih" poslova
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* VGS Fenster Images */}
            <a href="/vgsfenster2.JPG" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-red-500/30 overflow-hidden hover:border-red-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/vgsfenster2.JPG"
                  alt="VGS Fenster prevara"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">VGS Fenster</h3>
                <p className="text-white/70 text-sm">Jedna od brojnih firmi korištenih za prevare</p>
              </div>
            </a>

            <a href="/vgsfenster3.JPG" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-red-500/30 overflow-hidden hover:border-red-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/vgsfenster3.JPG"
                  alt="VGS Fenster dokumenti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">VGS Dokumenti</h3>
                <p className="text-white/70 text-sm">Lažna dokumentacija i obećanja</p>
              </div>
            </a>

            <a href="/vgsfenster4.JPG" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-red-500/30 overflow-hidden hover:border-red-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/vgsfenster4.JPG"
                  alt="VGS Fenster prevara dokaz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">VGS "Kvaliteta"</h3>
                <p className="text-white/70 text-sm">Rezultat "vrhunske" usluge</p>
              </div>
            </a>

            {/* Thermo Fen Plast */}
            <a href="/trebamhr-thermoplast-drazenfiljevic.PNG" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-yellow-500/30 overflow-hidden hover:border-yellow-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/trebamhr-thermoplast-drazenfiljevic.PNG"
                  alt="Thermo Fen Plast prevara"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">THERMO FEN PLAST</h3>
                <p className="text-white/70 text-sm">Oglas na Trebam.hr - još jedna prevara</p>
              </div>
            </a>

            {/* Drazen Photos */}
            <a href="/drazen filjevic2.JPG" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-green-500/30 overflow-hidden hover:border-green-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/drazen filjevic2.JPG"
                  alt="Dražen Filjević"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">Dražen Filjević</h3>
                <p className="text-white/70 text-sm">Lice iza svih prevara</p>
              </div>
            </a>

            <a href="/drazenfiljevic3.JPG" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-green-500/30 overflow-hidden hover:border-green-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/drazenfiljevic3.JPG"
                  alt="Dražen Filjević dado"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">Dado Cro Music</h3>
                <p className="text-white/70 text-sm">Isti čovjek, različiti identiteti</p>
              </div>
            </a>

            {/* More Evidence */}
            <a href="/drazen-filjevic-prevara.png" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-red-500/30 overflow-hidden hover:border-red-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/drazen-filjevic-prevara.png"
                  alt="Dokaz prevare"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">Dokumentirane Prevare</h3>
                <p className="text-white/70 text-sm">Službeni dokazi i izvještaji</p>
              </div>
            </a>

            <a href="/drazen-filjevic-prevarant1.png" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-red-500/30 overflow-hidden hover:border-red-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/drazen-filjevic-prevarant1.png"
                  alt="Prevarant dokaz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">Medijski Izvještaji</h3>
                <p className="text-white/70 text-sm">Novinski članci o prijevarama</p>
              </div>
            </a>

            <a href="/prevara-drazen-filjevic-cro-dado-music.png" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-lg border border-red-500/30 overflow-hidden hover:border-red-400 transition-all block">
              <div className="relative h-64">
                <Image
                  src="/prevara-drazen-filjevic-cro-dado-music.png"
                  alt="Cro Dado Music prevara"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">Online Prevare</h3>
                <p className="text-white/70 text-sm">Kako vara kroz društvene mreže</p>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center bg-red-950 border border-red-500/30 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-white/90 text-lg font-bold mb-2">
              ⚠️ UPOZORENJE ZA SVE KUPCE ⚠️
            </p>
            <p className="text-white/80">
              Sve ove slike su dokaz sistematskih prevara. Ako prepoznajete bilo koju od ovih firmi ili osoba,
              odmah kontaktirajte policiju i ne plaćajte nikakve avanse!
            </p>
          </div>
        </div>
      </section>

      {/* Image Marquee */}
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
                    priority={index < 4}
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
    </div>
  );
}
