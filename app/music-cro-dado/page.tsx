import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Music Cro Dado - Alternative Online Identity",
    description: "Music cro dado is another online variation used by Dražen Filjević (dado cro music). Learn about this alternative identity and how to protect yourself from scams.",
    keywords: ["music cro dado", "dado cro music", "dado", "drazen filjevic", "online scam"],
    openGraph: {
        title: "Music Cro Dado - Alternative Online Identity",
        description: "Music cro dado - another identity used by scammer Dražen Filjević.",
        url: `${siteUrl}/music-cro-dado`,
        type: "article",
    },
};

export default function MusicCroDadoPage() {
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
                    music cro dado
                </h1>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-950 border border-red-500/30 rounded-lg p-6 mb-8">
                        <p className="text-white/90 mb-0">
                            <strong>"music cro dado"</strong> is an alternative online identity used by Dražen Filjević.
                            This is the same person as "dado cro music" - a documented scammer with 130+ victims.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Keyword Variation Strategy</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Dražen Filjević uses multiple variations of his online name to:
                        </p>
                        <ul className="space-y-2 text-white/80 text-lg">
                            <li>• Appear in different search results</li>
                            <li>• Create confusion about his identity</li>
                            <li>• Avoid negative reviews linked to one specific name</li>
                            <li>• Reach more potential victims</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">All Known Variations</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-zinc-900 p-4 rounded-lg border border-yellow-500/30">
                                <strong className="text-yellow-400">dado cro music</strong> - Most common
                            </div>
                            <div className="bg-zinc-900 p-4 rounded-lg border border-yellow-500/30">
                                <strong className="text-yellow-400">music cro dado</strong> - This variation
                            </div>
                            <div className="bg-zinc-900 p-4 rounded-lg border border-yellow-500/30">
                                <strong className="text-yellow-400">dado music cro</strong> - Another variant
                            </div>
                            <div className="bg-zinc-900 p-4 rounded-lg border border-yellow-500/30">
                                <strong className="text-yellow-400">Dado</strong> - Short form
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Povezane Stranice</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/dado-cro-music" className="block p-4 bg-zinc-900 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dado Cro Music</h3>
                                <p className="text-white/70">Main online identity</p>
                            </Link>
                            <Link href="/dado-music-cro" className="block p-4 bg-zinc-900 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-colors">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Dado Music Cro</h3>
                                <p className="text-white/70">Another variation</p>
                            </Link>
                            <Link href="/drazen-filjevic" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Real Identity</h3>
                                <p className="text-white/70">Dražen Filjević</p>
                            </Link>
                            <Link href="/scam" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Scam Information</h3>
                                <p className="text-white/70">How to protect yourself</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
