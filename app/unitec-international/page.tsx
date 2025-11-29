import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "UNITEC INTERNATIONAL j.d.o.o. - Firma Korištena za Prevare",
    description: "UNITEC INTERNATIONAL j.d.o.o., Donjozelinska ulica 124, Sveti Ivan Zelina - firma korištena od strane Dražena Filjevića za prevare u PVC industriji.",
    keywords: ["unitec international", "drazen filjevic firma", "prevara sveti ivan zelina", "pvc prevara"],
    openGraph: {
        title: "UNITEC INTERNATIONAL j.d.o.o. - Firma za Prevare",
        description: "Informacije o firmi UNITEC INTERNATIONAL korištenoj za prevare",
        url: `${siteUrl}/unitec-international`,
        type: "article",
    },
};

export default function UnitecInternationalPage() {
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
                    UNITEC INTERNATIONAL j.d.o.o.
                </h1>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-950 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            UNITEC INTERNATIONAL j.d.o.o. je firma korištena od strane Dražena Filjevića za prevare u PVC industriji.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Podaci o Firmi</h2>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li><strong className="text-green-400">Naziv:</strong> UNITEC INTERNATIONAL j.d.o.o.</li>
                                <li><strong className="text-green-400">Adresa:</strong> Donjozelinska ulica 124</li>
                                <li><strong className="text-green-400">Općina:</strong> Sveti Ivan Zelina</li>
                                <li><strong className="text-green-400">Djelatnost:</strong> PVC prozori i vrata</li>
                                <li><strong className="text-green-400">Status:</strong> Korištena za prevare</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezanost s Prijevarama</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            UNITEC INTERNATIONAL j.d.o.o. jedna je od brojnih firmi koje je Dražen Filjević koristio za izvođenje prevara.
                            Firma je djelovala na istoj adresi kao i VGS Fenster j.d.o.o., što ukazuje na organiziranu mrežu povezanih firmi.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Firme na Istoj Adresi</h2>
                        <div className="bg-yellow-950 p-6 rounded-lg border border-yellow-500/30">
                            <p className="text-white/80 mb-4">Donjozelinska ulica 124, Donja Zelina:</p>
                            <ul className="space-y-2 text-white/80">
                                <li>• <Link href="/vgs-fenster" className="text-yellow-400 hover:underline">VGS Fenster j.d.o.o.</Link></li>
                                <li>• UNITEC INTERNATIONAL j.d.o.o. (ova firma)</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic" className="block p-4 bg-zinc-900 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dražen Filjević</h3>
                                <p className="text-white/70">Vlasnik/povezana osoba</p>
                            </Link>
                            <Link href="/vgs-fenster" className="block p-4 bg-zinc-900 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-colors">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">VGS Fenster</h3>
                                <p className="text-white/70">Ista adresa</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
