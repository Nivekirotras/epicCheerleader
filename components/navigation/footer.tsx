import Image from "next/image";
import SocialLink from "../elements/social-links";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";


const Footer = () => {
    return (
        <div className="py-6 mt-10 border-t">
            <PaddingContainer>
                <div>
                    <Image src="/epicCheerleaderLogo.png" alt="Epic Cheerleader Logo" width={180} height={50} />
                    <p className="max-w-md mt-2 neutral-500 text-lg">{siteConfig.description}</p>
                </div>
                {/* Social and Currently at Section */}
                <div className="flex flex-wrap justify-between gap-4 mt-6">
                    <div>
                        <div className="text-lg neutral-500 font-medium">#becomeYourCheerleader</div>
                        <div className="flex items-center gap-3 t mt-2 ext-neutral-600">
                            <SocialLink 
                            platform="twitter"
                            link={siteConfig.socialLinks.twitter}
                            />
                            <SocialLink 
                            platform="instagram"
                            link={siteConfig.socialLinks.instagram}
                            />
                            <SocialLink
                            platform="facebook"
                            link={siteConfig.socialLinks.facebook}
                            />
                            <SocialLink
                            platform="pinterest"
                            link={siteConfig.socialLinks.pinterest}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-neutral-400">Currently in</div>
                        <div className="flex items-center gap-2 px-3 bg-white rounded-md shadow-md">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            {siteConfig.currentlyAt}
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="flex flex-wrap  items-center justify-between gap-4 border-t py-3 mt-16">
                    <div className="text-sm text-neutral-400">
                        All rights reserved | Copyright {new Date().getFullYear()}
                    </div>
                    <div className="text-sm text-neutral-400">
                        <a href="/privacy" className="hover:underline">Privacy policy</a>
                    </div>
                    <div className="text-sm">Built in the 🏔️ with lots of ☕</div>
                </div>
            </PaddingContainer>
        </div>
    );
};

export default Footer;