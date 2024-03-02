import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import slide1 from "@/assets/slide1.png";
function Hero() {
  return (
    <section className="flex w-full pt-12">
      <div className="relative flex-1 w-full">
        <div className="bg-heroImg w-full h-screen bg-auto bg-center absolute"></div>
        <div className="bg-[#88A52A] w-full h-screen bg-opacity-50 absolute"></div>
        <div className="absolute text-white w-full h-screen justify-center items-center flex flex-col space-y-6">
          <h1 className="text-7xl font-semibold w-[500px]">
            Embrace the spirit of India
          </h1>
          <p className="text-sm w-[500px] leading-5 font-semibold">
            An unparalleled legacy that spans millennia. Pure, authentic craft
            sourced from artisans across the Indian sub-continent. Our vast
            collection of over 80 different craft forms celebrates a heritage of
            some of the world&apos;s oldest handicrafts.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-[#88A52A] h-screen w-full">
          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    src={slide1}
                    alt="#"
                    className="h-[600px] mt-12 m-auto"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={slide1}
                    alt="#"
                    className="h-[600px] mt-12 m-auto"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={slide1}
                    alt="#"
                    className="h-[600px] mt-12 m-auto"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={slide1}
                    alt="#"
                    className="h-[600px] mt-12 m-auto"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={slide1}
                    alt="#"
                    className="h-[600px] mt-12 m-auto"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
