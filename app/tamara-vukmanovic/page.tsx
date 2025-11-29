import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Tamara Vukmanović - Suradnica Dražena Filjevića u Prijevarama",
    description: "Informacije o Tamari Vukmanović, suradnici Dražena Filjevića u prijevarama kroz firmu VGS Fenster j.d.o.o. Adresa: Donjozelinska ulica 124, Donja Zelina.",
    keywords: ["tamara vukmanovic", "tamara vukmanović", "vgs fenster", "drazen filjevic suradnik", "prevara donja zelina"],
    openGraph: {
        title: "Tamara Vukmanović - Suradnica u Prijevarama",
        description: "Informacije o Tamari Vukmanović i njenoj ulozi u prijevarama Dražena Filjevića",
        url: `${siteUrl}/tamara-vukmanovic`,
        type: "article",
    },
};

export default function TamaraVukmanovicPage() {
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
                        Tamara Vukmanović
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            Tamara Vukmanović je suradnica Dražena Filjevića u prijevarama kroz firmu VGS Fenster j.d.o.o.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Osnov ni Podaci</h2>
                        <div className="bg-white/5 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li><strong className="text-green-400">Ime i Prezime:</strong> Tamara Vukmanović</li>
                                <li><strong className="text-green-400">Firma:</strong> VGS Fenster j.d.o.o.</li>
                                <li><strong className="text-green-400">Adresa:</strong> Donjozelinska ulica 124, Donja Zelina</li>
                                <li><strong className="text-green-400">Povezanost:</strong> Suradnica Dražena Filjevića</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">VGS Fenster j.d.o.o.</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            VGS Fenster j.d.o.o. je jedna od firmi korištenih u mreži prijevara Dražena Filjevića.
                            Firma se bavila PVC stolarijom i bila je dio šire sheme prevara.
                        </p>
                        <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-xl font-bold text-yellow-400 mb-3">Karakteristike Firme:</h3>
                            <ul className="space-y-2 text-white/80">
                                <li>• Sjedište: Donjozelinska ulica 124, Donja Zelina</li>
                                <li>• Djelatnost: PVC prozori i vrata</li>
                                <li>• Povezanost s Filjević om</li>
                                <li>• Dio mreže prijevara</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Uloga u Prijevarama</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Tamara Vukmanović je bila povezana s Draženom Filjević em kroz VGS Fenster j.d.o.o.,
                            jednu od brojnih firmi korištenih za izvođenje prijevara u PVC industriji.
                        </p>
                        <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-3">Modus Operandi:</h3>
                            <ul className="space-y-2 text-white/80">
                                <li>• Korištenje firme VGS Fenster za privlačenje kupaca</li>
                                <li>• Uzimanje avansi za PVC prozore i vrata</li>
                                <li>• Neispunjavanje ugovornih obveza</li>
                                <li>• Dio šire mreže Filjević evih firmi</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezanost s Drugim Firmama</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            VGS Fenster j.d.o.o. bila je dio mreže firmi koje su djelovale na istoj adresi ili u istom sustavu:
                        </p>
                        <ul className="space-y-2 text-white/80 text-lg">
                            <li>• <Link href="/unitec-international" className="text-yellow-400 hover:text-yellow-300 underline">UNITEC INTERNATIONAL j.d.o.o.</Link> - ista adresa</li>
                            <li>• <Link href="/vrhunska-gradjevinska-stolarija" className="text-yellow-400 hover:text-yellow-300 underline">VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o.</Link></li>
                            <li>• <Link href="/porta-nova" className="text-yellow-400 hover:text-yellow-300 underline">PORTA NOVA d.o.o.</Link></li>
                            <li>• <Link href="/thermo-fen-plast" className="text-yellow-400 hover:text-yellow-300 underline">THERMO FEN PLAST j.d.o.o.</Link></li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Kako Se Zaštititi?</h2>
                        <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li>✓ Provjerite povezanost firme s poznatim prevarantima</li>
                                <li>✓ Tražite reference od prethodnih kupaca</li>
                                <li>✓ Provjerite sudski registar</li>
                                <li>✓ Nikada ne plaćajte 100% avansa</li>
                                <li>✓ Insistirajte na pisanom ugovoru</li>
                                <li>✓ Budite oprezni s firmama na istoj adresi kao poznati prevaranti</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic" className="block p-4 bg-white/5 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dražen Filjević</h3>
                                <p className="text-white/70">Glavni prevarant</p>
                            </Link>
                            <Link href="/vgs-fenster" className="block p-4 bg-white/5 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">VGS Fenster j.d.o.o.</h3>
                                <p className="text-white/70">Informacije o firmi</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara</h3>
                                <p className="text-white/70">Kako se zaštititi</p>
                            </Link>
                            <Link href="/damir-iharosi" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Damir Iharoši</h3>
                                <p className="text-white/70">Drugi suradnik</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-0">
                            PODIJELITE - UPOZORITE DRUGE
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
