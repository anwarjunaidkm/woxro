import React from 'react'
import { bannerpic } from './image/image'

const Banner = () => {
  return (
    <>
     

        


<div className="h-screen w-full  bg-[#000000] text-gray-300">
  <div className="max-w-[1200px] mx-auto flex flex-col h-full w-full">
    <div className="  inline-block h-full">
      <img className="h-full relative   w-full object-cover brightness-50" src={bannerpic} alt="" />
      <h1 className="text-white font-bold text-4xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-4 sm:p-6 md:p-8 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-center items-center text-center">Kerala's Leading Web<br />Design Company</h1>
      <p className="text-white font-bold text-lg p-4  sm:p-6 md:p-8 absolute top-[55%] left-0 right-0 transform translate-y-1/2 flex justify-center items-center text-center">Global Web Designing Company That Provides Full-cycle Software Development Services<br />E-commerce & Mobile App Development Services</p>
    </div>
  </div>
</div>


         

        
    </>
  )
}

export default Banner