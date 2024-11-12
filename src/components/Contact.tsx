import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl' data-aos="fade-up-right">Get in touch</h2>
          <p className='text-gray-600 text-18px pt-2' data-aos="fade-up-right">
            Drop me a line,give me a call,or send me a message submitting the form
          </p>
          <div className='flex gap-3 items-center' data-aos="fade-up-right">
             <MdMarkEmailRead size={30}/>rimsha.asm.1@gmail.com
          </div>
          <div className='flex gap-3 items-center' data-aos="fade-up-right">
             <FaPhone  size={30}/>0343-02020243
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' className='h-40px bg-transparent border-solid border-2  border-blue-400' />
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' className='h-40px bg-transparent border-solid border-2  border-blue-400' />
            <label htmlFor='message'>Message:</label>
            <textarea id='message' className='h-100px bg-transparent border-solid border-2  border-blue-400' rows={4} />
          </div>
          <button className='w-full p-2 px-6 text-white bg-blue-400 border-none rounded-md'data-aos="fade-up-right">Send</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact;
