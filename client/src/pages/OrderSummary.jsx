import Layout from "@/components/Layout";
import Hero from "@/components/payment/Hero";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "@/components/Image";
import prodImage from "@/assets/imgProduct.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const order = [
  {
    image: prodImage,
    name: "Tomato Fresh",
    price: "Rs. 250",
  },
  {
    image: prodImage,
    name: "Tomato Fresh",
    price: "Rs. 250",
  },
];

function OrderSummary() {
  return (
    <Layout hero={""}>
      <div className="h-fit w-[608px] bg-[#FFFDE9] py-6">
        <h1 className="font-semibold text-3xl mx-12">Review Your Order</h1>
        <p className="font-medium text-lg mx-14 mt-2">
          Estimated delivery : 22 May 2024
        </p>
        <div className="px-16 py-6">
          <div className="flex flex-col space-y-6 mb-6">
            {order.map((item, index) => {
              return (
                <div className="flex space-x-4">
                  <Image
                    src={item.image}
                    className="aspect-video w-[80px] h-[100px] rounded-lg"
                  />
                  <div className="flex flex-col justify-evenly">
                    <h1 className="font-semibold text-md">{item.name}</h1>
                    <p className="font-semibold text-md">{item.price}</p>
                  </div>
                </div>
              );
            })}
            <hr className="bg-black h-[1.3px]" />
            <div>
              <h1 className="font-semibold text-xl">Shipping Address</h1>
              <h2 className="font-medium text-lg">Rohan Govinda</h2>
              <p>195 A,budhwar Peth,Pune,Maharashtra-411002</p>
            </div>
            <hr className="bg-black h-[1.2px]" />
            <div>
              <h1 className="font-semibold text-xl">Payment method</h1>
              <p>Debit Card ( 3897 38XX 3897 3879 )</p>
            </div>
            <hr className="bg-black h-[1.2px]" />
          </div>
        </div>
      </div>
      <div className="h-fit w-[408px] bg-[#FFFDE9] px-8 py-10 flex flex-col space-y-10    ">
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-3xl">Subtotal</h1>
            <h1 className="font-semibold text-3xl">₹ 750</h1>
          </div>
          <div className="flex flex-col justify-between items-start">
            <Label>Enter Discount Code</Label>
            <div className="flex relative w-11/12 border border-black rounded-xl">
              <Input
                placeholder="kdE69fn"
                className="h-[40px] border-0 rounded-l-xl w-full outline-none "
              />
              <Button className="bg-black rounded-r-xl absoulte w-1/2">
                Apply
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-lg">Delivery Charges</h1>
            <p className="text-lg">₹ 120</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Grand Total</h1>
            <p className=" text-2xl font-bold">₹ 120</p>
          </div>
          <Dialog>
            <DialogTrigger>
              <Button
                // onClick={handleSubmit}
                className="block m-auto w-11/12 bg-black hover:bg-transparent hover:border border-black text-white rounded-lg hover:text-black h-12 text-lg"
              >
                Place Order
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white text-black text-center flex justify-center items-center flex-col p-14">
              <h1 className="font-bold text-2xl">Your order is confirmed</h1>
              <p className="">
                Thanks for shopping! your order hasn’t shipped yet, but we will
                send you and email when it done.
              </p>
              <Button
                // onClick={handleSubmit}
                className="block m-auto w-full bg-black hover:bg-transparent hover:border border-black text-white rounded-md hover:text-black h-12 text-md"
              >
                View Order
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
}

export default OrderSummary;
