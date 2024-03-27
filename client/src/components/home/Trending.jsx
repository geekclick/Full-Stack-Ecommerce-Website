import CardsLayout from "./CardsLayout";
import ProductCard from "./ProductCard";
function Trending({ productList }) {
  return (
    <CardsLayout tagline="For this Session" title="Trending & New">
      <div className="grid grid-cols-4 gap-8 p-20">
        {productList.map((item, i) => {
          if (i < 8) return <ProductCard key={i} {...item} />;
        })}
      </div>
    </CardsLayout>
  );
}

export default Trending;
