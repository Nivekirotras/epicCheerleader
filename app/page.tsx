import CTACard from '@/components/elements/cta-card';
import TakeTest from '@/components/elements/take-test';
import PaddingContainer from '@/components/layout/padding-container';
import PostCard from '@/components/post/post-card';
import PostListCategory from '@/components/post/post-list-category';
import PostList from '@/components/post/post-lists';
import HeroSection from '@/components/sections/hero-section';
import SectionTitle from '@/components/sections/section-titles';
import directus_old from '@/lib/directus_old';
//import directus from '@/lib/directus';
//import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';
import { postcss } from 'tailwindcss';


export default async function Home() {

  const getAllPosts = async () => {
    try {
       const posts = await directus_old.items("post").readByQuery({
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
          "category.translations.*",
          "translations.*",
        ],
      });
      return posts.data;

    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts for home blog page");
    }
  };

  /** Get all posts */
  const posts = await getAllPosts();

  if (!posts) {
    notFound();
  }

  // console.log(posts); 

  return (
    <PaddingContainer>
      <main className='space-y-10'>
        
        <HeroSection /> 
        <SectionTitle title={"Featured Articles"} url={"https://www.epiccheerleader.com/how-tos"}/>
        <PostCard post={posts[6]} />
        <PostList 
          // posts={posts.filter((_post, index) => index >0 && index < 3)} 
          posts={posts.filter((_post, index) => [0, 16, 14].includes(index))} 
          />
        {/*<SectionTitle title={"Latest Article"} url={"https://www.epiccheerleader.com/knowledge"}/>
        <PostCard reverse post={posts[2]} /> */}
        <TakeTest />
        <SectionTitle title={"Confidence Quotes and Affirmations"} url={"https://www.epiccheerleader.com/quotes"}/>
        <PostListCategory posts={posts} categoryFilter='Quotes and Affirmations'/>
        {/* @ts-expected-error Async Component*/}
        <CTACard />
        <SectionTitle title={"Editor's choice"} url={"https://www.epiccheerleader.com/experiences"}/>
        <PostCard reverse post={posts[3]} />
        <SectionTitle title={"Favorite Articles"} url={"https://www.epiccheerleader.com/knowledge"}/>
        <PostList 
          posts={posts.filter((_post, index) => index >7 && index < 14)} 
          />
      </main>
    </PaddingContainer> 
  );
};