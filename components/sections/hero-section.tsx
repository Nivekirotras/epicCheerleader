import React from 'react'
import Image from "next/image"

const HeroSection = () => {
    return (
      <div className='flex flex-col md:flex-row gap-10 md:gap-8'>
  
          <div className="w-full md:w-1/2 md:mb-0">
              <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold max-w-md">Become your own best cheerleader 🎉</h1>
              <h2 className="mb-6 text-md lg:text-xl text-gray-700 leading-loose max-w-lg">We are great at giving other people advice and cheer for them. We fail to do the same for ourselves. Learn how to <span className="text-purple-700 font-bold"> turn your inner voice</span> into your biggest fan.</h2>
              <div className="flex flex-wrap gap-y-2">
                  <a className="inline-block px-6 py-2 mr-4 text-md text-white font-bold leading-loose bg-purple-700 hover:bg-purple-500 rounded-lg transition duration-100" href="/about">
                      Our manifesto</a>
                  <a className="inline-block px-6 py-2 text-md text-gray-600 hover:text-gray-600 font-bold leading-loose border border-gray-500 hover:border-gray-200 rounded-lg" href="/experiences">
                      Learn More</a>
              </div>
          </div>
  
        {/* Image container with responsive aspect ratio */}
          <div className="w-full md:w-1/2 h-[380px] md:h-auto relative md:aspect-w-1 md:aspect-h-1">
            <Image 
                className="rounded-md object-cover absolute top-0 left-0" 
                alt="Hero Image Epic Cheerleader 2" 
                src="/heroImageEpicCheerleader.jpg"
                layout="fill"
            />
          </div>
    </div>
    )
  }
  

export default HeroSection;
