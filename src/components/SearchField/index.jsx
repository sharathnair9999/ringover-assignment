import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { handleChange } from "../../utils/handleChange";

const SearchField = ({ searchTerm: search, setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searched");
  };
  return (
    <div className="relative w-full flex justify-center items-start">
      <input
        value={search}
        onChange={(e) => handleChange(e, setSearch)}
        className=" w-full pl-8 border-[#DADCE0] rounded-xl px-2 py-1 outline-none border-2 "
        type="text"
        onSubmit={handleSubmit}
        placeholder="Search"
      />
      <span className="top-2.5 flex justify-center items-center absolute left-2">
        <AiOutlineSearch size={"1.2rem"} />
      </span>
    </div>
  );
};

export default SearchField;
