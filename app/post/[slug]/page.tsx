import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-links";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import directus_old from "@/lib/directus_old";
import { notFound } from "next/navigation";

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

    const getPostData = async () => {
        try {
            const post = await directus_old.items("post").readByQuery({
                filter: {
                    slug: {
                        _eq: params.slug,
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

    const post = await getPostData();

    /** If slug is modified or not found it shows a 404 */
    if (!post) {
        notFound();
    }
    
    return (
        <PaddingContainer>
            {/** Container */}
            <div className="space-y-10">
            <PostHero post={post} />
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
            <CTACard />
            </div>
        </PaddingContainer>
    );
};

export default Page;