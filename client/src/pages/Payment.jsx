import Layout from "@/components/Layout";
import Hero from "@/components/payment/Hero";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function Payment() {
  return (
    <Layout hero={<Hero />}>
      <div className="h-fit w-[608px] bg-[#FFFDE9] py-6">
        <h1 className="font-semibold text-3xl mx-12">
          Select a payment method
        </h1>
        <div className="px-16 py-10">
          <form
            action="/payment"
            method="get"
            className="flex flex-col space-y-9"
          >
            <RadioGroup defaultValue="Debit/Credit Card">
              <div className="flex items-center space-x-2 font-semibold text-xl">
                <RadioGroupItem
                  value="Debit/Credit Card"
                  id="Debit/Credit Card"
                  className="border border-black"
                />
                <Label htmlFor="Debit/Credit Card">Debit/Credit Card</Label>
              </div>
              <div className="flex flex-col space-y-4">
                <div>
                  <Label>Card Number</Label>
                  <Input placeholder="3827 38XX 3827 3827" />
                </div>
                <div>
                  <Label>Card Name</Label>
                  <Input placeholder="John Mical" />
                </div>
                <div className="flex justify-between w-full space-x-4">
                  <div className="flex-1">
                    <Label>Expiry Date</Label>
                    <Input placeholder="09/2025" />
                  </div>
                  <div className="flex-1">
                    <Label>CVV</Label>
                    <Input placeholder="***" />
                  </div>
                </div>
                <Button className="w-full">Add Card</Button>
              </div>
              <hr className="bg-black h-[2px]" />
              <div className="flex items-center space-x-2 font-semibold text-xl">
                <RadioGroupItem
                  value="Google Pay"
                  id="Google Pay"
                  className="border border-black"
                />
                <Label htmlFor="Google Pay">Google Pay</Label>
              </div>
              <hr className="bg-black h-[2px]" />
              <div className="flex items-center space-x-2 font-semibold text-xl">
                <RadioGroupItem
                  value="Paypal"
                  id="Paypal"
                  className="border border-black"
                />
                <Label htmlFor="Paypal">Paypal</Label>
              </div>
              <hr className="bg-black h-[2px]" />
              <div className="flex items-center space-x-2 font-semibold text-xl">
                <RadioGroupItem
                  value="Cash on Delivery"
                  id="Cash on Delivery"
                  className="border border-black"
                />
                <Label htmlFor="Cash on Delivery">Cash on Delivery</Label>
              </div>
            </RadioGroup>
            <Button className="w-full">Continue</Button>
          </form>
        </div>
      </div>
      <div className="h-fit w-[408px] bg-[#FFFDE9] px-8 py-10 flex flex-col space-y-10    ">
        <div className="flex flex-col space-y-4 w-full">
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
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
