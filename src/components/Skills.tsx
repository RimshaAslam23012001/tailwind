import React from 'react'

const Skills = () => {
  return (
    <div className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="fade-up-right" >
                <h2 className='text-4xl md:text-5xl' >Technologies I Work With</h2>
                <p className='text-gray- pt-2'>I know how to use HTML, CSS, and TypeScript. With HTML, I can create the basic structure of a webpages. In CSS, I can make websites look nice.With TypeScript, I write code that helps prevent mistakes by adding types to things, making my code safer and easier to understand.</p>
                <p className='text-gray- pt-2'>I also have some knowledge of Next.js and Tailwind CSS. With Next.js, I can build fast, server-side rendered websites and web apps.Tailwind CSS, I use it to style websites by applying ready-made utility classes.</p>
            </div>
            <div className='grid grid-cols-2 text-blue-400 text-xl sm:textxl-'>
                <div className='space-y-2'>
                    <h2 data-aos="fade-up-right">MS Office</h2>
                    <h2 data-aos="fade-up-right">HTML</h2>
                    <h2 data-aos="fade-up-right">CSS</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="fade-up-right">Typescript</h2>
                    <h2 data-aos="fade-up-right">Next.Js</h2>
                    <h2 data-aos="fade-up-right">Tailwind</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills;
