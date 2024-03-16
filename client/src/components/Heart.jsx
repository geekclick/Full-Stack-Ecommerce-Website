import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function Heart() {
  const [fill, setFill] = useState(false);
  return (
    <div
      className="bg-white w-fit p-4 rounded-full cursor-pointer"
      onClick={() => setFill(!fill)}
    >
      {fill ? (
        <FaHeart
          className="text-xl text-rose-500 cursor-pointer"
          onClick={() => setFill(false)}
        />
      ) : (
        <FaRegHeart
          className="text-xl cursor-pointer"
          onClick={() => setFill(true)}
        />
      )}
    </div>
  );
}

export default Heart;
