import React, { useState } from 'react'
import {AiFillPhone} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import { banner, bannerpic, woxrologo } from './image/image';
import {FaBars,FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa'
import { Link } from 'react-scroll';
import Banner from './Banner';
import Service from './Service';
import Contact from './Contact';



const Navbar = () => {
    const [nav,setNav]= useState(false)
    const handleClick =()=>setNav(!nav)

  return (
    <div className="  w-full  bg-[#000000]  text-gray-300 ">
      <div className="max-w-[1200px] mx-auto bg-slate-500    flex flex-col  w-full">
        <div className="  hidden md:w-full h-[35px]   md:flex    justify-between items-center px-4 bg-[#000000]  text-gray-300">
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
        <div className=" w-full h-[80px] flex justify-between items-center   px-4 bg-[rgb(255,255,255)] text-gray-300">
          <div className="flex justify-between">
            <img className="w-[180px]" src={woxrologo} alt="" />
          </div>

            {/* ---hamburgerr---- */}
      <div onClick={handleClick} className="md:hidden z-20">
        {!nav ? <FaBars size={30} color='black' /> : <FaTimes />}
      </div>


        </div>



       

      












     

         <div className=" hidden sm:w-full md:h-[35px]  md:sticky md:top-0 md:z-50   md:flex justify-between items-center py-6 px-4 bg-[#161a1e] text-gray-300">
          <ul className=" hidden md:flex   justify-evenly gap-3 w-full p-4 cursor-pointer ">
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
            <Banner />
            <Service />
             <Contact />
          
            
            
            
             <ul
        className={
            !nav
            ? "hidden"
            : "absolute z-10 top-0 right-0 w-[50%] h-screen  bg-black flex-col p-6  flex justify-center  "
        }
      >
        <li className="py-2 text-2sm"> <Link onClick={handleClick}  smooth={true}  duration={500}>
            Home
          </Link></li>
        <li className="py-2 text-2sm"> <Link onClick={handleClick}  smooth={true}  duration={500}>
        About
          </Link></li>
        <li className="py-2 text-2sm"> <Link onClick={handleClick}  smooth={true}  duration={500}>
        Service
          </Link></li>
        <li className="py-2 text-2sm"><Link onClick={handleClick}  smooth={true}  duration={500}>
        Technology
          </Link></li>
        <li className="py-2 text-2sm"> <Link onClick={handleClick}  smooth={true}  duration={500}>
        Careers
          </Link></li>
        <li className="py-2 text-2sm"> <Link onClick={handleClick}  smooth={true}  duration={500}>
        Blogs
          </Link></li>
        <li className="py-2 text-2sm"> <Link onClick={handleClick}  smooth={true}  duration={500}>
        Our Works
          </Link></li>
        <li className="py-2 text-2sm"> <Link onClick={handleClick}  smooth={true}  duration={500}>
        Contact us
          </Link></li>
      </ul>
         <div>
            
          
      

      
        </div>
       
        
      </div>
    </div>
  );
}

export default Navbar