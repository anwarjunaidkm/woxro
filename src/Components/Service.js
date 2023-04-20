import React from 'react'
import { digitalmarketing, ecommercedevelopment, graphic, mobileappdevelopment, webapplication, webdesigning } from './image/image'

const Service = () => {
  return (
    <div className=" w-full bg-[#000000] text-black">
          <div className="max-w-[1200px] mx-auto bg-white flex pb-8 flex-col h-full w-full">
            {/* <div className='flex justify-center flex-col items-center  p-11     '>
                <h4  className='my-5 font-bold tracking-wide '>SERVICES WE DELIVER</h4>
                <h1 className='text-4xl font-bold  ' >
                Preparing for your success, we provide truly </h1> 
               <h1 className='text-4xl font-bold  '> prominent IT solutions. </h1>
                
            </div> */}

<div className='flex flex-col items-center p-4 md:p-8 lg:p-12 xl:p-16'>
  <h4 className='my-2 md:my-4 lg:my-6 xl:my-8 font-bold tracking-wide text-center'>
    SERVICES WE DELIVER
  </h4>
  <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center'>
    Preparing for your success, we provide truly prominent IT solutions.
  </h1>
</div>


<div class="container mx-auto " >
  <div class="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 gap-2">




                
   
  
    <div class="flex justify-center cursor-pointer hover:scale-90 ">

                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-[#e7f0f7] p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex  items-center justify-center bg-[#e7f0f7] text-black flex-shrink-0">
                                    <img src={webdesigning} alt="" />
                                </div>
                                <h2 class="text-black text-lg font-bold">Web Designing</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-black">We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
                               
                            </div>
                        </div>
                    </div>
                        
    </div>

    <div class="flex justify-center cursor-pointer hover:scale-90 ">

    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-[#f6f5f3] p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center bg-[#e7f0f7] text-black flex-shrink-0">
                                   <img src={webapplication} alt="" />
                                </div>
                                <h2 class="text-black text-lg font-bold">Web Application</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-black">We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.</p>
                               
                            </div>
                        </div>
                    </div>
                        
    </div>

    <div class="flex justify-center cursor-pointer hover:scale-90 ">

    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-[#f6f5f3] p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-[#e7f0f7] text-black flex-shrink-0">
                                    <img src={mobileappdevelopment} alt="" />
                                </div>
                                <h2 class="text-black text-lg font-bold">Mobile App Development</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-black">We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions..</p>
                               
                            </div>
                        </div>
                    </div>
                        
    </div>

    <div class="flex justify-center cursor-pointer hover:scale-90  ">

    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-[#fcf0e4] p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-[#e7f0f7] text-black flex-shrink-0">
                                        <img src={ecommercedevelopment} alt="" />
                                    
                                </div>
                                <h2 class="text-black text-lg font-bold">Ecommerce Development</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-black">For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start..</p>
                               
                            </div>
                        </div>
                    </div>
                        
    </div>
    <div class="flex justify-center cursor-pointer hover:scale-90 ">

    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-[#f5f6f8] p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center bg-[#e7f0f7] text-black flex-shrink-0">
                                        <img src={digitalmarketing} alt="" />
                                    
                                </div>
                                <h2 class="text-black text-lg font-bold">Digital Marketing</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-black">We bring together expertise in digital marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.</p>
                               
                            </div>
                        </div>
                    </div>
                        
    </div>
    <div class="flex justify-center cursor-pointer hover:scale-90  ">

    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-[#effbfb] p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-[#e7f0f7] text-black flex-shrink-0">
                                    <img src={graphic} alt="" />
                                </div>
                                <h2 class="text-black text-lg font-bold">Graphic Designing</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-black">or some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start..</p>
                               
                            </div>
                        </div>
                    </div>
                        
    </div>


    
  </div>
</div>




    
    
    
    </div>
    </div>

  )
}

export default Service