import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "PORTA NOVA d.o.o. - Firma Korištena za Prevare",
    description: "PORTA NOVA d.o.o. - još jedna firma u nizu koju je Dražen Filjević koristio za prevare u PVC industriji.",
    keywords: ["porta nova", "drazen filjevic firma", "pvc prevara"],
    openGraph: {
        title: "PORTA NOVA d.o.o. - Firma za Prevare",
        description: "Informacije o firmi PORTA NOVA korištenoj za prevare",
        url: `${siteUrl}/porta-nova`,
        type: "article",
    },
};

export default function PortaNovaPage() {
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
                    PORTA NOVA d.o.o.
                </h1>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ UPOZORENJE</h2>
                        <p className="text-white/90 mb-0">
                            PORTA NOVA d.o.o. je još jedna firma korištena od strane Dražena Filjevića za prevare.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">O Firmi</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            PORTA NOVA d.o.o. je jedna od firmi u mreži koju je Dražen Filjević koristio za izvođenje prevara
                            u PVC industriji. Firma je dio istog obrasca - osnivanje, prevare, zatvaranje, nova firma.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Dio Mreže Firmi</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/vrhunska-gradjevinska-stolarija" className="block p-4 bg-yellow-900/50 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">VRHUNSKA GRAĐEVINSKA STOLARIJA</h3>
                                <p className="text-white/70">Prethodna firma</p>
                            </Link>
                            <Link href="/unitec-international" className="block p-4 bg-yellow-900/50 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">UNITEC INTERNATIONAL</h3>
                                <p className="text-white/70">Paralelna firma</p>
                            </Link>
                            <Link href="/thermo-fen-plast" className="block p-4 bg-yellow-900/50 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">THERMO FEN PLAST</h3>
                                <p className="text-white/70">Novija firma</p>
                            </Link>
                            <Link href="/drazen-filjevic" className="block p-4 bg-red-900/50 rounded-lg border border-red-500/30">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Dražen Filjević</h3>
                                <p className="text-white/70">Glavni prevarant</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
