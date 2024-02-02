import React from "react";
import { Button } from "@/components/ui/button";
import cardImage from "@/assets/imgProduct.png";
import Image from "./Image";
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

function ProductCard() {
  return (
    <Card className="w-fit">
      <Image src={cardImage} alt="#" className="w-full p-3" />
      <CardContent>
        <CardTitle className="text-[20px] text-wrap w-[90%]">
          FOGG Marco body Spray -for Men (150 ml)
        </CardTitle>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <p className="text-red-600 line-through">Rs 500</p>
              <p className="font-bold text-green-600">50 % OFF</p>
            </div>
            <p>Rating: Average</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-[24px]">Rs. 250</h1>
            <div className="flex gap-3">
              <FaStar className="scale-150" />
              <FaStar className="scale-150" />
              <FaStar className="scale-150" />
              <FaRegStar className="scale-150" />
              <FaRegStar className="scale-150" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full rounded-[12px]">
          <p>Add</p>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
