import { FaStar } from "react-icons/fa6";
import { Button } from "../ui/button";

function ProductInfo() {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="w-1/3 h-full flex flex-col justify-center items-start space-y-5 py-10">
      <div className=" space-y-1">
        <h1 className="text-3xl">POTTERY</h1>
        <p className="text-muted-foreground text-lg">Rs. 250,000.00</p>
        <p className="flex text-xs justify-start items-center">
          <div className="flex">
            {stars.map(() => {
              return <FaStar className=" mx-px text-yellow-500" />;
            })}
          </div>
          | 5 Customer Review
        </p>
        <p className="text-xs">
          India is a land known for its rich cultural heritage and artistic
          traditions. From ancient times, Indian artisans have been creating
          exquisite handicrafts that showcase their craftsmanship, creativity,
          and deep-rooted traditions.
        </p>
      </div>
      <div>
        <p className="text-xs my-2">Size</p>
        <div className="flex justify-start items-center space-x-2">
          <div className="w-6 h-6 text-center bg-[#FBEBB5] rounded-md text-xs justify-center flex items-center">
            L
          </div>
          <div className="w-6 h-6 text-center bg-[#FAF4F4] rounded-md text-xs justify-center flex items-center">
            XL
          </div>
          <div className="w-6 h-6 text-center bg-[#FAF4F4] rounded-md text-xs justify-center flex items-center">
            XS
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs my-2">Color</p>
        <div className="flex justify-start space-x-2 items-center">
          <div className="w-4 h-4 rounded-full bg-[#816DFA]"></div>
          <div className="w-4 h-4 rounded-full bg-[#000000]"></div>
          <div className="w-4 h-4 rounded-full bg-[#CDBA7B]"></div>
        </div>
      </div>
      <div className="flex justify-start space-x-10 items-center my-3">
        <Button className="bg-white border border-black flex items-center justify-between w-[80px]">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </Button>
        <Button className="bg-primary border border-black">Add to cart</Button>
      </div>
      <div className="w-full h-px bg-[#D9D9D9]"></div>
      <div className="text-[10px] w-full">
        <p className="flex justify-start items-center space-x-4 w-[60%]">
          <span>SKU</span> <span>: SS001</span>
        </p>
        <p className="flex justify-start items-center space-x-4 w-[60%]">
          <span>Category</span> <span>: HAND MADE</span>
        </p>
        <p className="flex justify-start items-center space-x-4 w-[60%]">
          <span>Tags</span> <span>: HAND MADE, POTTERY, Home, Shop</span>
        </p>
        <p className="flex justify-start items-center space-x-4 w-[60%]">
          <span>Share</span> <span>: fcb</span>
        </p>
        <p className="flex justify-start items-center space-x-4 w-[60%]">
          <span>SKU</span> <span>SS001</span>
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;
