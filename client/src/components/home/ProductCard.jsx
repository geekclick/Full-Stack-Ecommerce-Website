import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import card1 from "@/assets/card1.png";
import { useState } from "react";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa6";
import Heart from "../Heart";

function ProductCard({ cardImg = card1 }) {
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
          <img src={cardImg} alt="" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-end pb-4 justify-around h-[63%] w-[83%] top-0 rounded-xl bg-black/60 absolute"
          >
            <Button className=" bg-pink-800 text-white rounded-full hover:outline">
              ADD TO CART
            </Button>

            <Heart />
          </motion.div>
        </div>
        <div className="bg-black w-[100px] mt-4 h-[1px]"></div>
        <p className="text-xs font-thin mt-2">DHOKRA METAL</p>
        <h1 className=" font-medium w-[250px]">
          Wood & Dhokra Craft Tealight Holders (Set of 2) - The Deer
        </h1>
        <p className="font-semibold mt-4">₹ 2400 INR</p>
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
