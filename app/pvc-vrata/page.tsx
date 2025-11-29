import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "PVC Vrata - Prevare Dražena Filjevića s PVC Vratima",
    description: "Dokumentirane prevare Dražena Filjevića (dado cro music) vezane uz PVC vrata. Kako prepoznati prevaru kod kupnje PVC ulaznih vrata i zaštititi se od prijevara.",
    keywords: ["pvc vrata", "prevara pvc vrata", "drazen filjevic vrata", "ulazna vrata prevara"],
    openGraph: {
        title: "PVC Vrata - Prevare i Zaštita",
        description: "Sve o prijevarama s PVC vratima - slučaj Dražena Filjevića",
        url: `${siteUrl}/pvc-vrata`,
        type: "article",
    },
};

export default function PVCVrataPage() {
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
                        PVC Vrata
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            PVC ulazna vrata su česta meta prijevara zbog visoke vrijednosti i potrebe za avansom.
                            Dražen Filjević (dado cro music) prevario je desetine ljudi kod kupnje PVC vrata.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Zašto su PVC Vrata Rizična Kupnja?</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            PVC ulazna vrata privlače prevarante jer:
                        </p>
                        <ul className="space-y-3 text-white/80 text-lg">
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                💰 <strong className="text-yellow-400">Visoka cijena</strong> - Kvalitetna PVC vrata koštaju 2,000-8,000 €
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                🔧 <strong className="text-yellow-400">Prilagođena izrada</strong> - Svaka vrata po mjeri kupca
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                ⏱️ <strong className="text-yellow-400">Dugo čekanje</strong> - Normalno je čekati 3-6 tjedana
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                🔒 <strong className="text-yellow-400">Sigurnosna oprema</strong> - Brave, cilindri, okovi dodaju na vrijednost
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Tipične Prevare s PVC Vratima</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">1. Avans bez Isporuke</h3>
                                <p className="text-white/80 text-lg mb-3">Klasična prevara:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Izvođač dolazi, mjeri otvor za vrata</li>
                                    <li>• Nudi "premium" vrata s vrhunskom sigurnošću</li>
                                    <li>• Traži 70-100% avansa za "narudžbu iz inozemstva"</li>
                                    <li>• Nakon plaćanja nestaje, vrata nikada ne stižu</li>
                                </ul>
                                <div className="mt-4 p-4 bg-red-500/20 rounded">
                                    <strong className="text-red-400">Primjer - Filjević:</strong>
                                    <p className="text-white/80 mt-2">
                                        Vlasnik kuće u Puli platio 5,800 € za PVC ulazna vrata s protuprovlnom bravicom.
                                        Čekao 4 mjeseca, Filjević prestao odgovarati. Vrata nikada nisu stigla.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">2. Zamjena Sigurnosne Opreme</h3>
                                <p className="text-white/80 text-lg mb-3">Opasna prevara:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Dogovara se protuprovlna brava i cilindar visoke sigurnosti</li>
                                    <li>• Ugrađuje se jeftina, nesigurna oprema</li>
                                    <li>• Vrata izgledaju dobro, ali ne pružaju sigurnost</li>
                                    <li>• Razlika u cijeni ide prevarantu</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">3. Loša Ugradnja</h3>
                                <p className="text-white/80 text-lg mb-3">Čak i kada vrata stignu:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Nepravilna ugradnja - vrata propuštaju hladnoću</li>
                                    <li>• Loše postavljanje - vrata se teško otvaraju/zatvaraju</li>
                                    <li>• Nedostaje pravilna izolacija oko okvira</li>
                                    <li>• Izvođač odbija doći na reklamaciju</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">4. Lažne Specifikacije</h3>
                                <p className="text-white/80 text-lg mb-3">Obmana o kvaliteti:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Obećava se određeni U-faktor (toplinska izolacija)</li>
                                    <li>• Obećava se sigurnosna klasa RC2 ili RC3</li>
                                    <li>• Isporučena vrata ne zadovoljavaju specifikacije</li>
                                    <li>• Nema certifikata koji potvrđuju kvalitetu</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Dražen Filjević i PVC Vrata</h2>
                        <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                            <p className="text-white/80 text-lg mb-4">
                                Filjević je koristio prevare s PVC vratima kao dio svoje šire sheme:
                            </p>
                            <ul className="space-y-2 text-white/80 text-lg">
                                <li>• Često prodavao vrata u paketu s prozorima</li>
                                <li>• Koristio iste firme: VRHUNSKA GRAĐEVINSKA STOLARIJA, PORTA NOVA, itd.</li>
                                <li>• Tražio visoke avanse (60-100%)</li>
                                <li>• Procijenjeno 30+ žrtava samo kod vrata</li>
                                <li>• Ukupna šteta na vratima: ~100,000 €</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Sigurno Kupiti PVC Vrata?</h2>
                        <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                            <h3 className="text-xl font-bold text-green-400 mb-4">✓ Kontrolna Lista:</h3>
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Provjerite proizvođača</strong> - Poznati brendovi (Schüco, Rehau, Veka)</li>
                                <li><strong>Tražite certifikate</strong> - CE oznaka, sigurnosna klasa, U-faktor</li>
                                <li><strong>Posjetite izložbeni prostor</strong> - Vidite vrata uživo, testirajte kvalitetu</li>
                                <li><strong>Provjerite brave i cilindre</strong> - Poznati proizvođači (EVVA, DOM, KABA)</li>
                                <li><strong>Čitajte recenzije</strong> - Što kažu drugi kupci?</li>
                                <li><strong>Tražite reference</strong> - Kontaktirajte prethodne kupce</li>
                                <li><strong>Usporedite ponude</strong> - Minimum 3 ponude od različitih izvođača</li>
                                <li><strong>Pisani ugovor</strong> - Točne specifikacije, rokovi, kazne za kašnjenje</li>
                                <li><strong>Ograničen avans</strong> - Maksimalno 30%, ostatak po ugradnji</li>
                                <li><strong>Garancija</strong> - Proizvođačka garancija, ne samo od izvođača</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Na Što Obratiti Pažnju?</h2>
                        <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">🔍 Važni Detalji:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li><strong className="text-yellow-400">Broj komora u profilu</strong> - Minimum 5-6 komora za dobru izolaciju</li>
                                <li><strong className="text-yellow-400">Debljina profila</strong> - Minimum 70mm za ulazna vrata</li>
                                <li><strong className="text-yellow-400">Staklo</strong> - Sigurnosno staklo, ne obično</li>
                                <li><strong className="text-yellow-400">Brava</strong> - Protuprovlna, minimum 3 točke zaključavanja</li>
                                <li><strong className="text-yellow-400">Cilindar</strong> - Sigurnosni, s certifikatom</li>
                                <li><strong className="text-yellow-400">Okovi</strong> - Kvalitetni, s garancijom</li>
                                <li><strong className="text-yellow-400">Prag</strong> - Nisko-pražna opcija za pristupačnost</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Crvene Zastavice</h2>
                        <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-4">🚩 OPREZ AKO:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li>• Cijena je sumnjivo niska (30%+ ispod tržišne)</li>
                                <li>• Traži više od 30% avansa</li>
                                <li>• Ne može pokazati certifikate proizvođača</li>
                                <li>• Nema fizički izložbeni prostor</li>
                                <li>• Ne nudi proizvođačku garanciju</li>
                                <li>• Pritisak da se odlučite odmah</li>
                                <li>• Nejasan ili nepotpun ugovor</li>
                                <li>• Firma vrlo nova ili često mijenja naziv</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/pvc-prozori" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Prozori</h3>
                                <p className="text-white/70">Prevare s PVC prozorima</p>
                            </Link>
                            <Link href="/pvc-instalacije" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Instalacije</h3>
                                <p className="text-white/70">Prevare s instalacijama</p>
                            </Link>
                            <Link href="/drazen-filjevic-prevara" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Dražen Filjević Prevara</h3>
                                <p className="text-white/70">Dokumentirane prevare</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara</h3>
                                <p className="text-white/70">Opće informacije</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-2">
                            PODIJELITE - ZAŠTITITE DRUGE OD PREVARE S PVC VRATIMA
                        </p>
                        <p className="text-white/70 text-center mb-0">
                            Sigurnost vašeg doma počinje s pravim izborom
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
