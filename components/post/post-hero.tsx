import React from 'react'
import {Post} from "@/types/collections"
import PostContent from './post-content';
import Image from "next/image";
Image 

interface PostHeroProps {
    post: Post;
}

const PostHero = ({post}: PostHeroProps) => {
  return (
    <div>
      <PostContent isPostPage post={post} />
      <Image 
        priority
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`} // The key is defined in the settings/transformation_presets in Directus
        width={1280}
        height={500}
        alt={post.title}
        />
    </div>
  )
}

export default PostHero;
