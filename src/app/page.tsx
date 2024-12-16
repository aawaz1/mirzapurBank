// "use client";

import { ActivitiesCard } from "@/components/ActivitesCard";
import CategoryList from "@/components/CategoryList";
import History from "@/components/History";
import { CardHoverEffectDemo } from "@/components/HoverCards";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useContext, useEffect } from "react";

const HomePage = async () => {

  // TEST (FETCHING ON THE CLIENT COMPONENT)

  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res)
  //   };

  //   getProducts();
  // }, [wixClient]);
  

  // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div className="relative">
      <Slider />
      <History/>
      <Testimonials/>
      <ActivitiesCard/>
      <CardHoverEffectDemo/>
    

     
    </div>
  );
};

export default HomePage;
