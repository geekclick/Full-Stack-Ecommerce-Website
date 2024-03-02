import CardsLayout from "./CardsLayout";
import ProductCard from "./ProductCard";
function Trending() {
  return (
    <CardsLayout tagline="For this Session" title="Trending & New">
      <div className="grid grid-cols-4 gap-8 p-20">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </CardsLayout>
  );
}

export default Trending;
