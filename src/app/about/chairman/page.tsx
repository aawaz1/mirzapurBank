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
       
       <div className='mt-16 w-full'> <BreadCrumb name='About Us'  title="Chairman"/></div>
 
       </div>
        <main className="mt-10 flex flex-col md:flex-row justify-between items-start gap-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
        <div className='lg:w-2/3 w-full bg-zinc-50 p-2'>
        <div className="sm:text-center lg:text-left">
  <h2 className="my-6 text-2xl flex gap-4 tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
    Chairman&apos;s Message <span className='border border-r-2 border-yellow-300'></span>
  </h2>
  <div className='flex justify-center items-center'>  <Image src={chairmanImg} alt=""/></div>
  <div className='flex justify-center items-center'>
    <h2 className='text-center'>    Dr. Jagdish Singh Patel

(Chairman)</h2>
  </div>
  

  
<h2 className='font-bold'>Dear Friends</h2>
<p>
In the country&apos;s agricultural development Co-Operative plays a very important role. Co-Operatives played an important role in the Country&apos;s social and economic upliftment. Today, 68% of the country&apos;s population lives in rural India. It is accepted by all that for the agricultural credit co-operative credit institutions are best. Our agricultural credit system is threefold. On top level UP Cooperative Bank, at the district level District Co-operative Banks and Justice Panchayat,are fulfilling the short and medieval agricultural credit co-operative societies needs.

Even in this era of globalization, the world&apos;s developed countries are also facing financial challenges and continued volatility. Governments of many countries are cutting their expenditure in the social and public areas and are going back on their responsibilities which is leading to insecurity among citizens of those countries. In this environment of uncertainty, the Co-Operative societies can bring hope and provide clear direction for the citizens of the world. Co-Operative Societies provides long-term protection. This is long-lasting, sustainable and successful. Zila Sahkari Bank Ltd. Mirzapur is the live example in front of everyone, from its day of inception the Bank has always been in profit. 

Zila Sahkari Bank Ltd. Mirzapur active contribution towards the healthy and active financial upliftment of landless farmers, rural artisans, small marginal farmers and raise the living standards of the weak class of impoverished people has been most important.

Through current technology-based banking services around co-operative banks is successfull in meeting the challenges posed before the bank by its customers, throughout all of the banks branches we are able to provide technology-based banking operations. Our goal is the implementation of advanced services based on computerization, it should be the primary service in co-operative agricultural credit societies and it also has been undertaken. Our goal for this year is that in cooperation with the National Bank for Agriculture and Rural Development Bank 148 Co-Operative Societies are funded out of which 25 will be fully computerized and 20 thousand members of those societies should be provided with Rupay Kisan Credit Card. Through which our farmers will be able to withdraw money from any ATM. This web portal is provided by the bank to its customers, and it has all the inclusion of information for the customers. We hope that this portal will help through an indirect dialogue between the bank and its customers............<span className='font-bold'>Thanking You.</span>
</p>
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







