import ProductCard from "../ProductCard";
import Card from "../wishlist/Card";

function MyWishlist() {
  return (
    <div className="p-2">
      <div className="grid grid-cols-3 gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default MyWishlist;
