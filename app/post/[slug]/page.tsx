import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-links";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHeroForPost from "@/components/post/post-hero-for-post";
import PostListCategory from '@/components/post/post-list-category';
import siteConfig from "@/config/site";
import SectionTitle from '@/components/sections/section-titles';
import directus_old from "@/lib/directus_old";
import { notFound } from "next/navigation";
import { cache } from "react";

const getPostData = async (postSlug: string) => {
    try {
        const post = await directus_old.items("post").readByQuery({
            filter: {
                slug: {
                    _eq: postSlug,
                }
            },
            fields: [
                "*",
                "category.id",
                "category.title",
                "author.id",
                "author.first_name",
                "author.last_name",
            ],
        });
        return post?.data?.[0];
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching post in post page");
    }
};

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

export const generateStaticParams = async () => {
    /* For DUMMY DATA
    return DUMMY_POSTS.map((post) => {
        return {
            slug: post.slug,
        };
    }); */
    try {
        const posts = await directus_old.items("post").readByQuery({
            filter: {
                status: {
                    _eq: "published",
                },
            },
            fields: ["slug",]
        });

        const params = posts?.data?.map((post) => {
            return {
                post: post.slug as string,
            };
        });

        return params || [];
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching posts for post page")
    }
};


const Page = async ({
    params,
}: {
    params: {
        slug: string;
    };
}) => {
    /* const post = DUMMY_POSTS.find((post) => post.slug === params.slug); */

    const postSlug = params.slug;
    const post = await getPostData(postSlug);
    //console.log(post);

    /* Structured Data for Google */
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${postSlug}/opengraph-image`,
    //image: `${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`,
    author: post.author.first_name + " " + post.author.last_name,
    genre: post.category.title,
    // keywords: "Psychology mental health self-confidence"
    publisher: siteConfig.siteName,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${postSlug}`,
    datePublished: new Date(post.date_created).toISOString(),
    dateCreated: new Date(post.date_created).toISOString(),
    dateModified: new Date(post.date_updated).toISOString(),
    description: post.description,
    articleBody: post.body,
    };

    /** If slug is modified or not found it shows a 404 */
    if (!post) {
        notFound();
    }

    // Fetch all posts
    const allPostsResponse = await directus_old.items("post").readByQuery({
        filter: {
            status: {
                _eq: "published",
            },
        },
        fields: [
            "*",
            "category.*", // Adjust this line to properly expand the category object
        ],
    });

    // Check if the data is an array and expand category object
    const allPosts = Array.isArray(allPostsResponse?.data) 
        ? allPostsResponse?.data.map(post => ({
            ...post,
            category: post.category && typeof post.category === 'object' 
                ? { ...post.category }
                : undefined,
          }))
        : [];

    console.log(post.category.title)
    return (
        <PaddingContainer>
            {/** Add JSON-LD to the page */}
            <script 
                type="application/ld+jason"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}
            />
            {/** Container */}
            <div className="space-y-10">
            <PostHeroForPost post={post} />
            {/** Post Body and Social Share */}
            <div className="flex flex-col md:flex-row gap-10">
                <div className="relative">
                    <div className="sticky flex items-center md:flex-col gap-5 top-24">
                        <div className="font-medium md:hidden">Share this content</div>
                        <SocialLink
                            isSharedURL
                            platform="facebook"
                            link={`https://wwww.facebook.com/sharer/sharer.php?u=${
                                `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`
                            }`}
                        />
                        <SocialLink
                            isSharedURL
                            platform="twitter"
                            link={`https://twitter.com/intent/tweet?url=${
                                `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`
                            }`}
                        />
                        <SocialLink
                            isSharedURL
                            platform="instagram"
                            link={`https://wwww.facebook.com/sharer/sharer.php?u=${
                                `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`
                            }`}
                        />
                        <SocialLink
                            isSharedURL
                            platform="linkedin"
                            link={`https://wwww.linkedin.com/shareArticle?mini=true&url=${
                                `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`
                            }`}
                        />
                    </div>
                </div>
                <div >
                    <PostBody body={post.body}/>
                </div>
            </div>
            {/** CTA CArd */}
            {/* @ts-expected-error Async Component*/}
            <SectionTitle title={"You might also be interested in:"} url={"https://www.epiccheerleader.com/experiences"}/>
            <PostListCategory posts={allPosts} categoryFilter={post?.category?.title} />
            <CTACard />
            </div>
        </PaddingContainer>
    );
};

export default Page;