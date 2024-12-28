import React, { useContext,useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/context'




const Stylist = () => {

  const{speciality} = useParams()
  const [filterDoc,setFilterDoc] = useState([])

 const {stylist} = useContext(AppContext)

 const applyFilter = () => {
   if (speciality) {
    setFilterDoc(stylist.filter(doc => doc.speciality === speciality))
   } else{
   setFilterDoc(stylist)
 }
}
useEffect(()=>{
  applyFilter()

},[stylist,speciality])
  return (
    <div>
      <i>Choose through the services</i>
      <div>
        <div>
          <p>Hair Cut</p>
          <p>Smoothening</p>
          <p>Facial&Bleaching</p>
          <p>Bridal Makeup</p>
          <p>Skin Whitening</p>
          <p>Nail Art</p>
        </div>
        <div>
          {
            filterDoc.map((item,index)=>(
        
              <div onClick={()=>navigate('/appointment/${item._id}')}className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translste-y-[-10px] transition-all duration-500'>
                  <img className='bg-gray-50'src={item.image}/>
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <h1 className='text-gray-900 text-lg font-medium'>{item.name}</h1>
                     
      
                  </div>
      
              </div>
            ))
          }
        </div>
      </div>
      
    </div>
  )

}
export default Stylist
