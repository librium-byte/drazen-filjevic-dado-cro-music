import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Damir Iharoši - Suradnik Dražena Filjevića u Prijevarama",
    description: "Informacije o Damiru Iharošiju, suradniku Dražena Filjevića u prijevarama kroz firmu THERMO FEN PLAST j.d.o.o. Adresa: Brezovec Zelinski 3A, Brezovec Zelinski.",
    keywords: ["damir iharosi", "damir iharoši", "thermo fen plast", "drazen filjevic suradnik", "prevara brezovec"],
    openGraph: {
        title: "Damir Iharoši - Suradnik u Prijevarama",
        description: "Informacije o Damiru Iharošiju i njegovoj ulozi u prijevarama Dražena Filjevića",
        url: `${siteUrl}/damir-iharosi`,
        type: "article",
    },
};

export default function DamirIharosiPage() {
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
                        Damir Iharoši
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-950 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            Damir Iharoši je suradnik Dražena Filjevića u prijevarama kroz firmu THERMO FEN PLAST j.d.o.o.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Osnovni Podaci</h2>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li><strong className="text-green-400">Ime i Prezime:</strong> Damir Iharoši</li>
                                <li><strong className="text-green-400">Firma:</strong> THERMO FEN PLAST j.d.o.o.</li>
                                <li><strong className="text-green-400">Adresa:</strong> Brezovec Zelinski 3A, Brezovec Zelinski</li>
                                <li><strong className="text-green-400">Povezanost:</strong> Suradnik Dražena Filjevića</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">THERMO FEN PLAST j.d.o.o.</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            THERMO FEN PLAST j.d.o.o. je jedna od novijih firmi u mreži prijevara Dražena Filjevića.
                            Firma se predstavlja kao specijalist za PVC stolariju, ali je dio poznate sheme prevara.
                        </p>
                        <div className="bg-yellow-950 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-xl font-bold text-yellow-400 mb-3">Karakteristike Firme:</h3>
                            <ul className="space-y-2 text-white/80">
                                <li>• Sjedište: Brezovec Zelinski 3A, Brezovec Zelinski</li>
                                <li>• Djelatnost: PVC prozori, vrata i instalacije</li>
                                <li>• Povezana s Draženom Filjević em</li>
                                <li>• Nastavak istog modela prevara</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Uloga u Prijevarama</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Damir Iharoši povezan je s Draženom Filjević em kroz THERMO FEN PLAST j.d.o.o.,
                            koja nastavlja isti obrazac prevara koji je Filjević koristio kroz druge firme.
                        </p>
                        <div className="bg-red-950 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-3">Obrazac Prevara:</h3>
                            <ul className="space-y-2 text-white/80">
                                <li>• Korištenje THERMO FEN PLAST za privlačenje novih kupaca</li>
                                <li>• Isti modus operandi kao i druge Filjević eve firme</li>
                                <li>• Uzimanje visokih avansi</li>
                                <li>• Neispunjavanje ugovornih obveza</li>
                                <li>• Dio kontinuirane sheme prevara</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezanost s Mrežom Firmi</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            THERMO FEN PLAST j.d.o.o. dio je šire mreže firmi povezanih s Draženom Filjević em:
                        </p>
                        <ul className="space-y-2 text-white/80 text-lg">
                            <li>• <Link href="/vrhunska-gradjevinska-stolarija" className="text-yellow-400 hover:text-yellow-300 underline">VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o.</Link> - prethodna firma</li>
                            <li>• <Link href="/unitec-international" className="text-yellow-400 hover:text-yellow-300 underline">UNITEC INTERNATIONAL j.d.o.o.</Link> - paralelna firma</li>
                            <li>• <Link href="/porta-nova" className="text-yellow-400 hover:text-yellow-300 underline">PORTA NOVA d.o.o.</Link> - povezana firma</li>
                            <li>• <Link href="/vgs-fenster" className="text-yellow-400 hover:text-yellow-300 underline">VGS Fenster j.d.o.o.</Link> - dio mreže</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Crvene Zastavice</h2>
                        <div className="bg-red-950 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-4">🚩 Znakovi Upozorenja:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li>• Povezanost s poznatim prevarantom (Dražen Filjević)</li>
                                <li>• Isti obrazac poslovanja kao prethodne firme</li>
                                <li>• Zahtjevi za visokim avansima</li>
                                <li>• Sumnjivo niske cijene u odnosu na konkurenciju</li>
                                <li>• Nedostatak transparentnosti u poslovanju</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Se Zaštititi?</h2>
                        <div className="bg-green-950 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li>✓ Provjerite vlasničku strukturu firme</li>
                                <li>✓ Istražite povezanost s poznatim prevarantima</li>
                                <li>✓ Tražite nezavisne reference</li>
                                <li>✓ Provjerite sudski registar za tužbe</li>
                                <li>✓ Nikada ne plaćajte više od 30% avansa</li>
                                <li>✓ Insistirajte na detaljnom pisanom ugovoru</li>
                                <li>✓ Provjerite je li firma ovlašteni distributer</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic" className="block p-4 bg-zinc-900 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dražen Filjević</h3>
                                <p className="text-white/70">Glavni prevarant</p>
                            </Link>
                            <Link href="/thermo-fen-plast" className="block p-4 bg-zinc-900 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">THERMO FEN PLAST</h3>
                                <p className="text-white/70">Informacije o firmi</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara</h3>
                                <p className="text-white/70">Kako se zaštititi</p>
                            </Link>
                            <Link href="/tamara-vukmanovic" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Tamara Vukmanović</h3>
                                <p className="text-white/70">Druga suradnica</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-950 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-0">
                            PODIJELITE - UPOZORITE DRUGE NA OVU MREŽU PREVARA
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
