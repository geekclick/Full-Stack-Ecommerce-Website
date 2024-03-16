import img1 from "@/assets/slide2.png";
import prod1 from "@/assets/prod1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
function ProductSlide() {
  return (
    <div className="flex justify-center items-center space-x-10">
      <Carousel orientation="vertical | horizontal">
        <CarouselContent className="flex flex-col space-y-6">
          <CarouselItem>
            <img src={img1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img1} alt="" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <img src={prod1} alt="" />
    </div>
  );
}

export default ProductSlide;
