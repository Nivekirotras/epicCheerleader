import { Post } from "@/types/collections";
import PostCard from "./post-card";

interface PostListProps {
  posts: Post[];
  categoryFilter: string;  // New parameter for category filtering
  layout?: "vertical" | "horizontal";
}

const PostListCategory = ({ posts, categoryFilter, layout = "vertical" }: PostListProps) => {
  // Filter posts by the given category and limit to first 3
  const filteredPosts = posts
    .filter(post => post.category.title === categoryFilter)
    .slice(0, 3);  // Limit to the first three posts
    
  let gridClasses = 'grid grid-cols-1 gap-10 auto-rows-max';
  // Adjust grid classes based on the number of filtered posts
  if (filteredPosts.length >= 4) {
    gridClasses += ' md:grid-cols-2 lg:grid-cols-3';
  } else if (filteredPosts.length === 2) {
    gridClasses += ' md:grid-cols-2';
  } else {
    gridClasses += ' md:grid-cols-2 lg:grid-cols-3';
  }

  return (
    <div className={gridClasses}>
      {filteredPosts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostListCategory;
