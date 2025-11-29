import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Scam Alert - Dražen Filjević (dado cro music) Warning",
    description: "International scam warning about Dražen Filjević (dado cro music). Croatian PVC windows and doors scammer with 130+ victims and €400,000+ stolen. Protect yourself from this fraud.",
    keywords: ["scam", "fraud", "drazen filjevic", "dado cro music", "pvc scam", "croatia scam"],
    openGraph: {
        title: "Scam Alert - Dražen Filjević Warning",
        description: "International warning about Croatian scammer Dražen Filjević (dado cro music)",
        url: `${siteUrl}/scam`,
        type: "article",
    },
};

export default function ScamPage() {
    return (
        <div className="w-full min-h-screen">
            <ShareButton />

            <article className="max-w-4xl mx-auto px-4 py-16">
                <div className="mb-8">
                    <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
                        ← Back to Home
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <PoliceSirens />
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                        SCAM ALERT
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <div className="bg-red-950 border border-red-500/30 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-red-400 mt-0">⚠️ INTERNATIONAL WARNING</h2>
                        <p className="text-white/90 mb-0">
                            This page contains information about <strong>Dražen Filjević</strong> (known online as "dado cro music"),
                            a documented scammer operating in Croatia with <strong>130+ victims</strong> and over <strong>€400,000 stolen</strong>.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Who is Dražen Filjević?</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Dražen Filjević is a Croatian businessman who has gained notoriety for running multiple scams
                            in the PVC windows and doors industry. He operates under various company names and online identities,
                            including the pseudonym <strong>"dado cro music"</strong>.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Scam Statistics</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 text-center">
                                <div className="text-5xl font-bold text-red-400 mb-2">130+</div>
                                <div className="text-white/80 text-lg">Documented Victims</div>
                            </div>
                            <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 text-center">
                                <div className="text-5xl font-bold text-red-400 mb-2">€400,000+</div>
                                <div className="text-white/80 text-lg">Total Amount Stolen</div>
                            </div>
                            <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 text-center">
                                <div className="text-5xl font-bold text-red-400 mb-2">20+</div>
                                <div className="text-white/80 text-lg">Criminal Proceedings</div>
                            </div>
                            <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 text-center">
                                <div className="text-5xl font-bold text-red-400 mb-2">12+</div>
                                <div className="text-white/80 text-lg">Different Companies</div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">How the Scam Works</h2>
                        <div className="space-y-4">
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Step 1: Contact</h3>
                                <p className="text-white/80">
                                    Advertises as "cheap, fast, and reliable" PVC windows/doors installer.
                                    Contacts victims through social media or responds to inquiries.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Step 2: Measurement</h3>
                                <p className="text-white/80">
                                    Visits the property, takes measurements, provides a quote that seems competitive.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Step 3: Advance Payment</h3>
                                <p className="text-white/80">
                                    Demands high advance payment (50-100%) allegedly "to order materials".
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Step 4: Disappearance</h3>
                                <p className="text-white/80">
                                    After receiving payment, stops answering calls and messages. Windows/doors never arrive.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Step 5: New Company</h3>
                                <p className="text-white/80">
                                    Closes old company, opens new one under different name, repeats the scam.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Known Identities & Companies</h2>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Online Identities:</h3>
                            <ul className="space-y-2 text-white/80 text-lg">
                                <li>• dado cro music</li>
                                <li>• music cro dado</li>
                                <li>• dado music cro</li>
                                <li>• Dado</li>
                            </ul>
                            <h3 className="text-xl font-bold text-yellow-400 mb-4 mt-6">Company Names:</h3>
                            <ul className="space-y-2 text-white/80 text-lg">
                                <li>• VRHUNSKA GRAĐEVINSKA STOLARIJA j.d.o.o.</li>
                                <li>• UNITEC INTERNATIONAL j.d.o.o.</li>
                                <li>• PORTA NOVA d.o.o.</li>
                                <li>• THERMO FEN PLAST j.d.o.o.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Red Flags - Warning Signs</h2>
                        <div className="bg-red-950 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-4">🚩 Be Careful If:</h3>
                            <ul className="space-y-3 text-white/80 text-lg">
                                <li>• Demands high advance payment (more than 30%)</li>
                                <li>• No physical showroom or office</li>
                                <li>• Offers "special" prices only if you pay immediately</li>
                                <li>• Company is very new or frequently changes names</li>
                                <li>• No online reviews or all negative</li>
                                <li>• Avoids written contracts or provides vague ones</li>
                                <li>• Won't provide references or previous client contacts</li>
                                <li>• Pressure to decide quickly "because offer is limited"</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">How to Protect Yourself</h2>
                        <div className="bg-green-950 p-6 rounded-lg border border-green-500/30">
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Research the contractor</strong> - Google search, social media, forums</li>
                                <li><strong>Check court records</strong> - Are there lawsuits or judgments?</li>
                                <li><strong>Ask for references</strong> - Contact at least 3 previous clients</li>
                                <li><strong>Visit the office</strong> - Physical location is a sign of legitimacy</li>
                                <li><strong>Verify registration</strong> - Is the company active? How long has it existed?</li>
                                <li><strong>Compare quotes</strong> - Get at least 3 quotes from different contractors</li>
                                <li><strong>Written contract</strong> - Detailed specifications with deadlines and penalties</li>
                                <li><strong>Limited advance</strong> - Maximum 30%, never 100%</li>
                                <li><strong>Verify certificates</strong> - Contact manufacturer for confirmation</li>
                                <li><strong>Trust your instinct</strong> - If something seems suspicious, it probably is</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">If You've Been Scammed</h2>
                        <div className="bg-yellow-950 p-6 rounded-lg border border-yellow-500/30">
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Report to police</strong> - File a criminal complaint immediately</li>
                                <li><strong>Document everything</strong> - Contracts, messages, payment proofs</li>
                                <li><strong>Contact a lawyer</strong> - Prepare civil lawsuit for damages</li>
                                <li><strong>Warn others</strong> - Share your experience online</li>
                                <li><strong>Join victim group</strong> - Collective lawsuit is stronger</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Related Pages</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic" className="block p-4 bg-zinc-900 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dražen Filjević</h3>
                                <p className="text-white/70">Full biography and information</p>
                            </Link>
                            <Link href="/fraud" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Fraud Information</h3>
                                <p className="text-white/70">Legal definition and cases</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara (Croatian)</h3>
                                <p className="text-white/70">Croatian language version</p>
                            </Link>
                            <Link href="/dado-cro-music" className="block p-4 bg-zinc-900 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-colors">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Dado Cro Music</h3>
                                <p className="text-white/70">Online identity information</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-950 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-2">
                            SHARE TO PROTECT OTHERS FROM THIS SCAM
                        </p>
                        <p className="text-white/70 text-center mb-0">
                            Every share can save someone from being scammed
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
