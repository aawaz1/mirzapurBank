import React from 'react'
import Image from 'next/image'
import chairmanImg from '../../../../public/about-30.jpg'
import Link from 'next/link';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import BreadCrumb from '@/components/BreadCrumb';


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
       
       <div className='mt-16 w-full'> <BreadCrumb name='About Us' title="Vision & Mission"/></div>
 
       </div>
        <main className="mt-10 flex flex-col md:flex-row justify-between gap-6 items-start mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
            <div className='lg:w-2/3 bg-zinc-50 p-2 px-6 rounded-md'>
<div className="sm:text-center lg:text-left">
  <h2 className="my-6 text-2xl flex gap-4 tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
    Our Mission & Vision <span className='border border-r-2 border-yellow-300'></span>
  </h2>


  

  
<h2 className='font-bold'>Our Vision -</h2>

      <p>To help our customers meet their financial goal and objective through our banking products & services.</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>To be the Bank of the people</li>
        <li>Delivering Innovative banking products and services by consistent improvement of technology, process, and people</li>
        <li>Uplift villagers and rural masses.</li>
        <li>Based on Co-operative principles and values to be the role model of co-operative banks.</li>
      </ul>

      <h2 className='font-bold mt-8'>Our Mission -</h2>

      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li><strong>C</strong> - Concern for the people; commitment to social development.</li>
        <li><strong>O</strong> - Offer best quality banking service.</li>
        <li><strong>O</strong> - Operational accessibility to all.</li>
        <li><strong>P</strong> - People friendly products and activities.</li>
        <li><strong>E</strong> - Ethics and justice to customers.</li>
        <li><strong>R</strong> - Responsibility towards the down trodden.</li>
        <li><strong>A</strong> - Acceptance and accommodation of haves and have-nots.</li>
        <li><strong>T</strong> - Technological upgradation and advancement.</li>
        <li><strong>I</strong> - Innovation and Excellence.</li>
        <li><strong>V</strong> - Vibrant and proactive banking institution.</li>
        <li><strong>E</strong> - Empower the masses – Enrich society.</li>
      </ul>
    


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
<div className='w-full'>
<div className="bg-slate-200 p-2 h-[400px] max-h-60  rounded-md">
<h2 className=" text-2xl py-2 text-center text-blue-600 font-bold bg-slate-200">What&apos;s New !!</h2>
<div className=' h-[100%] text-red-400x'>

</div>


</div></div>


 
</div>
</main>
    </div>
  )
}

export default page







