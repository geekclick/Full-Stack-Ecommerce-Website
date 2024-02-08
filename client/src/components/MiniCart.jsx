import { IoIosCloseCircle } from "react-icons/io";
import { BsBagX } from "react-icons/bs";
import minicart from "@/assets/minicart.png";
import Image from "./Image";
import { Link } from "react-router-dom";
function MiniCart() {
  return (
    <>
      <div className="flex justify-between items-start w-full">
        <h1 className="uppercase font-bold text-[18px]">review cart</h1>
        <BsBagX className=" scale-105 text-[#8D8A94]" />
      </div>
      <div className="flex gap-8 justify-between items-start w-full">
        <div>
          <Image src={minicart} alt="#" className="w-16 rounded-lg " />
        </div>
        <div className="">
          <h1 className="uppercase">Cloths</h1>
          <p className=" font-normal text-xs tracking-wide">
            1 X{" "}
            <span className="text-[#B88E2F] font-medium">Rs.250,000.00</span>
          </p>
        </div>
        <div>
          <IoIosCloseCircle className="text-[#8d8a94] scale-150 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between items-center w-full mt-36 relative bottom-0">
        <h1>Subtotal</h1>
        <p className="text-[#B88E2F] font-medium">Rs. 250,000.00</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <button className="border bg-transparent hover:text-white hover:bg-black transition-all duration-200 text-sm text-black border-black rounded-full px-4 py-1">
          View Cart
        </button>
        <Link to="/checkout">
          <button className="border bg-transparent hover:text-white hover:bg-black transition-all duration-200 text-sm text-black border-black rounded-full px-4 py-1">
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
}

export default MiniCart;
