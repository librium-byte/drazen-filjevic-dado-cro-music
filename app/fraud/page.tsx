import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "../../components/ShareButton";
import PoliceSirens from "../../components/PoliceSirens";

const siteUrl = "https://dadocromusic.crnalista.online";

export const metadata: Metadata = {
    title: "Fraud - Legal Definition and Dražen Filjević Case",
    description: "Legal information about fraud in the construction industry. Detailed analysis of the Dražen Filjević (dado cro music) fraud case with 130+ victims and €400,000+ stolen.",
    keywords: ["fraud", "construction fraud", "legal fraud", "drazen filjevic fraud", "pvc fraud"],
    openGraph: {
        title: "Fraud - Legal Definition and Case Study",
        description: "Legal analysis of construction fraud with focus on Dražen Filjević case",
        url: `${siteUrl}/fraud`,
        type: "article",
    },
};

export default function FraudPage() {
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
                        Fraud
                    </h1>
                    <PoliceSirens />
                </div>

                <div className="prose prose-invert prose-green max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Legal Definition of Fraud</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            <strong>Fraud</strong> is a criminal offense involving intentional deception to secure unfair or unlawful gain,
                            or to deprive a victim of a legal right. In the context of construction and home improvement,
                            fraud typically involves:
                        </p>
                        <ul className="space-y-2 text-white/80 text-lg mt-4">
                            <li>• Taking advance payments without intention to perform services</li>
                            <li>• Misrepresenting the quality of materials or services</li>
                            <li>• Using false identities or company names</li>
                            <li>• Providing fake certifications or warranties</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Elements of Fraud</h2>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
                            <p className="text-white/80 text-lg mb-4">For an act to constitute fraud, it must typically include:</p>
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong className="text-green-400">False Representation</strong> - A false statement of fact</li>
                                <li><strong className="text-green-400">Knowledge of Falsity</strong> - The perpetrator knows the statement is false</li>
                                <li><strong className="text-green-400">Intent to Deceive</strong> - Made with intention to deceive the victim</li>
                                <li><strong className="text-green-400">Victim's Reliance</strong> - The victim relies on the false statement</li>
                                <li><strong className="text-green-400">Resulting Damage</strong> - The victim suffers financial loss</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Case Study: Dražen Filjević</h2>
                        <div className="bg-red-950 p-6 rounded-lg border border-red-500/30 mb-6">
                            <p className="text-white/90 mb-0">
                                The case of Dražen Filjević (also known as "dado cro music") represents a textbook example
                                of systematic fraud in the construction industry.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Fraud Elements Present:</h3>
                        <div className="space-y-4">
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h4 className="text-xl font-bold text-red-400 mb-2">1. False Representation</h4>
                                <p className="text-white/80">
                                    Filjević represented himself as a legitimate PVC windows/doors contractor with ability
                                    to deliver quality products and services.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h4 className="text-xl font-bold text-red-400 mb-2">2. Knowledge of Falsity</h4>
                                <p className="text-white/80">
                                    Evidence shows he had no intention to fulfill orders, as demonstrated by repeated pattern
                                    across 130+ victims.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h4 className="text-xl font-bold text-red-400 mb-2">3. Intent to Deceive</h4>
                                <p className="text-white/80">
                                    Systematic creation of multiple companies, use of false identities, and disappearance
                                    after receiving payments demonstrates clear intent.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h4 className="text-xl font-bold text-red-400 mb-2">4. Victim's Reliance</h4>
                                <p className="text-white/80">
                                    Victims relied on his representations and paid advance payments based on his promises.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
                                <h4 className="text-xl font-bold text-red-400 mb-2">5. Resulting Damage</h4>
                                <p className="text-white/80">
                                    Total documented losses exceed €400,000 across 130+ victims.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Legal Consequences</h2>
                        <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/30">
                            <p className="text-white/80 text-lg mb-4">
                                In the Filjević case, legal consequences include:
                            </p>
                            <ul className="space-y-2 text-white/80 text-lg">
                                <li>• 20+ criminal proceedings for fraud</li>
                                <li>• Temporary detention due to risk of repeat offenses</li>
                                <li>• Multiple civil lawsuits for damages</li>
                                <li>• Account freezes and collection attempts</li>
                                <li>• Public record of criminal proceedings</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Prevention Measures</h2>
                        <div className="bg-green-950 p-6 rounded-lg border border-green-500/30">
                            <h3 className="text-xl font-bold text-green-400 mb-4">How to Avoid Becoming a Victim:</h3>
                            <ol className="space-y-3 text-white/80 text-lg list-decimal list-inside">
                                <li><strong>Due Diligence</strong> - Research contractor thoroughly before engaging</li>
                                <li><strong>Court Records Check</strong> - Verify no history of fraud or lawsuits</li>
                                <li><strong>Limited Advances</strong> - Never pay more than 30% upfront</li>
                                <li><strong>Written Contracts</strong> - Detailed specifications with penalties for non-performance</li>
                                <li><strong>Verify Credentials</strong> - Check business registration and certifications</li>
                                <li><strong>References</strong> - Contact multiple previous clients</li>
                                <li><strong>Physical Location</strong> - Verify existence of actual business premises</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Reporting Fraud</h2>
                        <div className="space-y-4">
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Criminal Complaint</h3>
                                <p className="text-white/80">
                                    Report to local police immediately. Provide all documentation: contracts, communications,
                                    payment records, and any other evidence.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Civil Action</h3>
                                <p className="text-white/80">
                                    Consult with an attorney about filing a civil lawsuit for recovery of damages.
                                    Consider joining with other victims for a class action.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">Public Warning</h3>
                                <p className="text-white/80">
                                    Share your experience online to warn others. Post reviews, report to consumer protection
                                    agencies, and notify media outlets.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Related Pages</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/drazen-filjevic" className="block p-4 bg-zinc-900 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Dražen Filjević</h3>
                                <p className="text-white/70">Full case information</p>
                            </Link>
                            <Link href="/scam" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Scam Alert</h3>
                                <p className="text-white/70">Warning and protection</p>
                            </Link>
                            <Link href="/prevara" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Prevara (Croatian)</h3>
                                <p className="text-white/70">Croatian language version</p>
                            </Link>
                            <Link href="/drazen-filjevic-prevara" className="block p-4 bg-zinc-900 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                                <h3 className="text-xl font-bold text-red-400 mb-2">Documented Cases</h3>
                                <p className="text-white/70">Detailed fraud cases</p>
                            </Link>
                        </div>
                    </section>

                    <div className="bg-yellow-950 border border-yellow-500/30 rounded-lg p-6 mt-12">
                        <p className="text-white/90 text-center text-xl font-bold mb-0">
                            KNOWLEDGE IS PROTECTION - STAY INFORMED
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
