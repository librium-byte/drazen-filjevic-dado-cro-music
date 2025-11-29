import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o. - Firma u Stečaju",
    description: "VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o., Zagrebačka cesta 68, Goričica - firma Dražena Filjevića u stečaju nakon brojnih prevara u PVC industriji.",
    keywords: ["vrhunska gradjevinska stolarija", "drazen filjevic firma", "stecaj", "prevara goricica"],
    openGraph: {
        title: "VRHUNSKA GRAĐEVINSKA STOLARIJA - Firma u Stečaju",
        description: "Firma Dražena Filjevića u stečaju nakon prevara",
        url: `${siteUrl}/vrhunska-gradjevinska-stolarija`,
        type: "article",
    },
};

export default function VrhunskaGradjevinskaStolarijaPage() {
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
                    VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o.
                </h1>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-950 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ FIRMA U STEČAJU</h2>
                        <p className="text-white/90 mb-0">
                            VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o. je u stečaju nakon brojnih prevara Dražena Filjevića.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Podaci o Firmi</h2>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li><strong className="text-green-400">Naziv:</strong> VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o.</li>
                                <li><strong className="text-green-400">Adresa:</strong> Zagrebačka cesta 68, Goričica</li>
                                <li><strong className="text-green-400">Status:</strong> <span className="text-red-400 font-bold">U STEČAJU</span></li>
                                <li><strong className="text-green-400">Razlog stečaja:</strong> Brojne prevare i dugovanja</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povijest Prevara</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o. bila je jedna od prvih firmi koje je Dražen Filjević koristio
                            za sistematske prevare u PVC industriji. Nakon što je firma akumulirala brojne tužbe i dugovanja,
                            otišla je u stečaj, dok je Filjević nastavio s prijevarama kroz druge firme.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Obrazac Ponašanja</h2>
                        <div className="bg-red-950 p-6 rounded-lg border border-red-500/30">
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li>Osnivanje firme s obećavajućim nazivom</li>
                                <li>Privlačenje kupaca niskim cijenama</li>
                                <li>Uzimanje visokih avansi</li>
                                <li>Neispunjavanje obveza</li>
                                <li>Akumuliranje tužbi i dugova</li>
                                <li>Stečaj firme</li>
                                <li>Otvaranje nove firme pod drugim nazivom</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Firme Koje su Uslijedile</h2>
                        <p className="text-white/80 mb-4">Nakon stečaja VGS, Filjević je nastavio kroz:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/unitec-international" className="block p-4 bg-yellow-950 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">UNITEC INTERNATIONAL</h3>
                            </Link>
                            <Link href="/porta-nova" className="block p-4 bg-yellow-950 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">PORTA NOVA</h3>
                            </Link>
                            <Link href="/thermo-fen-plast" className="block p-4 bg-yellow-950 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">THERMO FEN PLAST</h3>
                            </Link>
                            <Link href="/vgs-fenster" className="block p-4 bg-yellow-950 rounded-lg border border-yellow-500/30">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">VGS Fenster</h3>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
