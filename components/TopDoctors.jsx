import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'





const TopDoctors = () => {

    const navigate = useNavigate()
    const {Stylist} = useContext(AppContext)
    

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <i  className='text-3xl font-semibold'>Services to glow!!</i>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {Stylist.slice(0,10).map((item,index)=>(
        
        <div onClick={()=>navigate('/appointment/${item._id}')}className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translste-y-[-10px] transition-all duration-500'>
            <img className='bg-gray-50'src={item.image}/>
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
                <h1 className='text-gray-900 text-lg font-medium'>{item.name}</h1>
               

            </div>

        </div>
      ))}
    </div>
    <button onClick={()=>{navigate('/Stylist');scrollTo(0,0)}} >more..</button>
    </div>
  
    )
}

export default TopDoctors
