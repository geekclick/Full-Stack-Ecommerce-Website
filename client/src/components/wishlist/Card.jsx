import { removeProduct } from "@/store/reducers/whishlistSlice";
import Image from "../Image";
import { AspectRatio } from "../ui/aspect-ratio";
import cardImage from "@/assets/imgProduct.png";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

function Card(item) {
  const dispatch = useDispatch();
  console.log(item);
  return (
    <div className="flex w-[90%] justify-center bg-[#FBFFD1]">
      <div className="flex justify-evenly flex-1 items-center">
        <Image src={cardImage} alt="#" className="w-[100px] rounded-xl" />
        <h1 className="font-bold text-xl">{item.name}</h1>
      </div>
      <div className="flex flex-1 items-center justify-evenly">
        <h1 className="font-bold text-">₹ {item.price}</h1>
        <IoClose
          className="font-bold text-3xl cursor-pointer"
          onClick={() => dispatch(removeProduct(item.name))}
        />
      </div>
    </div>
  );
}

export default Card;
