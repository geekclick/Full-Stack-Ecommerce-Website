import Breadcrumb from "../Breadcrumb";

function Hero() {
  return (
    <div>
      <div className="w-full h-[379px] bg-heroBG bg-cover flex flex-col space-y-6 items-center justify-center">
        <h1 className="font-semibold text-3xl">Checkout</h1>
        <div className="p-6">
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
}

export default Hero;
