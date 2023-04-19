import React from 'react'
import {AiFillPhone} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import { banner, bannerpic, woxrologo } from './image/image';

const Navbar = () => {

  return (
    <div className=" h-screen w-full  bg-[#000000]  text-gray-300 ">
      <div className="max-w-[1200px] mx-auto bg-slate-500  flex flex-col  w-full h-full">
        <div className="  hidden md:block  w-full h-[35px]  md:flex  justify-between items-center px-4 bg-[#000000]  text-gray-300">
          <p className="text-[14px]">
            {" "}
            <span className="font-bold">Now Hiring</span>: Looking for a job in
            Full Stack Development?
          </p>
          <div className="flex justify-center items-center ">
            <AiFillPhone />
            <p className="font-bold mx-3 text-[14px]"> +91 487 2080 212</p>{" "}
            <MdLocationOn />{" "}
            <p className="mx-3">Leshore Business Park, Thrissur</p>
          </div>
        </div>
        <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[rgb(255,255,255)] text-gray-300">
          <div className="flex justify-between">
            <img className="w-[180px]" src={woxrologo} alt="" />
          </div>
        </div>
        <div className=" hidden sm:w-full md:h-[35px] sm:flex justify-between items-center px-4 bg-[#161a1e] text-gray-300">
          <ul className=" flex justify-evenly gap-3 w-full p-4">
            <li>Home</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Technology</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Our Works</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className='relative flex justify-center '>
           <img
            className="h-[80%] w-full brightness-50 "
            src={bannerpic}
            alt=""
          /> 
          

          <h1 className='absolute top-0' >Kerala's Leading Web <br /> Design Company</h1>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar