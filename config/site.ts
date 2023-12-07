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
        pinterest: string;
    };
}

const siteConfig: SiteConfig = {
    siteName: "Epic Cheerleader",
    description: "Superpower your personal growth journey and become your ultimate inner cheerleader.",
    currentlyAt: "Zurich",
    socialLinks: {
        twitter: "https://twitter.com/epiccheerlead",
        instagram: "https://www.instagram.com/epiccheerleader_/",
        linkedin: "https://linkedin.com",
        facebook: "https://www.facebook.com/epiccheerlead/",
        pinterest: "https://www.pinterest.ch/epic_cheerleader/",
    },
};

export default siteConfig;

