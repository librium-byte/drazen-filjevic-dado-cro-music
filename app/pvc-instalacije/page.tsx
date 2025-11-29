import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "PVC Instalacije - Prevare Dražena Filjevića s PVC Instalacijama",
    description: "Dokumentirane prevare Dražena Filjevića (dado cro music) vezane uz PVC instalacije. Kako prepoznati prevaru kod ugradnje PVC stolarije i zaštititi se od nekvalitetnih instalacija.",
    keywords: ["pvc instalacije", "prevara instalacije", "drazen filjevic instalacije", "ugradnja pvc"],
    openGraph: {
        title: "PVC Instalacije - Prevare i Zaštita",
        description: "Sve o prijevarama s PVC instalacijama - slučaj Dražena Filjevića",
        url: `${siteUrl}/pvc-instalacije`,
        type: "article",
    },
};

export default function PVCInstalacijePage() {
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
                        PVC Instalacije
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            Kvaliteta instalacije je jednako važna kao kvaliteta PVC stolarije.
                            Dražen Filjević (dado cro music) prevario je kupce ne samo neisporukom,
                            već i lošim instalacijama koje su uzrokovale dodatne troškove.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Zašto je Instalacija Kritična?</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Čak i najkvalitetniji PVC prozori i vrata neće funkcionirati pravilno bez stručne instalacije:
                        </p>
                        <ul className="space-y-3 text-white/80 text-lg">
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                🌡️ <strong className="text-yellow-400">Toplinska izolacija</strong> - Loša instalacija = gubitak topline i visoki računi
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                💧 <strong className="text-yellow-400">Vodonepropusnost</strong> - Nepravilna ugradnja = curenje vode i vlaga
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                🔊 <strong className="text-yellow-400">Zvučna izolacija</strong> - Loša montaža = buka prodire
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-yellow-500/30">
                                🔒 <strong className="text-yellow-400">Sigurnost</strong> - Nepravilna ugradnja vrata = smanjena sigurnost
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Tipične Prevare s Instalacijama</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">1. Nekvalitetna Montaža</h3>
                                <p className="text-white/80 text-lg mb-3">Najčešći problem:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Prozori/vrata ugrađeni "na brzinu" bez pravilne procedure</li>
                                    <li>• Nedostaje ili je loše postavljena izolacijska pjena</li>
                                    <li>• Nepravilno postavljene podloške - prozori nisu vodoravni</li>
                                    <li>• Rezultat: propuštanje, kondenzacija, problemi s otvaranjem</li>
                                </ul>
                                <div className="mt-4 p-4 bg-red-500/20 rounded">
                                    <strong className="text-red-400">Primjer - Filjević:</strong>
                                    <p className="text-white/80 mt-2">
                                        Kada je Filjević ipak isporučio prozore (rijetko), instalacija je bila katastrofalna.
                                        Kupci su morali platiti druge majstore da poprave ugradnju.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">2. Nepotpuna Instalacija</h3>
                                <p className="text-white/80 text-lg mb-3">Ostavlja posao nedovršen:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Ugradi prozore ali ne završi završne radove</li>
                                    <li>• Nedostaju unutarnje i vanjske klupice</li>
                                    <li>• Nedostaje silikon oko okvira</li>
                                    <li>• Traži dodatni novac za "završne radove"</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">3. Oštećenje Prilikom Ugradnje</h3>
                                <p className="text-white/80 text-lg mb-3">Neopreznost ili namjera:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Oštećenje zidova, fasade ili postojeće stolarije</li>
                                    <li>• Ogrebotine ili pukotine na novim prozorima/vratima</li>
                                    <li>• Odbija popraviti štetu</li>
                                    <li>• Vlasnik mora platiti popravke</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 p-6 rounded-lg border border-red-500/30">
                                <h3 className="text-2xl font-bold text-red-400 mb-3">4. Nestručna Ekipa</h3>
                                <p className="text-white/80 text-lg mb-3">Nekvalificirani radnici:</p>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Šalje nekvalificirane radnike bez iskustva</li>
                                    <li>• Ne poznaju pravilnu proceduru ugradnje</li>
                                    <li>• Nemaju odgovarajući alat</li>
                                    <li>• Rezultat je loša instalacija koja ne zadovoljava standarde</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Pravilna Instalacija - Što Očekivati?</h2>
                        <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                            <h3 className="text-xl font-bold text-green-400 mb-4">✓ Koraci Profesionalne Instalacije:</h3>
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Priprema</strong> - Zaštita prostora, priprema alata i materijala</li>
                                <li><strong>Demontaža</strong> - Pažljivo uklanjanje starih prozora/vrata</li>
                                <li><strong>Čišćenje</strong> - Čišćenje otvora od ostataka i prljavštine</li>
                                <li><strong>Mjerenje</strong> - Provjera dimenzija i vodoravnosti</li>
                                <li><strong>Postavljanje podložaka</strong> - Pravilno pozicioniranje</li>
                                <li><strong>Učvršćivanje</strong> - Pričvršćivanje vijcima ili ankerima</li>
                                <li><strong>Izolacija</strong> - Popunjavanje praznina poliuretanskom pjenom</li>
                                <li><strong>Podešavanje</strong> - Provjera funkcionalnosti, podešavanje okova</li>
                                <li><strong>Brtvljenje</strong> - Postavljanje silikona za vodonepropusnost</li>
                                <li><strong>Završni radovi</strong> - Unutarnje i vanjske klupice, čišćenje</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Provjeriti Kvalitetu Instalacije?</h2>
                        <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">🔍 Kontrolna Lista Nakon Ugradnje:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400 text-2xl">☑</span>
                                    <span><strong>Vodoravnost</strong> - Prozori/vrata moraju biti savršeno vodoravni</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400 text-2xl">☑</span>
                                    <span><strong>Otvaranje/Zatvaranje</strong> - Glatko, bez otpora ili škripanja</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400 text-2xl">☑</span>
                                    <span><strong>Brtvljenje</strong> - Silikon pravilno postavljen, bez praznina</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400 text-2xl">☑</span>
                                    <span><strong>Izolacija</strong> - Pjena vidljiva u pukotinama, bez praznina</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400 text-2xl">☑</span>
                                    <span><strong>Oštećenja</strong> - Nema ogrebotina, pukotina ili oštećenja</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400 text-2xl">☑</span>
                                    <span><strong>Čistoća</strong> - Prostor očišćen, smeće uklonjeno</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400 text-2xl">☑</span>
                                    <span><strong>Funkcionalnost</strong> - Sve brave, kvake, okovi rade pravilno</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Testovi Nakon Instalacije</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-green-500">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Test Papira</h3>
                                <p className="text-white/80">
                                    Stavite list papira između okvira i krila, zatvorite prozor/vrata.
                                    Pokušajte izvući papir - ako ide lako, brtvljenje nije dobro.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-green-500">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Test Vode</h3>
                                <p className="text-white/80">
                                    Za vrata i prozore na kiši izloženim stranama - provjerite curenje vode
                                    nakon prve kiše ili simulirajte kišu s crijevom.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-green-500">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Test Propuha</h3>
                                <p className="text-white/80">
                                    Upaljenom svijećom ili upaljačem provjerite ima li propuha oko okvira.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Crvene Zastavice Kod Instalacije</h2>
                        <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-4">🚩 OPREZ AKO:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li>• Instalacija traje sumnjivo kratko (profesionalna ugradnja traje)</li>
                                <li>• Radnici nemaju odgovarajući alat ili opremu</li>
                                <li>• Ne koriste libelu za provjeru vodoravnosti</li>
                                <li>• Žure i preskakuju korake</li>
                                <li>• Ne štite prostor od prljavštine</li>
                                <li>• Odbijaju da prisustvujete ugradnji</li>
                                <li>• Ne daju garanciju na instalaciju</li>
                                <li>• Traže plaćanje prije završetka i provjere</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Garancija na Instalaciju</h2>
                        <div className="bg-white/5 p-6 rounded-lg border border-green-500/30">
                            <p className="text-white/80 text-lg mb-4">
                                Profesionalni izvođači nude garanciju na instalaciju:
                            </p>
                            <ul className="space-y-2 text-white/80 text-lg">
                                <li>• <strong className="text-green-400">Minimum 2 godine</strong> na instalaciju</li>
                                <li>• <strong className="text-green-400">Pisana garancija</strong> s detaljima pokrića</li>
                                <li>• <strong className="text-green-400">Brz odziv</strong> na reklamacije</li>
                                <li>• <strong className="text-green-400">Besplatni popravci</strong> grešaka u instalaciji</li>
                            </ul>
                            <p className="text-white/80 mt-4">
                                <strong className="text-red-400">Upozorenje:</strong> Filjević je nuduo "garancije"
                                koje su postale bezvrijedne kada je zatvorio firmu.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/pvc-prozori" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Prozori</h3>
                                <p className="text-white/70">Prevare s PVC prozorima</p>
                            </Link>
                            <Link href="/pvc-vrata" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PVC Vrata</h3>
                                <p className="text-white/70">Prevare s PVC vratima</p>
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
                            KVALITETNA INSTALACIJA = DUGOTRAJNA ULAGANJA
                        </p>
                        <p className="text-white/70 text-center mb-0">
                            Ne dozvolite da loša ugradnja uništi kvalitetnu stolariju
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
