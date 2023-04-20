import React from 'react'
import { woxroglobe } from './image/image'
import {BsTelephoneFill, BsChatFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className=" h-max-[260px]:-[] w-full bg-[#000000] text-black">
      <div className="max-w-[1200px] mx-auto bg-black flex flex-col w-full">
        <div className="h-[260px] relative overflow-hidden">
          <img
            className="w-full  md:w-[65%] md:object-contain"
            src={woxroglobe}
            alt=""
          />
          <div className='absolute top-0 h-full w-full flex flex-col items-center  sm:flex-row sm:flex sm:justify-between sm:items-center  '>
            <h1 className='text-white text-3xl px-8 m-4 ' > We offer all kinds of IT services that <br /> ensure your success</h1>
            <div className='mx-4'>

            <button class="bg-transparent m-3 px-8 hover:bg-white text-white font-semibold hover:text-black py-3  border border-white    hover:border-transparent rounded">
            <BsTelephoneFill  className='inline-block gap-2' />   Contact us            </button>
            <button class="bg-transparent  m-3 px-8 hover:bg-white text-white font-semibold hover:text-black py-3  border border-white    hover:border-transparent rounded">
            <BsChatFill className='inline-block' />   Let's Talk
            </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact