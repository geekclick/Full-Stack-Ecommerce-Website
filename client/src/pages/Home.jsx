import Callout from "@/components/home/Callout";
import Callout2 from "@/components/home/Callout2";
import CardsLayout from "@/components/home/CardsLayout";
import card2 from "@/assets/card2.png";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/home/ProductCard";
// import ProductSection from "@/components/home/Trending";
import Trending from "@/components/home/Trending";
import React, { useEffect } from "react";
import Contact from "@/components/home/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";

function home() {
  const productList = useSelector((state) => state.productSlice.productList);
  return (
    <main>
      <Navbar />
      <Hero />
      <Callout />
      <Trending productList={productList} />
      <Callout2 />
      <CardsLayout tagline="For Women" title="Choices forthe season">
        <div className="grid grid-cols-4 gap-8 p-20">
          {productList.map((prodData, i) => {
            if (i > 7) return <ProductCard key={i} {...prodData} />;
          })}
        </div>
      </CardsLayout>
      <Contact />
      <Footer />
    </main>
  );
}

export default home;
