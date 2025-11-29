import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "VGS Fenster j.d.o.o. - Firma Korištena za Prevare",
    description: "VGS Fenster j.d.o.o., Donjozelinska ulica 124, Donja Zelina - firma povezana s Tamarom Vukmanović i Draženom Filjević em, korištena za prevare u PVC industriji.",
    keywords: ["vgs fenster", "tamara vukmanovic", "drazen filjevic firma", "prevara donja zelina"],
    openGraph: {
        title: "VGS Fenster j.d.o.o. - Firma za Prevare",
        description: "Informacije o firmi VGS Fenster korištenoj za prevare",
        url: `${siteUrl}/vgs-fenster`,
        type: "article",
    },
};

export default function VGSFensterPage() {
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
                    VGS Fenster j.d.o.o.
                </h1>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-950 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            VGS Fenster j.d.o.o. je firma povezana s Tamarom Vukmanović i Draženom Filjević em, korištena za prevare.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Podaci o Firmi</h2>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li><strong className="text-green-400">Naziv:</strong> VGS Fenster j.d.o.o.</li>
                                <li><strong className="text-green-400">Adresa:</strong> Donjozelinska ulica 124, Donja Zelina</li>
                                <li><strong className="text-green-400">Povezana osoba:</strong> Tamara Vukmanović</li>
                                <li><strong className="text-green-400">Djelatnost:</strong> PVC prozori i vrata</li>
                                <li><strong className="text-green-400">Status:</strong> Dio mreže prevara</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezanost s Mrežom Prevara</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            VGS Fenster j.d.o.o. dio je organizirane mreže firmi koje su korištene za prevare u PVC industriji.
                            Firma dijeli adresu s UNITEC INTERNATIONAL j.d.o.o., što ukazuje na koordinirano djelovanje.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Osobe i Firme</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/tamara-vukmanovic" className="block p-4 bg-red-950 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">👤 Tamara Vukmanović</h3>
                                <p className="text-white/70">Povezana osoba</p>
                            </Link>
                            <Link href="/unitec-international" className="block p-4 bg-yellow-950 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">🏢 UNITEC INTERNATIONAL</h3>
                                <p className="text-white/70">Ista adresa</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
