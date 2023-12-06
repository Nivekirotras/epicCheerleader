import { Post } from "@/types/collections";
import PostCard from "./post-card";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  // Set grid classes based on the number of posts
  let gridClasses = 'grid grid-cols-1 gap-10 auto-rows-min my-10';

  if (posts.length >= 4) {
    gridClasses += ' md:grid-cols-2 lg:grid-cols-3'; // 3 columns on large screens, 2 on medium
  } else if (posts.length === 2) {
    gridClasses += ' md:grid-cols-2'; // if there are only 2 posts then 2 columns on medium and larger screens
  } else {
    gridClasses += ' md:grid-cols-2 lg:grid-cols-3'; // If there are 3 posts then 3 columns on medium and larger screens
  }

  return (
    <div className={gridClasses}>
      {posts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
