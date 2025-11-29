import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "PVC Prozori - Prevare Dražena Filjevića s PVC Prozorima",
    description: "Dokumentirane prevare Dražena Filjevića (dado cro music) vezane uz PVC prozore. Kako prepoznati prevaru, zaštititi se i što učiniti ako ste prevareni kod kupnje PVC prozora.",
    keywords: ["pvc prozori", "prevara pvc prozori", "drazen filjevic pvc", "prozori prevara"],
    openGraph: {
        title: "PVC Prozori - Prevare i Zaštita",
        description: "Sve o prijevarama s PVC prozorima - slučaj Dražena Filjevića",
        url: `${siteUrl}/pvc-prozori`,
        type: "article",
    },
};

export default function PVCProzoriPage() {
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
                        PVC Prozori
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-950 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            PVC prozori su najčešći predmet prijevara u građevinskoj industriji.
                            Dražen Filjević (dado cro music) prevario je preko 100 ljudi upravo kod kupnje PVC prozora.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Zašto Baš PVC Prozori?</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            PVC prozori su idealna meta za prevarante jer:
                        </p>
                        <ul className="space-y-3 text-white/80 text-lg">
                            <li className="bg-zinc-900 p-4 rounded-lg border border-yellow-500/30">
                                💰 <strong className="text-yellow-400">Visoka vrijednost</strong> - Kompletna zamjena prozora košta 5,000-30,000 €
                            </li>
                            <li className="bg-zinc-900 p-4 rounded-lg border border-yellow-500/30">
                                ⏱️ <strong className="text-yellow-400">Dugo vrijeme izrade</strong> - Normalno je čekati 4-8 tjedana
                            </li>
                            <li className="bg-zinc-900 p-4 rounded-lg border border-yellow-500/30">
                                📦 <strong className="text-yellow-400">Prilagođena narudžba</strong> - Svaki prozor mjeren po mjeri
                            </li>
                            <li className="bg-zinc-900 p-4 rounded-lg border border-yellow-500/30">
                                💳 <strong className="text-yellow-400">Očekivani avans</strong> - Normalno je platiti avans za narudžbu
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Tipične Prevare s PVC Prozorima</h2>
                        <div className="space-y-4">
                            <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">1. Avans Prevara</h3>
                                <p className="text-white/80 text-lg mb-3">Najčešća prevara:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Izvođač dolazi, mjeri prozore, daje ponudu</li>
                                    <li>• Traži 50-100% avansa "za naručivanje prozora iz Njemačke/Austrije"</li>
                                    <li>• Nakon primanja novca prestaje odgovarati</li>
                                    <li>• Prozori nikada ne stižu</li>
                                </ul>
                                <div className="mt-4 p-4 bg-red-950 rounded">
                                    <strong className="text-red-400">Primjer - Filjević:</strong>
                                    <p className="text-white/80 mt-2">
                                        Obitelj iz Rijeke platila 18,500 € za 12 prozora. Čekali 6 mjeseci,
                                        prozori nikada nisu stigli. Filjević prestao odgovarati na pozive.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">2. Zamjena Kvalitete</h3>
                                <p className="text-white/80 text-lg mb-3">Sofisticiranija prevara:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Dogovara se premium kvaliteta (npr. Rehau, Schüco)</li>
                                    <li>• Ugrađuje se jeftinija, nepoznata marka</li>
                                    <li>• Razlika u cijeni ide u džep prevaranta</li>
                                    <li>• Prozori lošije kvalitete, propuštaju, brzo se kvare</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">3. Loša Ugradnja</h3>
                                <p className="text-white/80 text-lg mb-3">Čak i kada prozori stignu:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Nepravilna ugradnja koja propušta vodu i zrak</li>
                                    <li>• Nedostaje pravilna izolacija</li>
                                    <li>• Prozori se ne mogu pravilno otvarati/zatvarati</li>
                                    <li>• Izvođač odbija doći na reklamaciju</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">4. Lažne Garancije</h3>
                                <p className="text-white/80 text-lg mb-3">Garancija koja ne vrijedi:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Nudi se 10-godišnja garancija</li>
                                    <li>• Firma zatvara nakon 6 mjeseci</li>
                                    <li>• Garancija postaje bezvrijedna</li>
                                    <li>• Proizvođač ne priznaje garanciju jer izvođač nije ovlašteni partner</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Slučaj: Dražen Filjević i PVC Prozori</h2>
                        <div className="bg-red-950 p-6 rounded-lg border border-red-500/30">
                            <p className="text-white/80 text-lg mb-4">
                                Dražen Filjević specijalizirao se za prevare s PVC prozorima:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-zinc-900 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-red-400 mb-2">100+</div>
                                    <div className="text-white/80">Žrtava prevara s prozorima</div>
                                </div>
                                <div className="bg-zinc-900 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-red-400 mb-2">300,000+ €</div>
                                    <div className="text-white/80">Ukradeno samo na prozorima</div>
                                </div>
                            </div>
                            <p className="text-white/80 mt-4">
                                Koristio je firme: VRHUNSKA GRAĐEVINSKA STOLARIJA, UNITEC INTERNATIONAL,
                                PORTA NOVA, THERMO FEN PLAST - sve za istu prevaru.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Kupiti PVC Prozore Sigurno?</h2>
                        <div className="bg-green-950 p-6 rounded-lg border border-green-500/30">
                            <h3 className="text-xl font-bold text-green-400 mb-4">✓ Kontrolna Lista:</h3>
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Provjerite firmu</strong> - Koliko dugo postoji? Ima li fizičku poslovnicu?</li>
                                <li><strong>Posjetite izložbeni prostor</strong> - Vidite uzorke prozora uživo</li>
                                <li><strong>Tražite certifikate</strong> - Ovlašteni distributer poznatih brendova?</li>
                                <li><strong>Čitajte recenzije</strong> - Google, Facebook, forumi - što kažu drugi kupci?</li>
                                <li><strong>Provjerite reference</strong> - Kontaktirajte barem 3 prethodna klijenta</li>
                                <li><strong>Usporedite ponude</strong> - Dobijte ponude od 3-5 različitih izvođača</li>
                                <li><strong>Pisani ugovor</strong> - Detaljan s točnim specifikacijama i rokovima</li>
                                <li><strong>Ograničen avans</strong> - Maksimalno 30%, ostatak po isporuci/ugradnji</li>
                                <li><strong>Provjerite garanciju</strong> - Je li od proizvođača ili samo od izvođača?</li>
                                <li><strong>Insistirajte na računu</strong> - Službeni račun s PDV-om</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Crvene Zastavice Kod PVC Prozora</h2>
                        <div className="bg-red-950 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-4">🚩 BJEŽITE AKO:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li>• Cijena je 30%+ niža od konkurencije (predobro da bi bilo istinito)</li>
                                <li>• Traži 50% ili više avansa</li>
                                <li>• Nema izložbeni prostor ili poslovnicu</li>
                                <li>• Ne može pokazati certifikate proizvođača</li>
                                <li>• Firma osnovana prije manje od godinu dana</li>
                                <li>• Nema online recenzija ili su sve negativne</li>
                                <li>• Pritisak da se odlučite odmah "jer je akcija ograničena"</li>
                                <li>• Ne želi dati pisani ugovor ili je ugovor nejasan</li>
                                <li>• Kontakt samo preko mobitela, nema fiksnog telefona</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Što Učiniti Ako Ste Prevareni?</h2>
                        <div className="bg-yellow-950 p-6 rounded-lg border border-yellow-500/30">
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Odmah prijavite policiji</strong> - Kaznena prijava za prijevaru</li>
                                <li><strong>Dokumentirajte sve</strong> - Ugovor, poruke, dokazi plaćanja, fotografije</li>
                                <li><strong>Kontaktirajte odvjetnika</strong> - Građanska tužba za naknadu štete</li>
                                <li><strong>Pridružite se drugim žrtvama</strong> - Zajednička tužba je jača</li>
                                <li><strong>Javite medijima</strong> - Upozorite druge potencijalne žrtve</li>
                                <li><strong>Ostavite recenziju online</strong> - Google, Facebook, forumi</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/pvc-vrata" className="block p-4 bg-zinc-900 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Vrata</h3>
                                <p className="text-white/70">Prevare s PVC vratima</p>
                            </Link>
                            <Link href="/pvc-instalacije" className="block p-4 bg-zinc-900 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Instalacije</h3>
                                <p className="text-white/70">Prevare s instalacijama</p>
                            </Link>
                            <Link href="/drazen-filjevic-prevara" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Dražen Filjević Prevara</h3>
                                <p className="text-white/70">Sve dokumentirane prevare</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara</h3>
                                <p className="text-white/70">Opće informacije</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-950 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-2">
                            PODIJELITE - ZAŠTITITE DRUGE OD PREVARE S PVC PROZORIMA
                        </p>
                        <p className="text-white/70 text-center mb-0">
                            Vaša podjela može spasiti nekoga od gubitka životne ušteđevine
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
