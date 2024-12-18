// import Image from "next/image";
// import Link from "next/link";
// import logo from '../../public/logo.png';
// import { IoLocationSharp } from "react-icons/io5";
// import { MdOutlineDialerSip } from "react-icons/md";
// import { BiSolidMessageDetail } from "react-icons/bi";



// const Footer = () => {
//   return (
//     <div className="py-12 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-yellow-500 text-sm">
//       {/* TOP */}
//       <div className="bg-black p-2 py-8 mb-4 rounded-md  flex gap-2 flex-col md:flex-row justify-center items-center">
//         <button className="rounded-md py-3 hover:bg-yellow-600 px-4 text-white bg-gray-700 p-2">DCB Web Mail</button>
//         <button className="rounded-md py-3 hover:bg-yellow-600 px-4 text-white bg-gray-700 p-2">Circular Login</button>
//         <button className="rounded-md py-3 hover:bg-yellow-600 px-4 text-white bg-gray-700 p-2">Admin Login</button>

//       </div>
//       <div className="flex flex-col mt-10 md:flex-row justify-between gap-24">
//         {/* LEFT */}
//         <div className="w-full md:w-1/2 justify-center items-center lg:w-1/3  flex flex-col gap-6">
        
     
//          <Image src={logo} alt="" width={200} height={200}/>
//          <h2 className="text-white">IFSC Code : ICIC0MIR</h2>
//          <h2 className="text-white">RBI License : ICIC0MIR</h2>
//           <div className="flex gap-6">
//             <Image src="/facebook.png" alt="" width={16} height={16} />
//             <Image src="/instagram.png" alt="" width={16} height={16} />
//             <Image src="/youtube.png" alt="" width={16} height={16} />
//             <Image src="/pinterest.png" alt="" width={16} height={16} />
//             <Image src="/x.png" alt="" width={16} height={16} />
//           </div>
//         </div>
//         {/* CENTER */}
//         <div className="hidden lg:flex justify-between w-1/3">
//           <div className="flex flex-col justify-start gap-4">
//             <h1 className="font-medium text-lg text-white">Activities</h1>
//             <div className="flex flex-col gap-6">
//               <Link href=""   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2">Finacial</Link>
//               <Link href=""   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2">Press Release/ Notice</Link>
//               <Link href="" 
//   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2"              >Tendor</Link>
//               <Link href=""   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2">Public Circular</Link>
//               <Link href=""  className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2">Recuritment</Link>
//               <Link href=""   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2">Forms</Link>
              
//             </div>
//           </div>
//           <div className="flex flex-col justify-start gap-4">
//             <h1 className="font-medium text-white text-lg ">Quick Links</h1>
//             <div className="flex flex-col gap-6">
//             <Link
//   href=""
//   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2"
// >
//   Privacy Policy
// </Link>
// <Link
//   href=""
//   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2"
// >
//   Links
// </Link>
// <Link
//   href=""
//   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2"
// >
//   Holidays
// </Link>


          
              
//             </div>
//             <h1 className="font-medium text-lg text-white">Customer Care</h1>
//             <div className="flex flex-col gap-6">
//               <Link href=""   className="text-sm hover:text-blue-500 text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:translate-x-2">+91-7534003708</Link>
            
          
              
//             </div>
//           </div>
        
         
//         </div>
//         {/* RIGHT */}
//         <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
//           <h1 className="font-medium text-lg text-white">Get In Touch</h1>
//           <p className="flex gap-4  justify-start items-start">
//             <IoLocationSharp className="text-lg text-gray-400"/>
//             <span className="text-gray-400"> Zila Sahkari Bank Ltd. Mirzapur</span>
//           </p>
//           <p className="flex gap-4  justify-start items-start">
//             <MdOutlineDialerSip className="text-lg text-gray-400"/>
//             <span className="text-blue-600">+91-7534003708</span>
//           </p>
//           <p className="flex gap-4  justify-start items-start">
//             <BiSolidMessageDetail className="text-lg text-gray-400"/>
//             <span className="text-blue-600"> info@dcbmirzapur.com</span>
//           </p>
       
        
//         </div>
//       </div>
//       {/* BOTTOM */}
//       <div className="flex py-6 rounded-md   bg-gray-400 flex-col md:flex-row items-center justify-center gap-8 mt-10">
//         <h2 className="text-center">Copyright@2023 - All Rights Reserved - ZILA SAHKARI BANK LTD. MIRZAPUR</h2>
      
     
//       </div>
//     </div>
//   );
// };

// export default Footer;
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-blue-400 text-sm ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <span className="font-semibold">hello@lama.dev</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex gap-2 rounded-full">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 rounded-full"
            />
            <button className="w-1/4 bg-blue-950 text-white rounded-full">Send</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Lama Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
