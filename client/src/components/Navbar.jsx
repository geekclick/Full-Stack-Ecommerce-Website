import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { LuSearch, LuHeart, LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import MiniCart from "./MiniCart";
import ProfilePhoto from "./ProfilePhoto";
import SearchBar from "./home/SearchBar";
import { Input } from "./ui/input";

function Navbar() {
  const whishlist = useSelector((state) => state.whishlistSlice.whishlist);
  const cart = useSelector((state) => state.cartSlice.cart);
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
  return (
    <nav className="fixed z-50 flex justify-between items-center p-4 w-full h-[52px] bg-[hsl(78,80%,88%)]">
      <div className="flex space-x-4 items-center h-full">
        <h1 className="font-bold text-2xl">
          <Link to={"/"}>ABCXYZ</Link>
        </h1>
        <ul className="flex space-x-4 font-normal">
          <li className="">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="">
            <Link to={"/shop"}>Shop</Link>
          </li>
          {/* <li className="">Our Story</li>
          <li className="">Wholesale</li>
          <li className="">Contact</li>
          <li className="">Offers</li> */}
        </ul>
      </div>
      <div className="flex space-x-3 justify-between items-center">
        <ul className="flex space-x-3 text-xl cursor-pointer justify-center items-center">
          <li>{/* <SearchBar /> */}</li>
          <li>
            <div className="flex justify-center items-center">
              <Input placeholder="Search here" className="h-1/2" />
              <Button className="bg-transparent w-fit text-xl">
                <LuSearch />
              </Button>
            </div>
          </li>
          <li className="relative">
            <Link to={"/wishlist"}>
              <LuHeart />
              <Badge className="absolute -top-2 -right-1 w-3 h-3 p-1 m-auto aspect-square bg-secondary text-white text-[8px]">
                {whishlist.length || 0}
              </Badge>
            </Link>
          </li>
          <li className="relative">
            <Popover>
              <PopoverTrigger>
                <>
                  <LuShoppingCart />
                  <Badge className="absolute -top-1 -right-1 w-3 h-3 p-1 m-auto aspect-square bg-secondary text-white text-[8px]">
                    {cart.length || 0}
                  </Badge>
                </>
              </PopoverTrigger>
              <PopoverContent className="bg-[#FAFCDB] flex flex-col gap-12 h-fit items-start">
                <MiniCart />
              </PopoverContent>
            </Popover>
          </li>
          <li>
            {isLoggedIn ? (
              <ProfilePhoto />
            ) : (
              <Link to={"/login"}>
                <Button className="h-1/5">Login</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
