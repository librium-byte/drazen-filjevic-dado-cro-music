import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-black/80 backdrop-blur-sm border-t border-green-500/30 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Person Info Section */}
                    <div>
                        <h3 className="text-green-400 font-bold text-lg mb-4 uppercase tracking-wider">
                            Informacije o osobi
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/drazen-filjevic"
                                    className="text-white/80 hover:text-green-400 transition-colors duration-200"
                                >
                                    Dražen Filjević
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/drazen-filjevic-croatian"
                                    className="text-white/80 hover:text-green-400 transition-colors duration-200"
                                >
                                    Dražen Filjević (HR)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dado-cro-music"
                                    className="text-white/80 hover:text-green-400 transition-colors duration-200"
                                >
                                    Dado Cro Music
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/music-cro-dado"
                                    className="text-white/80 hover:text-green-400 transition-colors duration-200"
                                >
                                    Music Cro Dado
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dado-music-cro"
                                    className="text-white/80 hover:text-green-400 transition-colors duration-200"
                                >
                                    Dado Music Cro
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Fraud Keywords Section */}
                    <div>
                        <h3 className="text-red-400 font-bold text-lg mb-4 uppercase tracking-wider">
                            Prevare i prijevare
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/drazen-filjevic-prevara"
                                    className="text-white/80 hover:text-red-400 transition-colors duration-200"
                                >
                                    Dražen Filjević Prevara
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/prevara"
                                    className="text-white/80 hover:text-red-400 transition-colors duration-200"
                                >
                                    Prevara
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/scam"
                                    className="text-white/80 hover:text-red-400 transition-colors duration-200"
                                >
                                    Scam
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fraud"
                                    className="text-white/80 hover:text-red-400 transition-colors duration-200"
                                >
                                    Fraud
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* PVC Business Section */}
                    <div>
                        <h3 className="text-yellow-400 font-bold text-lg mb-4 uppercase tracking-wider">
                            PVC Poslovanje
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/pvc-prozori"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    PVC Prozori
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pvc-vrata"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    PVC Vrata
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pvc-instalacije"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    PVC Instalacije
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Companies and Accomplices Section */}
                    <div>
                        <h3 className="text-orange-400 font-bold text-lg mb-4 uppercase tracking-wider">
                            Firme i Suradnici
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/tamara-vukmanovic"
                                    className="text-white/80 hover:text-orange-400 transition-colors duration-200"
                                >
                                    Tamara Vukmanović
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/damir-iharosi"
                                    className="text-white/80 hover:text-orange-400 transition-colors duration-200"
                                >
                                    Damir Iharoši
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/vrhunska-gradjevinska-stolarija"
                                    className="text-white/80 hover:text-orange-400 transition-colors duration-200"
                                >
                                    VGS (Stečaj)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/unitec-international"
                                    className="text-white/80 hover:text-orange-400 transition-colors duration-200"
                                >
                                    UNITEC INTERNATIONAL
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/vgs-fenster"
                                    className="text-white/80 hover:text-orange-400 transition-colors duration-200"
                                >
                                    VGS Fenster
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/porta-nova"
                                    className="text-white/80 hover:text-orange-400 transition-colors duration-200"
                                >
                                    PORTA NOVA
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/thermo-fen-plast"
                                    className="text-white/80 hover:text-orange-400 transition-colors duration-200"
                                >
                                    THERMO FEN PLAST
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8">
                    <div className="text-center space-y-4">
                        <p className="text-white/60 text-sm">
                            <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
                                dadocromusic.crnalista.online
                            </Link>
                        </p>
                        <p className="text-white/80 font-bold text-lg">
                            PODIJELITE DA DADO NE MOŽE VIŠE VARATI
                        </p>
                        <p className="text-white/40 text-xs">
                            Sve informacije na ovoj stranici su javno dostupne i temeljene na novinskim člancima i sudskim dokumentima.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
