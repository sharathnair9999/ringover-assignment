import React from "react";
import Logo2 from "./Logo2";
import MainLink from "./MainLink";
import { FaUsers } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { TbTool } from "react-icons/tb";

const NavLinks = () => {
  const links = [
    {
      icon: <FaUsers className="w-full" />,
      linkTitle: "Leads",
      to: "/",
    },
    {
      icon: <BiBuildings className="w-full" />,
      linkTitle: "Accounts and Contacts",
      to: "/accounts-contacts",
    },
    {
      icon: <TbTool className="w-full" />,
      linkTitle: "Custom Fields",
      to: "/customs",
    },
  ];
  return (
    <div className="top flex justify-between">
      <div className="left flex flex-col gap-1 text-sm justify-start items-start">
        <div className="flex justify-center items-center gap-2">
          <Logo2 />
          <span className="font-bold text-lg ">Match fields</span>
        </div>
        <span>
          Here you can match your Salesforce fields to our exisiting Cadence
          fields.
        </span>
      </div>
      <div className="right gap-16 flex justify-center items-center">
        {links.map(({ icon, linkTitle, to }) => (
          <MainLink to={to} icon={icon} linkTitle={linkTitle} key={linkTitle} />
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
