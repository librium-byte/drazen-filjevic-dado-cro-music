"use client";

import dynamic from 'next/dynamic';

export const DynamicLetterGlitch = dynamic(() => import('./LetterGlitch'), {
    ssr: false
});

export const DynamicShareButton = dynamic(() => import('./ShareButton').then(mod => mod.ShareButton), {
    ssr: false
});

export const DynamicGlitchCounter = dynamic(() => import('./GlitchCounter'), {
    ssr: false,
    loading: () => <div className="h-32 bg-white/5 rounded-lg animate-pulse" />
});
