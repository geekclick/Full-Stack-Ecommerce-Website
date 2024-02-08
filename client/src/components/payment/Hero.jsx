import React from "react";
import Breadcrumb from "../Breadcrumb";
import Image from "../Image";

import paymentP1 from "@/assets/paymentP1.png";
import paymentP2 from "@/assets/paymentP2.png";

function Hero() {
  return (
    <div>
      <div className="w-full h-fit bg-heroBG bg-cover flex flex-col space-y-6 items-center justify-center">
        <Image src={paymentP1} className="w-[150px]" />
        <h1 className="font-semibold text-3xl">Payment Method</h1>
        <Image src={paymentP2} className="w-[150px]" />
        <div className="p-6">
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
}

export default Hero;
