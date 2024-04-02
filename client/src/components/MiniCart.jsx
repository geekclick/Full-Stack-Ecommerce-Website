import { IoIosCloseCircle } from "react-icons/io";
import { BsBagX } from "react-icons/bs";
import minicart from "@/assets/minicart.png";
import Image from "./Image";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "@/store/reducers/cartSlice";
function MiniCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  return (
    <>
      <div className="flex justify-between items-start w-full">
        <h1 className="uppercase font-bold text-[18px]">review cart</h1>
        <BsBagX className=" scale-105 text-[#8D8A94]" />
      </div>
      {cart.length <= 0 && (
        <h1 className="font-semibold m-auto text-xl">Your cart is empty!</h1>
      )}
      <div
        className={`flex flex-col justify-start items-center space-y-10 overflow-scroll overflow-x-hidden h-[200px] ${
          cart.length <= 0 ? "hidden" : ""
        }`}
      >
        {cart.map((item, i) => {
          return (
            <div
              key={i}
              className="flex gap-8 justify-between items-start w-full"
            >
              <div>
                <Image src={minicart} alt="#" className="w-16 rounded-lg " />
              </div>
              <div className="">
                <h1 className="uppercase">{item.name}</h1>
                <p className=" font-normal text-xs tracking-wide">
                  1 X{" "}
                  <span className="text-[#B88E2F] font-medium">
                    Rs.250,000.00
                  </span>
                </p>
              </div>
              <div onClick={() => dispatch(removeProduct(item.name))}>
                <IoIosCloseCircle className="text-[#8d8a94] scale-150 cursor-pointer" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center w-full relative bottom-0">
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
