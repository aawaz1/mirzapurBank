import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import barcode from '../../public/himg-kkcnote.jpg'
import { GlareCard } from './ui/glare-card'

const History = () => {
  return (
   <div className='bg-gradient-to-t from-neutral-300 to-blue-500 py-2'> 
   <div className='flex flex-col md:flex-row justify-start items-start px-8 container mx-auto py-6  '>
        <div className='py-4 w-full md:w-1/2 space-y-4'>
        <div>
        <h2 className='text-2xl font-semibold  text-yellow-950'>
                      History Of DCB Mirzapur
                      </h2>
                      <div className='border-t-2 mt-2 border-yellow-950'></div>
                      </div>            <p>In India the Co-Operative Act was first created in 1904 and then passed again in the year 1912 as the Cooperative Act which led to the formation of the Central Co-Operative Banks and the States initiated the formation of various Co-Operative Banks. In year 1915 the first District Co-Operative Bank was founded in Gola Gokarnnath, but this institution failed due to some reasons. On 05/09/1916 our district’s great personality Honourable LateIn India the Co-Operative Act was first created in 1904 and then passed again in the year 1912 as the Cooperative Act which led to the formation of the Central Co-Operative Banks and the States initiated the formation of various Co-Operative Banks. In year 1915 the first District Co-Operative Bank was founded in Gola Gokarnnath, but this institution failed due to some reasons. On 05/09/1916 our district’s great personality Honourable Late ... <Link href={"/about/history"} className='text-blue-600'>Read More</Link></p>
        </div>
        <div className='rounded-md w-full md:w-1/2 flex  justify-end items-end   p-4'>
        <GlareCard className="flex flex-col items-center justify-center">
        <div className='bg-white p-2 w-full h-full rounded-md flex justify-between flex-col'>
            <Image className='h-72 w-full' src={barcode} alt='hello'/>
            <p className='text-center text-sm'>District Co-Operative Bank Ltd. Mirzapur</p>

            </div>
            </GlareCard>
           
        </div>
    </div>
    </div>
  )
}

export default History