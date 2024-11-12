import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data =[
    {
        id:0,
        title:"Registration Form",
        desc: " A HTML & CSS based registration form to fill your data.",
        img: "/fr.png",
        tag: ["HTML", "CSS"],
    },
    {
        id:1,
        title:"Panacloud",
        desc: " A HTML & CSS based company portfolio.",
        img: "/pc.png",
        tag: ["HTML", "CSS"],
    },
    {
        id:2,
        title:"Static Resume",
        desc: "A Typescript based interactive resume built with HTML & CSS to show case your skills.",
        img: "/st.png",
        tag: ["HTML", "CSS", "Typescript"],
    },
    {
        id:3,
        title:"Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time .",
        img: "/ct.png",
        tag: ["Next.js", "CSS", "Typescript", "Node"],
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (
                <Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tag={el.tag}
                />
            ))}
        </div>
      
    </div>
  )
}

export default Projects;
