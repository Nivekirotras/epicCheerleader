import React from 'react'
import { Post } from "@/types/collections"
import Link from 'next/link';
import Image from "next/image"
import PostContent from './post-content';

interface PostProps {
    post: Post;
    layout?: "vertical" | "horizontal";
    reverse?: boolean;
}

const PostCard = ({post, layout = "horizontal", reverse = false}: PostProps) => {
  return (
    <Link 
        className={` @container ${
            layout === "horizontal"
                ? "grid items-center grid-cols-1 md:grid-cols-2 gap-10"
                : "space-y-10"
        }`}
        href={`/post/${post.slug}`}
    >
    {/* Post Image */}
    <Image className={`rounded-md w-full object-cover object-center h-full max-h-[300px] ${
        reverse ? "md:order-last": ""
        }`}
        alt={post.title}
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`} // The key is defined in the settings/transformation_presets in Directus
        width={600}
        height={300}
    />
    {/* Post Content */}
    <PostContent post={post} isPostPage={false}/>
    </Link>
  )
}

export default PostCard;