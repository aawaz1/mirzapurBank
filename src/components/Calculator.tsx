import React from 'react';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';

const Calculator = () => {
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
  return (
    <div className='bg-blue-950 p-3  flex flex-col justify-center gap-9 py-8 rounded-xl px-4 md:px-12 '>
       <div>
        <h2 className='text-2xl font-poppins text-yellow-300'>
                      Calculator
                      </h2>
                      <div className='border-t-2 border-yellow-500'></div>
                      </div>
      {
            projects.map((item:any , idx:any) => {
                return (
                  <Link key={idx} href={item.link} className=''>
                   <button className="flex rounded-full bg-gradient-to-r from-blue-500 to-violet-500 group hover:from-violet-500 hover:to-yellow-500 w-full gap-4 p-2 py-4 justify-center items-center">


                        <span className="text-4xl text-white">{item.image}</span>
                        <span className="md:text-xl  text-sm text-white">{item.title}</span>

           
                    </button>
                  </Link>
                 
                )
            })
      }

    </div>
  )
}

export default Calculator