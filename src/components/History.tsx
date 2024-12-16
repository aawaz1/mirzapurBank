import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import barcode from '../../public/himg-kkcnote.jpg'

const History = () => {
  return (
    <div className='flex flex-col md:flex-row justify-start px-8 container mx-auto py-6 items-start bg-white'>
        <div className='py-4 space-y-4'>
            <h2 className='font-bold text-xl'>History of DCB Mirzapur</h2>
            <p>In India the Co-Operative Act was first created in 1904 and then passed again in the year 1912 as the Cooperative Act which led to the formation of the Central Co-Operative Banks and the States initiated the formation of various Co-Operative Banks. In year 1915 the first District Co-Operative Bank was founded in Gola Gokarnnath, but this institution failed due to some reasons. On 05/09/1916 our district’s great personality Honourable Late Ram Autar ... <Link href={"/history"} className='text-blue-600'>Read More</Link></p>
        </div>
        <div className='rounded-md bg-slate-200  p-4'>
            <div className='bg-white p-2'>
            <Image height={2000} width={1200} src={barcode} alt='hello'/>
            <p className='text-center text-sm'>District Co-Operative Bank Ltd. Mirzapur</p>

            </div>
        </div>
    </div>
  )
}

export default History