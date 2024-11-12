import React from 'react';
import Image from "next/image";

const Hero = () => {
  return (
    <section className='bg-black flex p-10 justify-between items-center'>
    <div className='max-w-6xl mx-auto'>
      <div className='items-center'>
        <div className=' text-left flex justify-between items-center'>
          <div className='text-8xl text-white font-bold shadow-md'>
          <h1 data-aos="fade-up-right">I&apos;m</h1>
          <h1 data-aos="fade-up-right">Rimsha</h1>
          <h1 data-aos="fade-up-right">Aslam</h1>
          </div>

        </div>

      </div>
    

    </div>
    <div className='relative'>
          <div className=' w-full max-w-md mx-auto'>
            <div className=' rounded-full overflow-hidden shadow-lg border-4 border-blue-400'>
              <Image
              src={"/rim.jpg"}
              alt='Hero Image'
              width={200}
              height={200}
              className='object-cover  w-full h-full'
              />
            </div>
          </div>

        </div>
        </section>

  )
}

export default Hero;

