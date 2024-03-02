import { Card, CardContent } from "@/components/ui/card";

import card1 from "@/assets/card1.png";

function ProductCard({ cardImg = card1 }) {
  return (
    <Card className="bg-transparent border-0 outline-none shadow-xl">
      <CardContent>
        <img src={cardImg} alt="" />
        <div className="bg-black w-[100px] mt-4 h-[1px]"></div>
        <p className="text-xs font-thin mt-2">DHOKRA METAL</p>
        <h1 className=" font-medium w-[250px]">
          Wood & Dhokra Craft Tealight Holders (Set of 2) - The Deer
        </h1>
        <p className="font-semibold mt-4">₹ 2400 INR</p>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
