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
        className={`${
            layout === "horizontal"
                ? "grid items-center grid-cols-1 md:grid-cols-2 gap-10"
                : "" //changed this from mb-10
        }`}
        href={`/post/${post.slug}`}
      >
      {/* Post Image - To keep the aspect ratio fixes at 60% */}
      <div className="relative w-full" style={{ paddingBottom: '60%' }}>
        <Image className={`rounded-md w-full h-full object-cover absolute top-0 left-0 ${
            reverse ? "md:order-last": ""
            }`}
            alt={post.title}
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`} // The key is defined in the settings/transformation_presets in Directus
            width={600}
            height={300}
        />
      </div>
      {/* Post Content */}
        <PostContent post={post} isPostPage={false}/>
    </Link>
  )
}

export default PostCard;
