import React from 'react'
import { Post } from "@/types/collections"
import PostCard from './post-card';

interface PostListProps{
    posts: Post[];
    layout?: "vertical" | "horizontal";
}

const PostList = ({posts, layout = "vertical"}: PostListProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 xl:grid-flow-col xl:auto-cols-fr'>
      {posts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} />
        ))}
    </div>
  )
}

export default PostList;
