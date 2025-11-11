import dynamic from 'next/dynamic';

// Lucide Icons
export const CheckCircle = dynamic(() => import('lucide-react').then(mod => mod.CheckCircle));
export const Target = dynamic(() => import('lucide-react').then(mod => mod.Target));
export const Eye = dynamic(() => import('lucide-react').then(mod => mod.Eye));
export const Heart = dynamic(() => import('lucide-react').then(mod => mod.Heart));
export const Factory = dynamic(() => import('lucide-react').then(mod => mod.Factory));

// Heroicons
export const ClipboardDocumentCheckIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.ClipboardDocumentCheckIcon));
export const CogIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.CogIcon));
export const WrenchScrewdriverIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.WrenchScrewdriverIcon));
