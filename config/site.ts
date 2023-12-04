import { Facebook } from 'lucide-react';
export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        twitter: string;
        instagram: string;
        linkedin: string;
        facebook:string;
    };
}

const siteConfig: SiteConfig = {
    siteName: "EpicCheerleader",
    description: "Your personal cheerleader and the best way to cheer you up",
    currentlyAt: "Zurich",
    socialLinks: {
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
    },
};

export default siteConfig;

