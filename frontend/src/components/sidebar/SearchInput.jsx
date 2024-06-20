import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form action="" className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input bg-sky-500 text-black input-bordered rounded-full placeholder-white"
      />
      <button
        type="submit"
        className="btn btn-circle bg-darkOrange border border-none text-white hover:bg-lightOrange"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
