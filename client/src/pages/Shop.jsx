import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Shop/Filters";
import Header from "@/components/Shop/Header";

function Shop() {
  return (
    <>
      <Navbar />
      <section className="p-12">
        <Header />
        <div className="flex">
          <Filters />
          <div className="grid grid-cols-4 gap-8 px-20 py-12">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className=" space-y-4">
          <h1 className="text-2xl font-semibold">Other Trending Products</h1>
          <div className="flex space-x-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
