import React from 'react'
import Image from 'next/image'
import chairmanImg from '../../../../public/about-30.jpg'
import Link from 'next/link';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import BreadCrumb from '@/components/BreadCrumb';
import board from '../../../../public/board-29.png'


const projects = [
 
    {
      title: "EMI Calculator",
      image : <GiShakingHands/>,
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "RD Calculator",
      image : <VscLightbulbSparkle/>,
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Maturity Calculator",
      image : <VscLightbulbSparkle/>,
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
   
  ];
  

const page = () => {
  return (
    <div>
          <div className='flex flex-col bg-blue-300 justify-between items-start'>
       
       <div className='mt-16 w-full'> <BreadCrumb name='About Us'  title="Chairman"/></div>
 
       </div>
        <main className="mt-10 flex flex-col md:flex-row justify-between items-start gap-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
        <div className='lg:w-2/3 bg-zinc-50 p-2'>
        <div className="sm:text-center lg:text-left">
  <h2 className="my-6 text-2xl flex gap-4 tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
    Board Of Director<span className='border border-r-2 border-yellow-300'></span>
  </h2>
  <div className='grid grid-cols-1 md:grid-cols-2  bg-white lg:grid-cols-3  gap-6 p-4'>
    <div>
        <Image src={board} alt=''/>
        <h2 className='font-bold text-center'>Mr Udai Pratap Verma</h2>
        <h2 className='text-center'>Chairman</h2>
    </div>
    <div>
        <Image src={board} alt=''/>
        <h2 className='font-bold text-center'>Mr. Ranjit Sinha</h2>
        <h2 className='text-center'> Deputy Chairman</h2>
    </div>
    <div>
        <Image src={board} alt=''/>
        <h2 className='font-bold text-center'>Mr Vivek Singh Roy</h2>
        <h2 className='text-center'>Director</h2>
    </div>
   
   
  </div>
 
  

  

</div>
</div>

<div className=" lg:w-1/3 w-full space-y-6">
<div className='lg:w-full'>


<div className="bg-blue-800  rounded-md ">
    {
        projects.map((item:any , idx:any) => {
            return (
              <Link key={idx} href={item.link}>
                 <button className="flex rounded-md w-full gap-4 hover:bg-slate-600 p-2 py-8  justify-center items-center">
                    <span className="text-4xl text-white">{item.image}</span>
                    <span className="text-xl text-white">{item.title}</span>

       
                </button>
              </Link>
             
            )
        })
  }
</div>
</div>
<div className='lg:w-full'>
<div className="bg-slate-200 p-2 h-[300px] max-h-60  rounded-md">
<h2 className=" text-2xl py-2 text-center text-blue-600 font-bold bg-slate-200">What&apos;s New !!</h2>
<div className='bg-white  text-red-400x'>

</div>


</div></div>


 
</div>
</main>
    </div>
  )
}

export default page







