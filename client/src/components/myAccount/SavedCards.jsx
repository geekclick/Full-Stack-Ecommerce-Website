import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

function SavedCards() {
  return (
    <div className="h-screen">
      <Button className="w-1/3 bg-black text-white hover:text-black">
        <FaPlus className="scale-150 mx-3" /> Add New Card
      </Button>
      <div className="flex flex-col gap-6 my-12">
        <div className="flex justify-between border-b p-3">
          <div className="flex gap-3 justify-start items-center">
            <div className="w-20 h-16 border border-black"></div>
            <div className="flex justify-between flex-col gap-2">
              <h1 className="font-bold">Master Card</h1>
              <p className="text-xs">3289 3289 3289 3289</p>
            </div>
          </div>
          <Button className="bg-[#FFF1EF] text-[#FF7262] h-fit hover:border-black">
            <MdDeleteOutline className="scale-150 mx-2" />
            Delete
          </Button>
        </div>
        <div className="flex justify-between border-b p-3">
          <div className="flex gap-3 justify-start items-center">
            <div className="w-20 h-16 border border-black"></div>
            <div className="flex justify-between flex-col gap-2">
              <h1 className="font-bold">VISA Card</h1>
              <p className="text-xs">3289 3289 3289 3289</p>
            </div>
          </div>
          <Button className="bg-[#FFF1EF] text-[#FF7262] h-fit hover:border-black">
            <MdDeleteOutline className="scale-150 mx-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SavedCards;
