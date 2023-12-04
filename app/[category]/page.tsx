import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA"
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-lists";
import siteConfig from "@/config/site";
import directus_old from "@/lib/directus_old";
import { Post } from "@/types/collections";
import { notFound } from "next/navigation";
import { cache } from "react";

// Get category data
const getCategoryData = async (categorySlug: string) => {
    try {
        const category = await directus_old.items("category").readByQuery({
            filter: {
                slug: {
                    _eq: categorySlug,
                },
            },
            fields: [ 
                "*",
                "posts.*",
                "posts.author.id",
                "posts.author.first_name",
                "posts.category.id",
                "posts.category.title",
            ],
        });
        return category?.data?.[0];
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data at category");
    }
};

// Generate Metadata function that is specific for this page
export const generateMetadata = async ({
    params: { category },
}:{
    params: {
        category: string;
    };
}) => {
    // Get data from Directus
    const categoryData = await getCategoryData(category);

    return {
        title: {
            absolute: categoryData?.title,
        },
        description: categoryData?.description,
        openGraph: {
            title: categoryData?.title,
            description: categoryData?.description,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/${category}`,
            siteName: categoryData?.title,
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/${category}}/opengraph-image`,
                width: 1200,
                height: 629,
              },
            ],
            locale: 'en_US',
            type: 'website',
          },
          alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${category}`,
            languages: {
              'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/${category}`,
            },
          }
    };
}

export const generateStaticParams = async () => {
    /** Generate the static params to define the URL slug
    return DUMMY_CATEGORIES.map((category) => {
        return {
            category: category.slug,
        };
    }); */

    try {
        const categories = await directus_old.items("category").readByQuery({
            filter: {
                status: {
                    _eq: "published",
                },
            },
            fields: ["slug"],
        });
        const params = categories?.data?.map((category) => {
            return {
                category: category.slug as string,
            };
        });

    return params || [];
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching categories in categories page")
    }
}


const Page = async ({
    params,
}: {
    params: {
        category: string;
    };
}) => {

    /* THIS IS FOR DUMMY_DATA
    const category = DUMMY_CATEGORIES.find(
        (category) => category.slug === params.category
    );
    const posts = DUMMY_POSTS.filter(
        (post) => post.category.title.toLocaleLowerCase() === params.category
    ); */

    const categorySlug = params.category;
    const category = await getCategoryData(categorySlug);

    if (!category) {
        notFound();
    }

    const typeCorrectedCategory = category as unknown as {
        id: string;
        title: string;
        description: string;
        slug: string;
        posts: Post[];
    };

    return (
        <PaddingContainer>
            <div className="mb-10">
                <h1 className="text-4xl font-semibold">{typeCorrectedCategory?.title}</h1>
                <p className="text-lg text-neutral-600">{typeCorrectedCategory?.description}</p>
            </div>
            <PostList posts={typeCorrectedCategory.posts} />    
        </PaddingContainer>
    );
};  

export default Page; 