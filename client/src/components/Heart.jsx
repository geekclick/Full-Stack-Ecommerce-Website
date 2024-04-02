import { addToWhishlist, removeProduct } from "@/store/reducers/whishlistSlice";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";

function Heart(prodData) {
  const dispatch = useDispatch();
  const [fill, setFill] = useState(false);
  return (
    <div className="bg-white w-fit p-4 rounded-full cursor-pointer">
      {fill ? (
        <FaHeart
          className="text-xl text-rose-500 cursor-pointer"
          onClick={() => {
            setFill(false);
            dispatch(removeProduct(prodData.name));
          }}
        />
      ) : (
        <FaRegHeart
          className="text-xl cursor-pointer"
          onClick={() => {
            setFill(true);
            dispatch(addToWhishlist(prodData));
          }}
        />
      )}
    </div>
  );
}

export default Heart;
