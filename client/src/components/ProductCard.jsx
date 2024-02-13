import React from "react";
import { Button } from "@/components/ui/button";
import cardImage from "@/assets/imgProduct.png";
import Image from "./Image";
import { FiShoppingCart } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

// icons
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function ProductCard() {
  return (
    <Card className="w-fit relative">
      <div className="absolute top-5 left-5 bg-[#EAEAEA] rounded-full p-1.5 cursor-pointer">
        <CiHeart className="scale-105" />
      </div>
      <Image src={cardImage} alt="#" className="w-full p-3" />
      <CardContent>
        <CardTitle className="text-[17px] text-wrap w-[90%]">
          FOGG Marco body Spray -for Men (150 ml)
        </CardTitle>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between gap-1 items-center">
            <div className="flex gap-2">
              <p className="text-red-600 line-through text-xs">Rs 500</p>
              <p className="font-bold text-green-600 text-xs">50 % OFF</p>
            </div>
            <p className="text-sm">Rating: Average</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-[20px] font-semibold">Rs. 250</h1>
            <div className="flex">
              <FaStar className="scale-75" />
              <FaStar className="scale-75" />
              <FaStar className="scale-75" />
              <FaRegStar className="scale-75" />
              <FaRegStar className="scale-75" />
            </div>
          </div>
        </div>
        <Button className="w-full flex justify-evenly rounded-[12px] mt-2">
          <FiShoppingCart className="scale-150" />
          <p>Add</p>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
