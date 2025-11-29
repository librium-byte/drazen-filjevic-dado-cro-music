import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Dado Music Cro - Online Pseudonym Variation",
    description: "Dado music cro is yet another online name variation used by Dražen Filjević. Complete information about this scammer's multiple identities.",
    keywords: ["dado music cro", "dado cro music", "music cro dado", "drazen filjevic"],
    openGraph: {
        title: "Dado Music Cro - Online Pseudonym Variation",
        description: "Dado music cro - identity variation of scammer Dražen Filjević.",
        url: `${siteUrl}/dado-music-cro`,
        type: "article",
    },
};

export default function DadoMusicCroPage() {
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
                    dado music cro
                </h1>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                        <p className="text-white/90 mb-0">
                            <strong>"dado music cro"</strong> je još jedna varijacija online imena koje koristi Dražen Filjević.
                            Ista osoba, isti prevarant, različito ime.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Zašto Toliko Varijacija?</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-4">
                            Korištenje različitih varijacija istog imena omogućava Filjeviću da:
                        </p>
                        <div className="space-y-3">
                            <div className="bg-white/5 p-4 rounded-lg border border-red-500/30">
                                <strong className="text-red-400">Izbjegne negativne recenzije</strong> - Svaka varijacija ima "čistu" povijest
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-red-500/30">
                                <strong className="text-red-400">Dosegne više ljudi</strong> - Različite varijacije u pretraživanju
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-red-500/30">
                                <strong className="text-red-400">Stvori konfuziju</strong> - Teže je povezati sve prijevare s jednom osobom
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Sve Poznate Varijacije</h2>
                        <div className="bg-white/5 p-6 rounded-lg border border-yellow-500/30">
                            <ul className="space-y-2 text-white/80 text-lg">
                                <li>✓ dado cro music</li>
                                <li>✓ music cro dado</li>
                                <li>✓ dado music cro (ova stranica)</li>
                                <li>✓ Dado</li>
                                <li>✓ Dražen Filjević (pravo ime)</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/dado-cro-music" className="block p-4 bg-white/5 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dado Cro Music</h3>
                                <p className="text-white/70">Glavna online varijacija</p>
                            </Link>
                            <Link href="/music-cro-dado" className="block p-4 bg-white/5 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-colors">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Music Cro Dado</h3>
                                <p className="text-white/70">Druga varijacija</p>
                            </Link>
                            <Link href="/drazen-filjevic" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Pravi Identitet</h3>
                                <p className="text-white/70">Dražen Filjević</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-white/5 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Informacije o Prijevari</h3>
                                <p className="text-white/70">Kako se zaštititi</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
