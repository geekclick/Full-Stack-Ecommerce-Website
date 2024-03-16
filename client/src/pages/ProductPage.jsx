import ProductInfo from "@/components/ProductPage/ProductInfo";
import ProductSlide from "@/components/ProductPage/ProductSlide";
import ProductDesc from "./ProductDesc";
import ProductCard from "@/components/ProductPage/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <>
      <Navbar />
      <section className="py-12">
        <div className="text-xs p-6 px-16 bg-[#FAFCDB]">
          <ul className="flex justify-start items-center space-x-4">
            <li className="hover:underline cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <FaChevronRight />
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="hover:underline cursor-pointer">|</li>
            <li className="hover:underline cursor-pointer">POTTERY</li>
          </ul>
        </div>
        <div className="flex justify-center space-x-20 items-center w-full">
          <ProductSlide />
          <ProductInfo />
        </div>
        <ProductDesc />
        <div className="grid grid-cols-3 gap-12 px-12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <h1 className="text-center m-8 font-bold underline">View More</h1>
      </section>
      <Footer />
    </>
  );
}

export default ProductPage;
