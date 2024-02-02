import Image from "../Image";
import { AspectRatio } from "../ui/aspect-ratio";
import cardImage from "@/assets/imgProduct.png";
import { IoClose } from "react-icons/io5";

function Card() {
  return (
    <div className="flex w-[90%] justify-center bg-[#FBFFD1]">
      <div className="flex justify-evenly flex-1 items-center">
        <Image src={cardImage} alt="#" className="w-[100px] rounded-xl" />
        <h1 className="font-bold text-xl">Tomato Fresh</h1>
      </div>
      <div className="flex flex-1 items-center justify-evenly">
        <h1 className="font-bold text-">₹ 250</h1>
        <IoClose className="font-bold text-3xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Card;
