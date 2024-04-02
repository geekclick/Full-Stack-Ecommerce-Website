import { Button } from "@/components/ui/button";
import Card from "@/components/wishlist/Card";
import { clearAll } from "@/store/reducers/whishlistSlice";
import { useDispatch, useSelector } from "react-redux";
function Wishlist() {
  const dispatch = useDispatch();
  const whishlist = useSelector((state) => state.whishlistSlice.whishlist);
  return (
    <section className="p-16 w-full flex flex-col">
      <div className="flex justify-between items-center w-full pb-16">
        <h1 className="text-4xl font-bold">My Wishlist</h1>
        <ul className="flex justify-center items-center gap-3">
          <li>
            <Button>Share</Button>
          </li>
          <li>
            <Button onClick={() => dispatch(clearAll())}>Clear All</Button>
          </li>
          <li>{/* <Button>Add All</Button> */}</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {whishlist.length <= 0 && (
          <h1 className=" m-auto text-center text-4xl mt-10">
            Your whishlist is empty
          </h1>
        )}
        {whishlist.map((item, i) => {
          return <Card {...item} />;
        })}
      </div>
    </section>
  );
}

export default Wishlist;
