import React from 'react'
import { assets } from './../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-row sm:grid-col-[1fr_3fr_3fr] gap-14 my-20 mt-40 text-sm'>
            <div>
                <img  className='mb-5 w-40'src={assets.logo}/>
                <p className='flex flex-col w:full md:w-2/3 text-gray-800 leading-6'>Sleek Vibes is a  stylish salon that offers a range of hair services known for their expertise in blowouts, cuts, and color treatments.Their team of experienced professionals offers a range of services including hair styling, makeup, and skincare.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-800'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text gray-800'>
                        <li>+91-212-646-9775</li>
                        <li>sleekvibes.@support.ac.in</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright 2025@ Sleekvibes-All Right Reserved</p>
            </div>
        </div>
      
    
  )
}

export default Footer
