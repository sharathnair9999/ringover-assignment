import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
const Options = () => {
  const options = [
    {
      name: "Options",
      icon: <AiFillCaretDown />,
      onRight: true,
    },
    {
      name: "Custom",
      icon: <IoIosAddCircle />,
      onRight: false,
    },
    {
      name: "Add Note",
      onRight: false,
      icon: <BiEdit />,
    },
  ];
  return (
    <div className="flex w-full justify-center gap-4 pt-2">
      {options.map(({ name, icon, onRight }) => (
        <div
          key={name}
          className={`flex cursor-pointer ${
            onRight && "flex-row-reverse"
          } justify-center items-center gap-1 text-xs bg-gray1 px-2 py-1 rounded-xl shadow-sm shadow-slate-400`}
        >
          {icon}
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default Options;
