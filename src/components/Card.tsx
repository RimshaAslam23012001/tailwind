import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';


interface propsType{
    title: string,
    desc: string,
    img: string | StaticImageData; 
    tag: string[]
  
}
type NewType = React.FC<propsType>;

const Card: NewType = ({title, desc, img, tag}) => {
    return (
        <div className='border border-blue-400 w-300px sm:w-350px' data-aos="fade-up-right">
            <div>
                <Image
                    src={img}
                    width={350}
                    height={350}
                    alt='title'
                    className='w-300px sm:350px h-auto' />
            </div>
            <div className='p-4 space-y-4'>
                <div className='text-4xl font-extralight'>{title}</div>
                <div>
                    {desc}
                </div>
                <div>
                    {tag.map((tag) => (<div className='tags' key={tag}>{tag}</div>))}
                </div>
            </div>
        </div>
    );
}

export default Card
