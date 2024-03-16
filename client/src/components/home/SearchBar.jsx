import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/input";
import { motion } from "framer-motion";

function SearchBar() {
  return (
    <motion.div
      onClick={() => setOpen(!open)}
      className="flex relative justify-center items-center"
      style={{ opacity: open ? 1 : 0 }} // Set initial opacity based on state
      animate={{ opacity: open ? 1 : 0 }} // Animate opacity based on state
      transition={{ duration: 0.5 }}
    >
      <Input placeholder="Search here" className="h-[35px]" />
      {/* <FaSearch className="absolute right-2 text-secondary" /> */}
    </motion.div>
  );
}

export default SearchBar;
