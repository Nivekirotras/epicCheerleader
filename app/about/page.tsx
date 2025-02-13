import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import AboutSection from "@/components/sections/about-section";
import BIOElement from "@/components/elements/bio-element";
import { cache } from "react";
import GoogleAdSquareReactive from '@/components/elements/google-ad-square-reactive';
import GoogleAdInArticle from "@/components/elements/google-ad-in-article";


/*
// Generate Metadata function
export const generateMetadata = async ({
    params: {slug},
}: {
    params: {
        slug: string;
    };
}) => {
    // Get post data
    const post = await getPostData(slug);

    return {
        title: post?.title,
        description: post?.description,
        openGraph: {
            title: post?.title,
            description: post?.description,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`,
            siteName: post?.title,
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}/opengraph-image.png`,
                width: 1200,
                height: 630,
              },
            ],
            locale: 'en_US',
            type: 'website',
          },
          alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`,
            languages: {
              'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`,
            },
          }
    };
};
*/

// Generate Metadata function for the About page
export const generateMetadata = async () => {
    return {
        title: 'About Us',
        description: 'Learn more about our team and mission',
        openGraph: {
            title: 'About Us',
            description: 'Learn more about our team and mission',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
            siteName: 'Epic Cheerleader - About Us',
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/about/opengraph-image.png`,
                width: 1200,
                height: 630,
              },
            ],
            locale: 'en_US',
            type: 'website',
          },
          alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
            languages: {
              'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
            },
          }
    };
};


const Page = async ({
    params,
}: {
    params: {
        slug: string;
    };
}) => {
       
    return (
        <PaddingContainer>
            {/** Container */}
            <div className="space-y-10">
                <AboutSection/>
                <BIOElement />
                <CTACard />
            </div>
        </PaddingContainer>
    );
};

export default Page;