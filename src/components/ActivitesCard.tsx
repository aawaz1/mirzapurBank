import { HoverEffect } from "../ui/card-hover-effect";
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";




import Link from "next/link";



export function ActivitiesCard() {
  return (
    (<div className=" w-full px-12 py-6  space-x-4  space-y-2 justify-center items-center     grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  
  container mx-auto bg-blue-300 ">
    <div className="bg-slate-200 p-2 rounded-md">
      
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
    
    <div className="bg-slate-200 p-2 rounded-md">
      <h2 className="p-2  text-2xl font-bold">Activities</h2>
      <div className="rounded-md">
      <button className="flex bg-white justify-start gap-4 border rounded-t-md border-b-0  border-black items-start p-2 hover:bg-blue-50 w-full">
        <FaCheck className="text-blue-400 mt-1"/>
        Financial
      </button>
      <button className="flex bg-white justify-start gap-4 border  border-b-0  border-black items-start p-2 hover:bg-blue-50 w-full">
        <FaCheck className="text-blue-400 mt-1"/>
       Press Release /Notice
      </button>
      <button className="flex bg-white justify-start gap-4 border  border-b-0  border-black items-start p-2 hover:bg-blue-50 w-full">
        <FaCheck className="text-blue-400 mt-1"/>
        Tendor
      </button>
    
      <button className="flex bg-white justify-start gap-4 border  border-b-0  border-black items-start p-2 hover:bg-blue-50 w-full">
        <FaCheck className="text-blue-400 mt-1"/>
        Public Circular
      </button>
      <button className="flex bg-white justify-start text-center gap-4 border  border-b-0  border-black items-start p-2 hover:bg-blue-50 w-full">
        <FaCheck className="text-blue-400 mt-1"/>
       Recruitment
      </button>
      
      <button className="flex  bg-white justify-start gap-4 border rounded-b-md border-black items-start p-2 hover:bg-blue-50 w-full">
        <FaCheck className="text-blue-400 mt-1"/>
        Forms
      </button>

      </div>
  
    </div>
    <div className="bg-white h-[300px]  rounded-md">
      <h2 className=" text-2xl py-2 text-center text-blue-600 rounded-t-md font-bold bg-slate-200">What&apos;s New !!</h2>
     
  
    </div>
  
       
    </div>)
  );
}
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
