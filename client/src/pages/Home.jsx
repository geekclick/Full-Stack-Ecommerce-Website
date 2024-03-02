import Callout from "@/components/home/Callout";
import Callout2 from "@/components/home/Callout2";
import CardsLayout from "@/components/home/CardsLayout";
import card2 from "@/assets/card2.png";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/home/ProductCard";
import ProductSection from "@/components/home/Trending";
import Trending from "@/components/home/Trending";
import React from "react";
import Contact from "@/components/home/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Callout />
      <Trending />
      <Callout2 />
      <CardsLayout tagline="For Women" title="Choices forthe season">
        <div className="grid grid-cols-4 gap-8 p-20">
          <ProductCard cardImg={card2} />
          <ProductCard cardImg={card2} />
          <ProductCard cardImg={card2} />
          <ProductCard cardImg={card2} />
          <ProductCard cardImg={card2} />
          <ProductCard cardImg={card2} />
          <ProductCard cardImg={card2} />
          <ProductCard cardImg={card2} />
        </div>
      </CardsLayout>
      <Contact />
      <Footer />
    </main>
  );
}

export default home;
