import React from 'react'
import Image from 'next/image'
import directus_old from '@/lib/directus_old';
import { revalidateTag } from 'next/cache';

const testElement = async () => {
  const formAction = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email");
      await directus_old.items("subscribers").createOne({
        email,
      });
      revalidateTag("subscriber-count");
    } catch (error) {
      console.log(error);
    }
  };

  const subscribersCount = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
    {
      next: {
        tags: ["subscribers-count"],
      },
    }
  )

  .then((res) => res.json())
  .then((res) => res.meta.total_count)
  .catch((error) => console.log(error));

  return (
    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className='block'>
      <div className='relative px-6 py-10 rounded-md bg-slate-100 max-w-xs mx-auto'>
          {/* Overlay */}
          <div className='absolute z-10 inset-0 bg-gradient-to-br from-white/10 via-white/20 to-white/30'></div>
          {/* Image */}
          <Image
              fill 
              alt="New journaling app with voice journaling"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1636955779321-819753cd1741?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          
          {/* Content Container */}
          <div className='relative z-20'>
              <div className='text-lg font-medium text-neutral-100'>#startJournaling</div>   
              <h3 className='text-4xl mt-3 font-semibold text-neutral-100'>Journal to find your inner cheerleader</h3>
              <p className='mt-2 max-w-lg text-xl text-neutral-100'>Supercharge your self-improvement journey with the new Insightfully journaling app. </p>
              {/* Visual Button Element */}
              <div className='flex items-center gap-2 mt-6 w-full'>
                  <button className='px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200'>
                  Learn more</button>
              </div>
          </div>
      </div>
    </a>
  )
}

export default testElement;
