import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import card1 from "@/assets/card1.png";
import { useState } from "react";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa6";
import Heart from "../Heart";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/reducers/cartSlice";

function ProductCard(prodData) {
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);
  return (
    <Card className="relative bg-transparent border-0 outline-none shadow-xl">
      <CardContent className="relative">
        <div
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onClick={toggleHover}
        >
          <img src={card1} alt="" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-end pb-4 justify-around h-[63%] w-[83%] top-0 rounded-xl bg-black/60 absolute"
          >
            <Button
              className=" bg-pink-800 text-white rounded-full hover:outline"
              onClick={() => dispatch(addToCart(prodData))}
            >
              ADD TO CART
            </Button>

            <Heart />
          </motion.div>
        </div>
        <div className="bg-black w-[100px] mt-4 h-[1px]"></div>
        <p className="text-xs font-thin mt-2">{prodData.name}</p>
        <h1 className=" font-medium w-[250px]">{prodData.description}</h1>
        <p className="font-semibold mt-4">₹ {prodData.price} INR</p>
      </CardContent>
      {/* <div
        className="absolute top-0 left-0 w-full h-full"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      ></div> */}
    </Card>
  );
}

export default ProductCard;
