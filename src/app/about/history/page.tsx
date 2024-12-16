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
       
       <div className='mt-16 w-full'> <BreadCrumb name='About Us'  title="History"/></div>
 
       </div>
        <main className="mt-10 flex flex-col md:flex-row justify-between items-start gap-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
        <div className='lg:w-2/3 w-full bg-zinc-50 p-2'>
        <div className="sm:text-center lg:text-left">
  <h2 className="my-6 text-2xl flex gap-4 tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
    History <span className='border border-r-2 border-yellow-300'></span>
  </h2>


  

  
<p>

In India the Co-Operative Act was first created in 1904 and then passed again in the year 1912 as the Cooperative Act which led to the formation of the Central Co-Operative Banks and the States initiated the formation of various Co-Operative Banks. In year 1915 the first Zila Sahkari Bank was founded in Gola Gokarnnath, but this institution failed due to some reasons.

           On 05/09/1916 our district&apos;s great personality Honourable Late Ram Autar Pandey bonded the progressive farmers, eminent persons of our Districts by sense of Cooperativeness and with the help of many farmers and people to set up the bank.

           In the beginning the bank faced several financial problems, during which the bank received continued support of the city&apos;s public. Just as a small seed gradually assumes the form of a giant tree, in the same way the bank grew gradually day by day. In 1941, Bank completed its first Silver Jubilee (25 years) with flying colours. In coming years, the bank accepted the 1954-55 provincial supervision. In 1965, the new Co-Operative Act was passed after which the bank progressed continually. In 1976, Bank celebrated its Golden Jubilee and in 2001, celebrated its Diamond Jubilee. The phenomenal progress of the Bank from 1916 to 2015 is shown in the following brief table:-
</p>
</div>
</div>

<div className=" lg:w-1/3  w-full space-y-6">
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







