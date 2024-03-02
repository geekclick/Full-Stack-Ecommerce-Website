import callout1 from "@/assets/callout1.png";
import callout2 from "@/assets/callout2.png";
function Callout() {
  return (
    <section>
      <div className="flex justify-end">
        <div className="relative flex justify-center items-center">
          <div className="flex justify-center items-center flex-col space-y-10 absolute m-auto w-1/2">
            <h2 className="text-xl text-center ">Our Mission</h2>
            <h1 className=" text-7xl text-center">
              Every purchase has a purpose
            </h1>
            <p className="text-sm leading-6 text-center">
              We have direct partnerships with over 320 Indian artisans and over
              2000 indirectly. As a social enterprise that seeks to offer a
              fair-trade platform, our primary purpose is to support handicraft
              workers. With each purchase you make, you can help make a
              difference.
            </p>
          </div>
          <img src={callout1} alt="" />
        </div>
        <div className="bg-callout2 flex-1"></div>
      </div>
    </section>
  );
}

export default Callout;
