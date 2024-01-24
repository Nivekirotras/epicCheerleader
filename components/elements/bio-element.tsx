import React from 'react'
import Image from 'next/image'
import directus_old from '@/lib/directus_old';
import { revalidateTag } from 'next/cache';

const BIOElement = async () => {

  return (
    <div className='relative px-6 py-10 rounded-md bg-slate-100 flex flex-col-reverse md:flex-row'>
        {/* Content Container */}
        <div className='relative z-20 flex-1'>
            <h2 className='text-4xl mt-3 font-semibold'>Hi there, I am Niv,</h2>
            <p className="mt-2 max-w-xl text-xl" style={{ lineHeight: '1.3' }}>If you had told me years ago that I'd be running a site about self-confidence, I'd have laughed... nervously.</p> 
            <p className='mt-2 max-w-xl text-xl' style={{ lineHeight: '1.3' }}>You see, as a tech guy with an engineering background and a Berkeley MBA, I was more at home with gadgets and spreadsheets than with talks about self-belief.</p>
            <p className='mt-2 max-w-xl text-xl' style={{ lineHeight: '1.3' }}>But here's the twist: despite all the techy stuff, I realized I was pretty much a novice when it came to being confident. Starting out in the tech world, I had big dreams but a small voice in my head saying, 'Can you really do this?' Turns out, boosting my self-confidence was the secret ingredient I was missing to turn those dreams into reality.</p>
            <p className='mt-2 max-w-xl text-xl' style={{ lineHeight: '1.3' }}>So, what did I do? I dove headfirst into the world of self-help, read every book I could find, attended workshops, and even talked to a few wise folks. Some ideas worked, some didn’t, and some were just plain funny. But every step was a lesson in building confidence.</p>
            <p className='mt-2 max-w-xl text-xl' style={{ lineHeight: '1.3' }}>That’s why I started EpicCheerleader.com. It’s my way of saying, 'Hey, if I can do it, so can you!' It's a no-judgment zone where we share simple, real-world tips on being your own cheerleader (pom-poms optional).</p>
            <p className='mt-2 max-w-xl text-xl' style={{ lineHeight: '1.3' }}>Together with a bunch of awesome writers and some brainy experts, we’re here to make the journey to confidence fun, a little quirky, and super supportive. Got a question or just want to say hi? Drop us a line at hello @ epiccheerleader . com.</p>
            <p className='mt-2 max-w-xl text-xl' style={{ lineHeight: '1.3' }}>Join us, and let's turn those doubtful whispers into shouts of 'I've got this!'</p>
        </div>
        
        {/* Image */}
        <div className='relative z-20 md:w-1/2'>
            <Image
                fill 
                alt="Niv Iro, founder and author of Epic Cheerleader"
                className="object-cover object-center"
                src="https://directus-production-edfa.up.railway.app/assets/4c77bcf8-afe4-4a33-82e5-64405c6821e6.png"/>
        </div>

        {/* Overlay */}
        <div className='absolute z-10 inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30'></div>
    </div>
  )
}

export default BIOElement;
