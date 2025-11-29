import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";
import Image from "next/image";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Dado Cro Music - Tko je Dado i Zašto Vara?",
    description: "Dado cro music je online pseudonim Dražena Filjevića, poznatog prevaranta u PVC industriji. Saznajte više o njegovoj online prisutnosti, kako se predstavlja i kako vara kupce diljem Hrvatske.",
    keywords: ["dado cro music", "dado", "drazen filjevic", "cro music", "prevarant", "online prevara"],
    openGraph: {
        title: "Dado Cro Music - Tko je Dado i Zašto Vara?",
        description: "Dado cro music - online identitet Dražena Filjevića, prevaranta s preko 130 žrtava.",
        url: `${siteUrl}/dado-cro-music`,
        type: "article",
        images: [
            {
                url: `${siteUrl}/drazen-cro-dado-music.png`,
                width: 1200,
                height: 630,
                alt: "Dado Cro Music",
            },
        ],
    },
};

export default function DadoCroMusicPage() {
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
                        dado cro music
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            "dado cro music" je online pseudonim koji koristi <strong>Dražen Filjević</strong>,
                            dokumentirani prevarant s preko 130 žrtava. Ako ste naišli na ovaj nadimak online, budite oprezni!
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Tko je "dado cro music"?</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            <strong>"dado cro music"</strong> je online identitet koji koristi Dražen Filjević na društvenim mrežama
                            i raznim online platformama. Ovaj nadimak koristi za:
                        </p>
                        <ul className="space-y-3 text-white/80 text-lg">
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                🎵 <strong className="text-yellow-400">Predstavljanje kao glazbenik</strong> - Stvara privid legitimnosti
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                💼 <strong className="text-yellow-400">Poslovne kontakte</strong> - Uspostavljanje povjerenja s potencijalnim žrtvama
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                📱 <strong className="text-yellow-400">Društvene mreže</strong> - Facebook, Instagram i druge platforme
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                🎭 <strong className="text-yellow-400">Alternativni identitet</strong> - Izbjegavanje negativnih recenzija
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Zašto "cro music"?</h2>
                        <div className="bg-white/5 p-6 rounded-lg border border-green-500/30">
                            <p className="text-white/80 text-lg leading-relaxed mb-4">
                                Korištenje naziva "cro music" (Croatian music) služi za:
                            </p>
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong className="text-green-400">Stvaranje povjerenja</strong> - Predstavlja se kao dio glazbene scene</li>
                                <li><strong className="text-green-400">Odvlačenje pažnje</strong> - Odvlači pažnju od poslovnih aktivnosti</li>
                                <li><strong className="text-green-400">Novi identitet</strong> - Izbjegava povezivanje s prijevarama</li>
                                <li><strong className="text-green-400">Pristup novim žrtvama</strong> - Ljudi koji traže "dado cro music" ne znaju za prijevare</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Online Prisutnost</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Dražen Filjević (dado cro music) aktivan je na različitim platformama:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">📘 Facebook</h3>
                                <p className="text-white/70">Profili pod imenom "dado cro music" i varijacijama</p>
                            </div>
                            <div className="bg-pink-500/10 p-6 rounded-lg border border-pink-500/30">
                                <h3 className="text-xl font-bold text-pink-400 mb-2">📸 Instagram</h3>
                                <p className="text-white/70">Objave o glazbi i "lifestyle" sadržaju</p>
                            </div>
                            <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">🎥 YouTube</h3>
                                <p className="text-white/70">Rijetke objave, uglavnom glazbeni sadržaj</p>
                            </div>
                            <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                                <h3 className="text-xl font-bold text-green-400 mb-2">💬 WhatsApp/Viber</h3>
                                <p className="text-white/70">Koristi za komunikaciju s klijentima</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Prepoznati "dado cro music" Online?</h2>
                        <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">🚩 Znakovi Upozorenja:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Profil kombinira glazbeni sadržaj s ponudama za PVC prozore/vrata</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Koristi varijacije imena: "dado", "dado cro", "music cro dado"</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Često mijenja profile ili briše stare objave</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Nema dugoročnu povijest objava (profili često novi)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Kontaktira ljude privatnim porukama s poslovnim ponudama</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Stvarni Identitet</h2>
                        <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-red-400 mb-3">Online Persona</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>✗ "dado cro music"</li>
                                        <li>✗ Glazbenik</li>
                                        <li>✗ Uspješan poduzetnik</li>
                                        <li>✗ Pouzdan partner</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-green-400 mb-3">Stvarnost</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>✓ Dražen Filjević</li>
                                        <li>✓ Dokumentirani prevarant</li>
                                        <li>✓ 130+ žrtava</li>
                                        <li>✓ 400,000+ € ukradeno</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Tipičan Scenarij Prevare</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Korak 1: Prvi Kontakt</h3>
                                <p className="text-white/80">Kontaktira vas preko društvenih mreža ili odgovara na vaš upit za PVC prozore/vrata</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Korak 2: Predstavljanje</h3>
                                <p className="text-white/80">Predstavlja se kao "dado" ili "dado cro music", često spominje glazbu ili druge interese</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Korak 3: Ponuda</h3>
                                <p className="text-white/80">Nudi "posebne" cijene, brzu ugradnju, kvalitetne materijale</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Korak 4: Avans</h3>
                                <p className="text-white/80">Traži visok avans (50-100%) "za naručivanje materijala"</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Korak 5: Nestanak</h3>
                                <p className="text-white/80">Nakon primanja novca, prestaje odgovarati. Blokira vas na društvenim mrežama</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Što Učiniti Ako Ste Kontaktirani?</h2>
                        <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong className="text-green-400">NE PLAĆAJTE</strong> nikakav avans bez provjere</li>
                                <li><strong className="text-green-400">PROVJERITE</strong> identitet - tražite OIB, adresu firme, registraciju</li>
                                <li><strong className="text-green-400">POTRAŽITE</strong> online recenzije i iskustva drugih</li>
                                <li><strong className="text-green-400">PITAJTE</strong> za reference i kontakte prethodnih klijenata</li>
                                <li><strong className="text-green-400">PRIJAVITE</strong> sumnjive profile administratorima platformi</li>
                                <li><strong className="text-green-400">UPOZORITE</strong> druge - podijelite ovu stranicu</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic" className="block p-4 bg-white/5 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dražen Filjević</h3>
                                <p className="text-white/70">Potpune informacije o osobi</p>
                            </Link>
                            <Link href="/music-cro-dado" className="block p-4 bg-white/5 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-colors">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Music Cro Dado</h3>
                                <p className="text-white/70">Varijacija online imena</p>
                            </Link>
                            <Link href="/scam" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Online Scam</h3>
                                <p className="text-white/70">Kako prepoznati online prijevare</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara</h3>
                                <p className="text-white/70">Opće informacije o prijevarama</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-2">
                            PODIJELITE DA DADO NE MOŽE VIŠE VARATI
                        </p>
                        <p className="text-white/70 text-center text-sm mb-0">
                            Ako ste vidjeli "dado cro music" online, upozorite druge!
                        </p>
                    </div>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "Dado Cro Music - Tko je Dado i Zašto Vara?",
                            "description": "Dado cro music je online pseudonim Dražena Filjevića, poznatog prevaranta",
                            "author": {
                                "@type": "Organization",
                                "name": "Žrtve Dražena Filjevića"
                            },
                            "about": {
                                "@type": "Person",
                                "name": "Dražen Filjević",
                                "alternateName": ["dado cro music", "Dado", "music cro dado"],
                            },
                            "inLanguage": "hr"
                        }),
                    }}
                />
            </article>
        </div>
    );
}
