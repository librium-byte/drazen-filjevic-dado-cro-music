import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Dražen Filjević Prevara - Dokumentirane Prijevare i Žrtve",
    description: "Detaljne informacije o prijevarama Dražena Filjevića (dado cro music). Preko 130 dokumentiranih žrtava, 400,000+ € ukradeno, sudski postupci i svjedočanstva prevarenih ljudi.",
    keywords: ["drazen filjevic prevara", "prevara", "prijevara", "dado cro music prevara", "pvc prevara"],
    openGraph: {
        title: "Dražen Filjević Prevara - Dokumentirane Prijevare i Žrtve",
        description: "Sve o prijevarama Dražena Filjevića - 130+ žrtava, 400,000+ € ukradeno.",
        url: `${siteUrl}/drazen-filjevic-prevara`,
        type: "article",
        images: [
            {
                url: `${siteUrl}/drazen-filjevic-prevara.png`,
                width: 1200,
                height: 630,
                alt: "Dražen Filjević Prevara",
            },
        ],
    },
};

export default function DrazenFiljevicPrevaraPage() {
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
                        Dražen Filjević Prevara
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-950 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ DOKUMENTIRANE PRIJEVARE</h2>
                        <p className="text-white/90 mb-0">
                            Ova stranica sadrži dokumentirane informacije o prijevarama Dražena Filjevića,
                            temeljene na sudskim presudama, novinskim člancima i svjedočanstvima žrtava.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Statistika Prijevara</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 text-center">
                                <div className="text-5xl font-bold text-red-400 mb-2">130+</div>
                                <div className="text-white/80 text-lg">Dokumentiranih žrtava</div>
                            </div>
                            <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 text-center">
                                <div className="text-5xl font-bold text-red-400 mb-2">400,000+€</div>
                                <div className="text-white/80 text-lg">Ukradenog novca</div>
                            </div>
                            <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 text-center">
                                <div className="text-5xl font-bold text-red-400 mb-2">20+</div>
                                <div className="text-white/80 text-lg">Sudskih postupaka</div>
                            </div>
                            <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 text-center">
                                <div className="text-5xl font-bold text-red-400 mb-2">12+</div>
                                <div className="text-white/80 text-lg">Različitih firmi</div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Tipovi Prijevara</h2>
                        <div className="space-y-4">
                            <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">1. Prevara s Avansom</h3>
                                <p className="text-white/80 text-lg mb-3">Najčešći tip prijevare:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Traži 50-100% avansa "za naručivanje materijala"</li>
                                    <li>• Nakon primanja novca prestaje odgovarati na pozive</li>
                                    <li>• Prozori/vrata nikada ne stižu</li>
                                    <li>• Prosječna šteta: 5,000 - 20,000 € po žrtvi</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">2. Djelomična Isporuka</h3>
                                <p className="text-white/80 text-lg mb-3">Sofisticiranija varijanta:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Isporuči dio narudžbe (npr. 2 od 10 prozora)</li>
                                    <li>• Traži dodatni avans za "ostatak"</li>
                                    <li>• Nakon drugog avansa nestaje</li>
                                    <li>• Žrtva ostaje s nepotpunom instalacijom</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">3. Loša Kvaliteta</h3>
                                <p className="text-white/80 text-lg mb-3">Kada ipak isporuči:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Materijali lošije kvalitete od dogovorenih</li>
                                    <li>• Loša ugradnja koja propušta</li>
                                    <li>• Odbija popravke ili dolazak na reklamaciju</li>
                                    <li>• Žrtva mora platiti drugog izvođača za popravak</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">4. Lažno Predstavljanje</h3>
                                <p className="text-white/80 text-lg mb-3">Obmana o identitetu:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Predstavlja se kao ovlašteni distributer poznatih brendova</li>
                                    <li>• Koristi logotipe bez dozvole</li>
                                    <li>• Lažira certifikate i garancije</li>
                                    <li>• Brendovi nemaju veze s njim</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Dokumentirani Slučajevi</h2>
                        <div className="space-y-6">
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Slučaj 1: Obitelj iz Rijeke</h3>
                                <p className="text-white/80 mb-2"><strong>Šteta:</strong> 18,500 €</p>
                                <p className="text-white/80 mb-2"><strong>Datum:</strong> Ožujak 2022</p>
                                <p className="text-white/80">
                                    Mlada obitelj platila avans za kompletnu PVC stolariju za novu kuću.
                                    Filjević je došao, izmjerio, uzeo novac i nestao. Obitelj morala uzeti kredit
                                    za ponovnu kupnju prozora od drugog dobavljača.
                                </p>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Slučaj 2: Umirovljenica iz Pule</h3>
                                <p className="text-white/80 mb-2"><strong>Šteta:</strong> 6,200 €</p>
                                <p className="text-white/80 mb-2"><strong>Datum:</strong> Lipanj 2022</p>
                                <p className="text-white/80">
                                    Starija gospođa željela zamijeniti stare prozore. Platila 100% avansa jer je
                                    Filjević obećao "poseban popust za umirovljenike". Prozori nikada nisu stigli,
                                    a novac je bio njena životna ušteđevina.
                                </p>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Slučaj 3: Poduzetnik iz Zagreba</h3>
                                <p className="text-white/80 mb-2"><strong>Šteta:</strong> 32,000 €</p>
                                <p className="text-white/80 mb-2"><strong>Datum:</strong> Rujan 2022</p>
                                <p className="text-white/80">
                                    Vlasnik male firme naručio PVC stolariju za poslovni prostor. Filjević isporučio
                                    samo 30% narudžbe loše kvalitete, uzeo drugi avans za "ostatak" i nestao.
                                    Renovacija poslovnog prostora odgođena za 6 mjeseci.
                                </p>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Slučaj 4: Zgrada u Rijeci</h3>
                                <p className="text-white/80 mb-2"><strong>Šteta:</strong> 85,000 €</p>
                                <p className="text-white/80 mb-2"><strong>Datum:</strong> Studeni 2022</p>
                                <p className="text-white/80">
                                    Stanari zgrade skupili novac za energetsku obnovu. Filjević ponudio "najbolju cijenu",
                                    uzeo avans od 85,000 € i nestao. 24 obitelji ostalo bez novca i bez prozora.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Sudski Postupci</h2>
                        <div className="bg-red-950 p-6 rounded-lg border border-red-500/30">
                            <p className="text-white/80 text-lg mb-4">
                                Prema javno dostupnim sudskim zapisima, protiv Dražena Filjevića vodi se:
                            </p>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">⚖️</span>
                                    <span><strong>Više od 20 kaznenih postupaka</strong> za prijevaru</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">📋</span>
                                    <span><strong>Desetine građanskih tužbi</strong> za naknadu štete</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">🔒</span>
                                    <span><strong>Privremeni pritvor</strong> zbog opasnosti od ponavljanja</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">💰</span>
                                    <span><strong>Blokade računa</strong> i pokušaji naplate</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Se Zaštititi?</h2>
                        <div className="bg-green-950 p-6 rounded-lg border border-green-500/30">
                            <h3 className="text-xl font-bold text-green-400 mb-4">✓ Koraci Zaštite:</h3>
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Provjerite sudski registar</strong> - Tražite ime i OIB izvođača</li>
                                <li><strong>Tražite reference</strong> - Kontaktirajte prethodne klijente</li>
                                <li><strong>Maksimalno 30% avansa</strong> - Nikada ne plaćajte više</li>
                                <li><strong>Pisani ugovor</strong> - Detaljno specificiran s rokom isporuke</li>
                                <li><strong>Provjerite firmu</strong> - Je li registrirana, koliko dugo postoji</li>
                                <li><strong>Online recenzije</strong> - Google, Facebook, forumi</li>
                                <li><strong>Fizička adresa</strong> - Posjetite poslovnicu/izložbeni prostor</li>
                                <li><strong>Certifikati</strong> - Provjerite autentičnost kod proizvođača</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Što Učiniti Ako Ste Prevareni?</h2>
                        <div className="bg-yellow-950 p-6 rounded-lg border border-yellow-500/30">
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Prijavite policiji</strong> - Odmah podnesite kaznenu prijavu</li>
                                <li><strong>Dokumentirajte sve</strong> - Ugovori, poruke, dokazi plaćanja</li>
                                <li><strong>Kontaktirajte odvjetnika</strong> - Za građansku tužbu</li>
                                <li><strong>Javite medijima</strong> - Upozorite druge potencijalne žrtve</li>
                                <li><strong>Pridružite se grupi žrtava</strong> - Zajednička tužba jača</li>
                                <li><strong>Podijelite iskustvo online</strong> - Google recenzije, forumi</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic" className="block p-4 bg-zinc-900 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dražen Filjević</h3>
                                <p className="text-white/70">Biografija i informacije</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara</h3>
                                <p className="text-white/70">Opće informacije o prijevarama</p>
                            </Link>
                            <Link href="/pvc-prozori" className="block p-4 bg-zinc-900 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Prozori</h3>
                                <p className="text-white/70">Prijevare s prozorima</p>
                            </Link>
                            <Link href="/fraud" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Fraud (English)</h3>
                                <p className="text-white/70">International warning</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-950 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-2">
                            PODIJELITE DA DADO NE MOŽE VIŠE VARATI
                        </p>
                        <p className="text-white/70 text-center mb-0">
                            Svaka podijeljena informacija može spasiti nekoga od prijevare
                        </p>
                    </div>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "Dražen Filjević Prevara - Dokumentirane Prijevare i Žrtve",
                            "description": "Detaljne informacije o prijevarama Dražena Filjevića",
                            "author": {
                                "@type": "Organization",
                                "name": "Žrtve Dražena Filjevića"
                            },
                            "about": {
                                "@type": "Person",
                                "name": "Dražen Filjević",
                                "description": "Prevarant s 130+ dokumentiranih žrtava"
                            },
                            "inLanguage": "hr"
                        }),
                    }}
                />
            </article>
        </div>
    );
}
