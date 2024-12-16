import BreadCrumb from '@/components/BreadCrumb';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
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
       
       <div className='mt-16 w-full'> <BreadCrumb name='Our Products' title="Current Deposits"/></div>
 
       </div>
       <main className="mt-10 flex flex-col md:flex-row justify-between gap-4 items-start mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
            <div className='lg:w-2/3 bg-zinc-50 p-2'>
<div className="sm:text-center lg:text-left">
  <h2 className="my-6 text-2xl flex gap-4 tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
    Current Deposits <span className='border border-r-2 border-yellow-300'></span>
  </h2>
  <div className='flex justify-center items-center'>  <Image src={""} alt=""/></div>

  

  <div className="p-6">
      {/* Title Section */}
      <h1 className="text-2xl font-bold mb-4">
        DCB Mirzapur Regular Currents Account
      </h1>
      {/* Description Section */}
      <p className="text-md text-gray-600 mb-4">
      Current Accounts are active accounts opened by such section of the public like Traders, Businessmen, Corporate Bodies, etc. who like to operate their accounts continuously due to many receipts and payments of money in connection with their business. In these accounts, there is no restriction on the number of withdrawals and deposits      </p>
      
      {/* Types of Accounts Section */}
      <h2 className="text-lg font-semibold mt-6 mb-2">TYPES OF ACCOUNTS</h2>
      <p className="text-md text-gray-600 mb-2">
        Currents Bank Accounts may be opened in the names of:
      </p>
      {/* List Section */}
      <ol className="list-decimal list-inside text-gray-700">
        <li>Individual - Single Accounts</li>
        <li>Two or more individuals - Joint Accounts</li>
        <li>Illiterate persons</li>
        <li>Blind persons</li>
        <li>Minors</li>
        <li>Associations, Clubs, Societies</li>
        <li>Trusts</li>
        <li>Institutions/Agencies specially permitted by the RBI</li>
      </ol>
    </div>

</div>
</div>

<div className=" lg:w-1/3 w-full space-y-6">
<div className='lg:full'>


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