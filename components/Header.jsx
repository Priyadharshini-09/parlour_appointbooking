import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-12 lg:px-20'>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <i className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight
            '>
            Exceptional beauty Starts here...
            </i>
            <div className='flex flex-col md:text-row items-center gap-3 text-white text-sm font-light'>
                
                <p className='font-semibold'>Simply browse through our extensive list of trusted stylists,schedule your appointment hassle-free.</p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md-m-0 hover:scale-105 transtition-all duration-300 '>
                Book Now <img className='w-3'src={assets.arrow_icon}/>
            </a>
        </div>
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-full rounded-lg'src={assets.header_img}/>

        </div>
      
    </div>
  )
}

export default Header