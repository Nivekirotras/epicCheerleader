import React from 'react'
import {Post} from "@/types/collections"
import {ArrowRight} from "lucide-react";
import {getReadingTime} from "@/lib/helpers";
import {getRelativeDate} from "@/lib/helpers";

interface PostContentProps {
    post: Post;
    isPostPage: boolean;
};


const PostContent = ({post, isPostPage = false}: PostContentProps) => {
  return (
    <div className='space-y-2 lg:pb-10'>
      {/* Tags */}
      <div className={`flex gap-2 flex-wrap items-center text-neutral-400 ${
        isPostPage ? "text-sm" : "text-xs @md:text-sm"
        }`}>
        <div 
            /* Define colors based on what category it is */
            className={`font-medium ${
              post.category.title === "Knowledge"
              ? "text-emerald-600"
              : post.category.title === "Experiences"
              ? "text-indigo-600"
              : "text-red-600"           
                  }`}
                  >
                    {post.category.title}
            </div>
            <div className='w-1 h-1 rounded-full bg-neutral-200'></div>
            <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
            <div className='w-1 h-1 rounded-full bg-neutral-200'></div>
            <div>{getReadingTime(post.body)}</div>        
            <div className='w-1 h-1 rounded-full bg-neutral-200'></div>
            <div>{getRelativeDate(post.date_created)}</div>   
        </div>
        {/* Title */}
        <h2 className={`${
            isPostPage 
                ? "text-2xl md:text-3xl lg:text-4xl font-bold"
                : "@lg:text-3xl text-xl @md:text-2xl font-medium"
            }`}
        >
            {post.title}</h2> 
        {/* Description */}
        <p className='text-base @lg:text-lg leading-snug text-neutral-600'>{post.description}</p>
        {/* Read More - make it disappear if it is a Post Page*/}
        {!isPostPage && (
        <div className='flex items-center gap-2 pt-3'>
            Read More <ArrowRight size="14" />
        </div>
        )}
    </div>
  )
}

export default PostContent;
