import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import avatarImage from "@/assets/avatar.png";
import { Button } from "../ui/button";
import { FaRegEdit } from "react-icons/fa";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { VscSettings } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import prodImg from "@/assets/imgProduct.png";
import Image from "../Image";

const productList = [
  {
    name: "Tomato",
    qty: 1,
    price: 250,
    status: "Delivered",
    prodImg: prodImg,
  },
  {
    name: "Tomato Fresh",
    qty: 1,
    price: 550,
    status: "In Process",
    prodImg: prodImg,
  },
  {
    name: "TOmoto",
    qty: 1,
    price: 250,
    status: "Delivered",
    prodImg: prodImg,
  },
  {
    name: "TOmmamamto",
    qty: 1,
    price: 550,
    status: "In Process",
    prodImg: prodImg,
  },
  {
    name: "TOmmamamto",
    qty: 1,
    price: 550,
    status: "In Process",
    prodImg: prodImg,
  },
  {
    name: "TOmmamamto",
    qty: 1,
    price: 550,
    status: "In Process",
    prodImg: prodImg,
  },
  {
    name: "TOmmamamto",
    qty: 1,
    price: 550,
    status: "In Process",
    prodImg: prodImg,
  },
  {
    name: "TOmmamamto",
    qty: 1,
    price: 550,
    status: "In Process",
    prodImg: prodImg,
  },
];

function MyOrder() {
  return (
    <div className="flex flex-col space-y-12 bg-transparent">
      <div className="w-full flex justify-end items-center gap-4">
        <div className="w-1/3 flex justify-center items-center relative">
          <Input
            className="pl-12 text-muted-foreground text-md"
            placeholder="Search"
          />
          <FiSearch className="absolute scale-150 left-4" />
        </div>
        <Button className="flex items-center justify-center gap-2 cursor-pointer bg-black text-white p-7 rounded-xl">
          Filter
          <VscSettings className="scale-150 rotate-90" />
        </Button>
      </div>
      <div>
        <div className="flex flex-col gap-8 w-full">
          {productList.map((item, index) => {
            return (
              <div className="grid grid-cols-5 w-full">
                <div className="flex space-x-6 col-span-3">
                  <Image
                    src={prodImg}
                    alt={"#"}
                    className={"aspect-square h-[72px]"}
                  />

                  <div className="flex flex-col justify-between items-start h-16">
                    <h1 className="font-bold">{item.name}</h1>
                    <p>Qty: {item.qty}</p>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-2xl">Rs. 250</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <Button className="p-6 bg-transparent text-black outline outline-2 border-0">
                    View Order
                  </Button>
                  {item.status == "In Process" ? (
                    <Button className="bg-[#FF7262] p-6 text-white">
                      Cancel Order
                    </Button>
                  ) : (
                    <Button className="p-6 hover:bg-transparent hover:text-black outline outline-2 border-0 bg-black text-white">
                      Write A Review
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
