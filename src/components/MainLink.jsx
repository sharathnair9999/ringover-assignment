import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MainLink = ({
  icon,
  linkTitle,
  linkDescription = "(0/25 fields matched)",
  to,
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        if (isActive) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
        return `flex justify-center items-center h-10`;
      }}
    >
      <div
        className={`w-10 h-10 text-lg flex justify-center items-center px-1 ${
          isActive ? "gradient-purple text-white" : "bg-white text-purple"
        } rounded-xl border-purple border `}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-start items-start pl-2">
        <span
          className={`text-md font-semibold ${
            isActive ? "text-purple" : "text-black1"
          } `}
        >
          {linkTitle}
        </span>
        <span className="text-xs text-black1">{linkDescription}</span>
      </div>
    </NavLink>
  );
};

export default MainLink;
