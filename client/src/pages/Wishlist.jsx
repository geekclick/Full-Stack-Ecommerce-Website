import { Button } from "@/components/ui/button";
import Card from "@/components/wishlist/Card";

function Wishlist() {
  return (
    <section className="p-16 w-full flex flex-col">
      <div className="flex justify-between items-center w-full pb-16">
        <h1 className="text-4xl font-bold">My Wishlist</h1>
        <ul className="flex justify-center items-center gap-3">
          <li>
            <Button>Share</Button>
          </li>
          <li>
            <Button>Clear All</Button>
          </li>
          <li>
            <Button>Add All</Button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Wishlist;
