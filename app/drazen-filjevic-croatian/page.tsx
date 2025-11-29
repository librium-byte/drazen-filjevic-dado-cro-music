import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Dražen Filjević - Potpune Informacije na Hrvatskom",
    description: "Sve o Draženu Filjeviću (s hrvatskim znakovima ž i ć). Kompletna dokumentacija o prijevarama, firmama i žrtvama. Preko 130 prevarenih ljudi, 400,000+ € ukradeno u PVC industriji.",
    keywords: ["dražen filjević", "drazen filjevic", "dado", "prevarant", "prijevara", "pvc prozori"],
    openGraph: {
        title: "Dražen Filjević - Potpune Informacije na Hrvatskom",
        description: "Sve o Draženu Filjeviću i njegovim prijevarama u PVC industriji. Dokumentirane žrtve i sudski postupci.",
        url: `${siteUrl}/drazen-filjevic-croatian`,
        type: "article",
        images: [
            {
                url: `${siteUrl}/drazen-cro-dado-music.png`,
                width: 1200,
                height: 630,
                alt: "Dražen Filjević",
            },
        ],
    },
};

export default function DrazenFiljevicCroatianPage() {
    return (
        <div className="w-full min-h-screen">
            <ShareButton />

            <article className="max-w-4xl mx-auto px-4 py-16">
                <div className="mb-8">
                    <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
                        ← Povratak na početnu
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <PoliceSirens />
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                        Dražen Filjević
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE ZA SVE GRAĐANE HRVATSKE</h2>
                        <p className="text-white/90 mb-0">
                            Dražen Filjević (s pravilnim hrvatskim znakovima) je poznati prevarant koji djeluje na području cijele Hrvatske.
                            Ova stranica sadrži službene informacije temeljene na sudskim presudama i medijskim izvještajima.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Identitet i Nadimci</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            <strong>Puno ime:</strong> Dražen Filjević (često pogrešno pisano kao "Drazen Filjevic" bez hrvatskih znakova)
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed">
                            <strong>Poznati nadimci:</strong>
                        </p>
                        <ul className="space-y-2 text-white/80 text-lg">
                            <li>• <strong className="text-green-400">Dado</strong> - Najčešće korišteni nadimak</li>
                            <li>• <strong className="text-green-400">dado cro music</strong> - Online pseudonim</li>
                            <li>• <strong className="text-green-400">music cro dado</strong> - Varijacija online imena</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Područje Djelovanja</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Dražen Filjević je prevario građane diljem Hrvatske, s posebnim fokusom na:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">📍 Primorsko-goranska županija</h3>
                                <p className="text-white/70">Rijeka, Viškovo i okolica - najveći broj žrtava</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">📍 Istarska županija</h3>
                                <p className="text-white/70">Pula, Rovinj i okolna mjesta</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">📍 Zagreb i okolica</h3>
                                <p className="text-white/70">Glavni grad i zagrebačka županija</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">📍 Ostale županije</h3>
                                <p className="text-white/70">Žrtve pronađene diljem Hrvatske</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kronologija Prijevara</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">2018-2019</h3>
                                <p className="text-white/80">Početak prijevara kroz firmu VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">2020-2021</h3>
                                <p className="text-white/80">Proširenje djelovanja kroz UNITEC INTERNATIONAL j.d.o.o. i PORTA NOVA d.o.o.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">2022-2023</h3>
                                <p className="text-white/80">Uhićenje, pritvor i nastavak prijevara kroz THERMO FEN PLAST j.d.o.o.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">2024</h3>
                                <p className="text-white/80">Medijska pažnja, dokumentarne emisije i upozorenja javnosti</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Tipične Žrtve</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Dražen Filjević najčešće cilja:
                        </p>
                        <ul className="space-y-3 text-white/80 text-lg">
                            <li className="bg-white/5 p-4 rounded-lg">
                                👨‍👩‍👧‍👦 <strong className="text-yellow-400">Mlade obitelji</strong> koje renoviraju ili grade kuće
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg">
                                👴 <strong className="text-yellow-400">Starije osobe</strong> koje žele zamijeniti stare prozore
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg">
                                🏢 <strong className="text-yellow-400">Male poduzetnike</strong> koji renoviraju poslovne prostore
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg">
                                🏘️ <strong className="text-yellow-400">Vlasnike stanova</strong> u zgradama koje provode energetsku obnovu
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Pravni Status</h2>
                        <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                            <p className="text-white/80 text-lg leading-relaxed mb-4">
                                Prema javno dostupnim sudskim zapisima:
                            </p>
                            <ul className="space-y-2 text-white/80 text-lg">
                                <li>⚖️ Više od 20 sudskih postupaka za prijevaru</li>
                                <li>🔒 Privremeno pritvaranje zbog opasnosti od ponavljanja kaznenog djela</li>
                                <li>📋 Evidencija u registru sudskih postupaka</li>
                                <li>💰 Dugovanja prema žrtvama prelaze 400,000 eura</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Svjedočanstva Žrtava</h2>
                        <div className="space-y-4">
                            <blockquote className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500 italic">
                                <p className="text-white/80 mb-2">"Dao sam mu 15,000 eura avansa za prozore. Nikad ih nisam dobio, a on ne odgovara na pozive."</p>
                                <footer className="text-white/60">- Žrtva iz Rijeke</footer>
                            </blockquote>
                            <blockquote className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500 italic">
                                <p className="text-white/80 mb-2">"Izmjerio je, uzeo novac i nestao. Kasnije sam saznala da je isto napravio desetinama ljudi."</p>
                                <footer className="text-white/60">- Žrtva iz Pule</footer>
                            </blockquote>
                            <blockquote className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500 italic">
                                <p className="text-white/80 mb-2">"Čekali smo 8 mjeseci. Ništa. Novac je nestao, a on je otvorio novu firmu."</p>
                                <footer className="text-white/60">- Žrtva iz Zagreba</footer>
                            </blockquote>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Prepoznati Prijevaru?</h2>
                        <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">🚩 Crvene Zastavice:</h3>
                            <ul className="space-y-2 text-white/80 text-lg">
                                <li>• Traži visok avans (više od 30%)</li>
                                <li>• Nema fizičku poslovnicu ili izložbeni prostor</li>
                                <li>• Nudi "posebne" cijene samo ako platite odmah</li>
                                <li>• Firma je nedavno osnovana ili često mijenja naziv</li>
                                <li>• Nema online recenzija ili su sve negativne</li>
                                <li>• Izbjegava pisane ugovore ili daje nejasne ugovore</li>
                                <li>• Nema reference ili ne želi dati kontakte prethodnih klijenata</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic" className="block p-4 bg-white/5 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Drazen Filjevic (Latin)</h3>
                                <p className="text-white/70">Verzija bez hrvatskih znakova</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara</h3>
                                <p className="text-white/70">Opće informacije o prijevarama</p>
                            </Link>
                            <Link href="/pvc-prozori" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Prozori</h3>
                                <p className="text-white/70">Prijevare s prozorima</p>
                            </Link>
                            <Link href="/pvc-instalacije" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Instalacije</h3>
                                <p className="text-white/70">Prijevare s instalacijama</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-0">
                            PODIJELITE OVU STRANICU - ZAŠTITITE DRUGE OD PRIJEVARE
                        </p>
                    </div>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "Dražen Filjević - Potpune Informacije na Hrvatskom",
                            "description": "Sve o Draženu Filjeviću i njegovim prijevarama u PVC industriji",
                            "author": {
                                "@type": "Organization",
                                "name": "Žrtve Dražena Filjevića"
                            },
                            "about": {
                                "@type": "Person",
                                "name": "Dražen Filjević",
                                "alternateName": ["dado cro music", "Dado", "Drazen Filjevic"],
                            },
                            "inLanguage": "hr"
                        }),
                    }}
                />
            </article>
        </div>
    );
}
