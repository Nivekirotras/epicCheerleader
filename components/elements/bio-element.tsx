import React from 'react'
import Image from 'next/image'
import directus_old from '@/lib/directus_old';
import { revalidateTag } from 'next/cache';

const BIOElement = async () => {

  return (
    <div className='relative px-6 py-10 rounded-md bg-slate-100 flex flex-col-reverse md:flex-row'>
        {/* Content Container */}
        <div className='relative z-20 flex-1'>
            <h2 className='text-4xl mt-3 font-semibold sm:text-2xl' style={{ lineHeight: '2' }}>Hi there, I&apos;m Niv,</h2>
            <p className="mt-2 max-w-xl text-xl mb-4 sm:text-lg text-gray-700" style={{ lineHeight: '1.2' }}>
                If you had told me years ago that I&apos;d be running a site about self-confidence, I&apos;d have laughed... nervously.</p> 
            <p className='mt-2 max-w-xl text-xl mb-4 sm:text-lg text-gray-700' style={{ lineHeight: '1.2' }}>
                You see, as a tech guy with an engineering background and a Berkeley MBA, I was more at home with gadgets and spreadsheets than with talks about self-belief.</p>
            <p className='mt-2 max-w-xl text-xl mb-4 sm:text-lg text-gray-700' style={{ lineHeight: '1.2' }}>
                But here&apos;s the twist: despite all the techy stuff, I realized I was pretty much a novice when it came to being confident.</p>
            <p className='mt-2 max-w-xl text-xl mb-4 sm:text-lg text-gray-700' style={{ lineHeight: '1.2' }}>
                So, what did I do?</p>
            <p className='mt-2 max-w-xl text-xl mb-4 sm:text-lg text-gray-700' style={{ lineHeight: '1.2' }}>
                I dove headfirst into the world of self-help, read every book I could find, attended workshops, and even talked to a few wise folks. Some ideas worked, some didn&apos;t, and some were just plain funny. But every step was a lesson in building confidence.</p>
            <p className='mt-2 max-w-xl text-xl mb-4 sm:text-lg text-gray-700' style={{ lineHeight: '1.2' }}>
                That’s why I started EpicCheerleader.com. It&apos;s a no-judgment zone where we share simple, real-world tips on being your own cheerleader (pom-poms optional).</p>
            <p className='mt-2 max-w-xl text-xl mb-4 sm:text-lg text-gray-700' style={{ lineHeight: '1.2' }}>
                Together with a group of awesome writers and some brainy experts, we’re here to make the journey to confidence fun, a little quirky, and super supportive. Got a question or just want to say hi? Drop me a line at hello @ epiccheerleader . com.</p>
            <p className='mt-2 max-w-xl text-xl sm:text-lg text-gray-700' style={{ lineHeight: '1.2' }}>
                Join us, and let&apos;s turn those doubtful whispers into shouts of <strong>I&apos;ve got this!</strong></p>
        </div>
        
        {/* Image */}
        <div className='relative ml-6 z-20 md:w-1/2'>
            <Image
                fill 
                alt="Niv Iro, founder and author of Epic Cheerleader"
                className="object-cover object-center max-w-full md:max-w-none"
                src="https://directus-production-edfa.up.railway.app/assets/4c77bcf8-afe4-4a33-82e5-64405c6821e6.png"/>
        </div>

        {/* Overlay */}
        <div className='absolute z-10 inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30'></div>
    </div>
  )
}

export default BIOElement;
