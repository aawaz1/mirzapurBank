import { HoverEffect } from "../ui/card-hover-effect";
import homeLoanImage from '../../public/icon-9.png'
import personalLoanImage from '../../public/icon-3.png'
import vechileLoanImage from '../../public/icon-7.png'



export function CardHoverEffectDemo() {
  return (
    (<div className=" w-full px-12 py-2   container mx-auto bg-blue-600 ">
        <h2 className="text-center text-4xl mb-3 text-white font-semibold">Loan Request</h2>
        <p className="text-center font-medium text-xl text-black">Different Loans for different needs</p>
      <HoverEffect items={projects} />
    </div>)
  );
}
const projects = [
 
  {
    title: "Home Loan",
    image : homeLoanImage,
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Personal Loan",
    image : personalLoanImage,
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Vechile Loan",
    image : vechileLoanImage,
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
 
];
