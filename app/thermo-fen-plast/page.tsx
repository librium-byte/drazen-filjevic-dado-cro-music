import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "THERMO FEN PLAST j.d.o.o. - Firma Korištena za Prevare",
    description: "THERMO FEN PLAST j.d.o.o., Brezovec Zelinski 3A - firma povezana s Damirom Iharošijem i Draženom Filjević em, korištena za prevare u PVC industriji.",
    keywords: ["thermo fen plast", "damir iharosi", "drazen filjevic firma", "prevara brezovec"],
    openGraph: {
        title: "THERMO FEN PLAST j.d.o.o. - Firma za Prevare",
        description: "Informacije o firmi THERMO FEN PLAST korištenoj za prevare",
        url: `${siteUrl}/thermo-fen-plast`,
        type: "article",
    },
};

export default function ThermoFenPlastPage() {
    return (
        <div className="w-full min-h-screen">
            <ShareButton />

            <article className="max-w-4xl mx-auto px-4 py-16">
                <div className="mb-8">
                    <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
                        ← Povratak na početnu
                    </Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
                    THERMO FEN PLAST j.d.o.o.
                </h1>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            THERMO FEN PLAST j.d.o.o. je firma povezana s Damirom Iharošijem i Draženom Filjević em.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Podaci o Firmi</h2>
                        <div className="bg-white/5 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li><strong className="text-green-400">Naziv:</strong> THERMO FEN PLAST j.d.o.o.</li>
                                <li><strong className="text-green-400">Adresa:</strong> Brezovec Zelinski 3A, Brezovec Zelinski</li>
                                <li><strong className="text-green-400">Povezana osoba:</strong> Damir Iharoši</li>
                                <li><strong className="text-green-400">Djelatnost:</strong> PVC prozori, vrata i instalacije</li>
                                <li><strong className="text-green-400">Status:</strong> Dio mreže prevara</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Novija Firma u Mreži</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            THERMO FEN PLAST j.d.o.o. je jedna od novijih firmi u mreži prevara. Nastavlja isti obrazac
                            koji je Filjević koristio kroz prethodne firme - privlačenje kupaca, uzimanje avansi,
                            neispunjavanje obveza.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Osobe i Firme</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/damir-iharosi" className="block p-4 bg-red-900/50 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">👤 Damir Iharoši</h3>
                                <p className="text-white/70">Povezana osoba</p>
                            </Link>
                            <Link href="/drazen-filjevic" className="block p-4 bg-red-900/50 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">👤 Dražen Filjević</h3>
                                <p className="text-white/70">Glavni prevarant</p>
                            </Link>
                            <Link href="/vrhunska-gradjevinska-stolarija" className="block p-4 bg-yellow-900/50 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">🏢 VRHUNSKA GRAĐEVINSKA STOLARIJA</h3>
                                <p className="text-white/70">Prethodna firma</p>
                            </Link>
                            <Link href="/porta-nova" className="block p-4 bg-yellow-900/50 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">🏢 PORTA NOVA</h3>
                                <p className="text-white/70">Povezana firma</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
