import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Prevara - Kako Prepoznati i Zaštititi Se od Prijevara",
    description: "Kompletni vodič o prijevarama u građevinskoj industriji. Naučite kako prepoznati prevarante poput Dražena Filjevića (dado cro music) i zaštititi se od prevara s PVC stolarijom.",
    keywords: ["prevara", "prijevara", "zaštita od prevare", "građevinska prevara", "pvc prevara"],
    openGraph: {
        title: "Prevara - Kako Prepoznati i Zaštititi Se",
        description: "Vodič za zaštitu od prijevara u građevinskoj industriji",
        url: `${siteUrl}/prevara`,
        type: "article",
    },
};

export default function PrevaraPage() {
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
                        Prevara
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-yellow-400 mt-0">📚 Edukativni Sadržaj</h2>
                        <p className="text-white/90 mb-0">
                            Ova stranica sadrži opće informacije o prijevarama u građevinskoj industriji,
                            s posebnim fokusom na prevare s PVC stolarijom.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Što je Prevara?</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            <strong>Prevara (prijevara)</strong> je kazneno djelo u kojem netko namjerno obmanjuje drugu osobu
                            s ciljem pribavljanja protupravne imovinske koristi. U kontekstu građevinske industrije,
                            prevare najčešće uključuju:
                        </p>
                        <ul className="space-y-2 text-white/80 text-lg mt-4">
                            <li>• Uzimanje avansa bez namjere izvršenja usluge</li>
                            <li>• Lažno predstavljanje kvalitete materijala ili usluga</li>
                            <li>• Nestanak nakon primanja novca</li>
                            <li>• Korištenje lažnih identiteta ili firmi</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Najčešće Prevare u PVC Industriji</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">1. Prevara s Avansom</h3>
                                <p className="text-white/80">
                                    Izvođač traži visok avans (često 50-100%) navodno za kupnju materijala,
                                    a zatim nestaje bez izvršenja posla.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">2. Zamjena Materijala</h3>
                                <p className="text-white/80">
                                    Dogovara se kvalitetan materijal, ali se ugrađuje jeftinija, lošija varijanta.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">3. Lažne Garancije</h3>
                                <p className="text-white/80">
                                    Nudi se garancija koja ne vrijedi jer firma nije ovlašteni distributer ili će uskoro zatvoriti.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">4. Ponavljanje Firmi</h3>
                                <p className="text-white/80">
                                    Ista osoba otvara nove firme nakon što stara dobije loše recenzije ili tužbe.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Crvene Zastavice - Znakovi Upozorenja</h2>
                        <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-4">🚩 Budite Oprezni Ako:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Izvođač inzistira na visokom avansu (više od 30%)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Nema fizičku poslovnicu ili izložbeni prostor</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Nudi "posebne" cijene samo ako platite odmah</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Firma je vrlo nova ili često mijenja naziv</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Nema online recenzija ili su sve negativne</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Izbjegava pisane ugovore ili daje nejasne ugovore</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Ne želi dati reference ili kontakte prethodnih klijenata</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 text-2xl">•</span>
                                    <span>Pritisak da se odlučite brzo "jer je ponuda ograničena"</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Se Zaštititi?</h2>
                        <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                            <h3 className="text-xl font-bold text-green-400 mb-4">✓ 10 Koraka Zaštite:</h3>
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Istražite izvođača</strong> - Google pretraga, društvene mreže, forumi</li>
                                <li><strong>Provjerite sudski registar</strong> - Postoje li tužbe ili presude?</li>
                                <li><strong>Tražite reference</strong> - Kontaktirajte barem 3 prethodna klijenta</li>
                                <li><strong>Posjetite poslovnicu</strong> - Fizička lokacija je znak ozbiljnosti</li>
                                <li><strong>Provjerite registraciju</strong> - Je li firma aktivna, koliko dugo postoji?</li>
                                <li><strong>Usporedite ponude</strong> - Dobijte barem 3 ponude od različitih izvođača</li>
                                <li><strong>Pisani ugovor</strong> - Detaljno specificiran s rokovima i kaznama</li>
                                <li><strong>Ograničen avans</strong> - Maksimalno 30%, nikada 100%</li>
                                <li><strong>Provjerite certifikate</strong> - Kontaktirajte proizvođača za potvrdu</li>
                                <li><strong>Vjerujte instinktu</strong> - Ako nešto izgleda sumnjivo, vjerojatno jest</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Primjer: Dražen Filjević</h2>
                        <div className="bg-white/5 p-6 rounded-lg border border-yellow-500/30">
                            <p className="text-white/80 text-lg mb-4">
                                Dražen Filjević (poznat kao "dado cro music") je savršen primjer kako prevaranti djeluju:
                            </p>
                            <ul className="space-y-2 text-white/80">
                                <li>✗ Otvorio više od 12 različitih firmi</li>
                                <li>✗ Tražio 50-100% avansa</li>
                                <li>✗ Nestajao nakon primanja novca</li>
                                <li>✗ Koristio različite online identitete</li>
                                <li>✗ Prevario 130+ ljudi za 400,000+ €</li>
                            </ul>
                            <Link href="/drazen-filjevic-prevara" className="inline-block mt-4 text-red-400 hover:text-red-300 underline">
                                Pročitajte više o njegovim prijevarama →
                            </Link>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Što Učiniti Ako Ste Prevareni?</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Korak 1: Dokumentirajte</h3>
                                <p className="text-white/80">
                                    Sakupite sve dokaze: ugovore, poruke, e-mailove, dokaze o plaćanju, fotografije.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Korak 2: Prijavite Policiji</h3>
                                <p className="text-white/80">
                                    Odmah podnesite kaznenu prijavu. Što prije, to bolje.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Korak 3: Kontaktirajte Odvjetnika</h3>
                                <p className="text-white/80">
                                    Pripremite građansku tužbu za naknadu štete.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Korak 4: Upozorite Druge</h3>
                                <p className="text-white/80">
                                    Podijelite svoje iskustvo online - Google recenzije, forumi, društvene mreže.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic-prevara" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Dražen Filjević Prevara</h3>
                                <p className="text-white/70">Dokumentirani slučajevi</p>
                            </Link>
                            <Link href="/scam" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Scam (English)</h3>
                                <p className="text-white/70">International warning</p>
                            </Link>
                            <Link href="/pvc-prozori" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Prozori</h3>
                                <p className="text-white/70">Prevare s prozorima</p>
                            </Link>
                            <Link href="/pvc-vrata" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Vrata</h3>
                                <p className="text-white/70">Prevare s vratima</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-0">
                            BUDITE INFORMIRANI - ZAŠTITITE SEBE I DRUGE
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
