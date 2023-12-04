import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA"
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-lists";
import directus_old from "@/lib/directus_old";
import { Post } from "@/types/collections";
import { notFound } from "next/navigation";

/** Generate the static params to define the URL slug
export const generateStaticParams = async () => {
    return DUMMY_CATEGORIES.map((category) => {
        return {
            category: category.slug,
        };
    });
}; */

export const generateStaticParams = async () => {
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

    const getCategoryData = async () => {
        try {
            const category = await directus_old.items("category").readByQuery({
                filter: {
                    slug: {
                        _eq: params.category,
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
    }

    const category = await getCategoryData();

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