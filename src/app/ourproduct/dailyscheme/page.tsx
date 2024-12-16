import BreadCrumb from '@/components/BreadCrumb'
import React from 'react'

const page = () => {
  return (
    <div>
          <div className='flex flex-col bg-blue-300 justify-between items-start'>
       
       <div className='mt-16 w-full'> <BreadCrumb name='Our Products' title="Daily Deposits Scheme"/></div>
 
       </div>
    </div>
  )
}

export default page