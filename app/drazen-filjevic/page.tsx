import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Dražen Filjević - Biografija, Firme i Prijevare",
    description: "Kompletne informacije o Draženu Filjeviću, poznatom kao dado cro music. Biografija, poslovne aktivnosti, firme (VRHUNSKA GRAĐEVINSKA STOLARIJA, UNITEC INTERNATIONAL, PORTA NOVA, THERMO FEN PLAST) i dokumentirane prijevare s preko 130 žrtava.",
    keywords: ["drazen filjevic", "dražen filjević", "dado", "dado cro music", "prevarant", "pvc prozori", "pvc vrata"],
    openGraph: {
        title: "Dražen Filjević - Biografija, Firme i Prijevare",
        description: "Kompletne informacije o Draženu Filjeviću i njegovim prijevarama u PVC industriji. Preko 130 žrtava, 400,000+ € ukradeno.",
        url: `${siteUrl}/drazen-filjevic`,
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

export default function DrazenFiljevicPage() {
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
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            Dražen Filjević je dokumentirani prevarant s preko <strong>130 žrtava</strong> i više od <strong>400,000 € ukradenog novca</strong>.
                            Ova stranica sadrži javno dostupne informacije temeljene na novinskim člancima i sudskim dokumentima.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Tko je Dražen Filjević?</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Dražen Filjević, poznat i pod nadimkom <strong>"dado cro music"</strong> ili jednostavno <strong>"Dado"</strong>,
                            je hrvatski poduzetnik koji je stekao notornost zbog brojnih prijevara u industriji PVC stolarije.
                            Kroz više različitih firmi, Filjević je varao kupce diljem Hrvatske, uzimajući avanse za prozore, vrata i instalacije
                            koje nikada nisu bile isporučene ili ugrađene.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Poslovne Aktivnosti i Firme</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Dražen Filjević je tijekom godina osnivao i vodio nekoliko firmi koje su se bavile PVC stolarijom:
                        </p>
                        <ul className="space-y-3 text-white/80 text-lg">
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                <strong className="text-yellow-400">VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o.</strong> - Jedna od prvih firmi kroz koju je provodio prijevare
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                <strong className="text-yellow-400">UNITEC INTERNATIONAL j.d.o.o.</strong> - Firma koja je također korištena za prevare kupaca
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                <strong className="text-yellow-400">PORTA NOVA d.o.o.</strong> - Još jedna firma u nizu koja je služila za prikupljanje avansi
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                <strong className="text-yellow-400">THERMO FEN PLAST j.d.o.o.</strong> - Najnovija firma u nizu prijevara
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Modus Operandi - Kako Vara?</h2>
                        <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                            <ol className="space-y-4 text-white/80 text-lg list-decimal list-inside">
                                <li><strong className="text-red-400">Oglašavanje:</strong> Oglašava se kao "jeftin, brz i pouzdan" izvođač radova</li>
                                <li><strong className="text-red-400">Kontakt:</strong> Dolazi na teren, mjeri prozore/vrata, daje ponudu</li>
                                <li><strong className="text-red-400">Avans:</strong> Traži visok avans (50-100%) prije početka radova</li>
                                <li><strong className="text-red-400">Nestanak:</strong> Nakon primanja novca, prestaje odgovarati na pozive</li>
                                <li><strong className="text-red-400">Nova firma:</strong> Zatvara staru firmu i otvara novu pod drugim nazivom</li>
                                <li><strong className="text-red-400">Ponavljanje:</strong> Proces se ponavlja s novim žrtvama</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Dokumentirane Prijevare</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Prema novinskim izvještajima i svjedočenjima žrtava, Dražen Filjević je:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                                <div className="text-4xl font-bold text-red-400 mb-2">130+</div>
                                <div className="text-white/80">Prevarenih ljudi</div>
                            </div>
                            <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                                <div className="text-4xl font-bold text-red-400 mb-2">400,000+ €</div>
                                <div className="text-white/80">Ukradeno od žrtava</div>
                            </div>
                            <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                                <div className="text-4xl font-bold text-red-400 mb-2">12+</div>
                                <div className="text-white/80">Različitih firmi</div>
                            </div>
                            <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                                <div className="text-4xl font-bold text-red-400 mb-2">20+</div>
                                <div className="text-white/80">Osuda za prijevaru</div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Medijski Izvještaji</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Slučaj Dražena Filjevića dobio je značajnu medijsku pažnju. Glavni mediji koji su izvještavali:
                        </p>
                        <ul className="space-y-3">
                            <li className="text-white/80 text-lg">
                                📰 <strong>Dnevnik.hr</strong> - "Vapaj prevarenih građana: Poduzetnik Dražen Filjević protiv sebe je okrenuo kupce diljem Hrvatske"
                            </li>
                            <li className="text-white/80 text-lg">
                                📰 <strong>Novi list</strong> - "Prevarant iz Viškova u pritvoru: Filjević uhićen nakon što je prevario još dvojicu kupaca"
                            </li>
                            <li className="text-white/80 text-lg">
                                📺 <strong>Dnevnik.hr Video</strong> - Reportaža o slučaju i svjedočenja žrtava
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Se Zaštititi?</h2>
                        <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li>✓ Provjerite registar sudskih postupaka prije poslovanja</li>
                                <li>✓ Tražite reference od prethodnih klijenata</li>
                                <li>✓ Nikada ne plaćajte 100% avansa</li>
                                <li>✓ Potražite online recenzije i iskustva drugih kupaca</li>
                                <li>✓ Budite oprezni s firmama koje često mijenjaju nazive</li>
                                <li>✓ Provjerite je li firma registrirana i aktivna</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic-prevara" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Dražen Filjević Prevara</h3>
                                <p className="text-white/70">Detaljne informacije o prijevarama</p>
                            </Link>
                            <Link href="/pvc-prozori" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Prozori</h3>
                                <p className="text-white/70">Prijevare s PVC prozorima</p>
                            </Link>
                            <Link href="/pvc-vrata" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Vrata</h3>
                                <p className="text-white/70">Prijevare s PVC vratima</p>
                            </Link>
                            <Link href="/dado-cro-music" className="block p-4 bg-white/5 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dado Cro Music</h3>
                                <p className="text-white/70">Informacije o nadimku i online prisutnosti</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-0">
                            PODIJELITE DA DADO NE MOŽE VIŠE VARATI
                        </p>
                    </div>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "Dražen Filjević - Biografija, Firme i Prijevare",
                            "description": "Kompletne informacije o Draženu Filjeviću i njegovim prijevarama u PVC industriji",
                            "author": {
                                "@type": "Organization",
                                "name": "Žrtve Dražena Filjevića"
                            },
                            "about": {
                                "@type": "Person",
                                "name": "Dražen Filjević",
                                "alternateName": ["dado cro music", "Dado"],
                                "description": "Prevarant u PVC industriji"
                            },
                            "inLanguage": "hr"
                        }),
                    }}
                />
            </article>
        </div>
    );
}
