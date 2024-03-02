import { Button } from "../ui/button";

function CardsLayout(props) {
  return (
    <section className="bg-[#FAFCDB] p-20 flex flex-col">
      <div className="flex justify-between w-full items-center">
        <div className="flex justify-center flex-col">
          <p className="text-lg">{props.tagline}</p>
          <h1 className="text-6xl">{props.title}</h1>
        </div>
        <Button
          variant="outline"
          className="text-xl rounded-none border-black p-6 hover:bg-primary"
        >
          See All
        </Button>
      </div>
      {props.children}
    </section>
  );
}

export default CardsLayout;
