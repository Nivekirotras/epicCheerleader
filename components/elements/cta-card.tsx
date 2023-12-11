import React from 'react'
import Image from 'next/image'
import directus_old from '@/lib/directus_old';
import { revalidateTag } from 'next/cache';

const CTACard = async () => {
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
    <div className='relative px-6 py-10 rounded-md bg-slate-100'>
        {/* Overlay */}
        <div className='absolute z-10 inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30'></div>
        {/* Image */}
        <Image
            fill 
            alt="CTA Card Image"
            className="object-cover object-center"
            src="https://images.unsplash.com/photo-1637825891035-1930cbd564dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        
        {/* Content Container */}
        <div className='relative z-20'>
            <div className='text-lg font-medium'>#becomeYourCheerleader</div>   
            <h3 className='text-4xl mt-3 font-semibold'>Sign up to the newsletter</h3>
            <p className='mt-2 max-w-lg text-lg'>Get a bliss of the best tips to grow your sel-confidence on a daily basis. The latest from research to your inbox</p>
            {/* Form */}
            <form 
            key={subscribersCount + "subscriber-count"}
            action={formAction}
            className='flex items-center gap-2 mt-6 w-full '>
                <input 
                type="email"
                name="email"
                placeholder='write your email.'
                className='text-base rounded-md w-full md:w-auto py-2 px-3 outline-none bg-white/80 placeholder:text-sm focus:ring-2 ring-neutral-600'
                />
                <button className='px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200'>
                  Sign up</button>
            </form>

            {/** Subscribers */}
            <div className='mt-5 text-neutral-700'>
              Join our <span className='px-2 py-1 text-sm rounded-md bg-neutral-700 text-neutral-100'>500+</span>
              {" "}subscribers now!              
              </div>
        </div>
        
    </div>
  )
}

export default CTACard;

// <div className='mt-5 text-neutral-700'>
// Join our <span className='px-2 py-1 text-sm rounded-md bg-neutral-700 text-neutral-100'>{5+ subscribersCount}</span>
// {" "}subscribers now!              
// </div>
