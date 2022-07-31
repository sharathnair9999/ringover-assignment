import React from "react";
import dummyImage from "../../assets/dummy.jpg";
import Options from "./Options";
import { SiSalesforce } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { TiAttachment } from "react-icons/ti";
import { FiGlobe } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { AiFillHome, AiFillCaretDown } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";

const QuickView = () => {
  return (
    <div className="quick-view h-[calc(100vh-13rem)] overflow-auto shadow-lg rounded-lg flex justify-center w-full items-center flex-col gap-1">
      <Options />
      <div className="quick-view--socials flex justify-center mt-2 gap-2">
        <span className="flex justify-center items-center bg-[#00A1E0] rounded-lg p-2">
          <SiSalesforce size={"1rem"} color="white" />
        </span>
        <span className="flex justify-center items-center bg-[#0077B7] rounded-lg p-2">
          <RiLinkedinFill size={"1rem"} color="white" />
        </span>
        <span className="flex justify-center items-center bg-[#0077B7] rounded-lg p-2">
          <TiAttachment size={"1rem"} color="white" />
        </span>
      </div>
      <p className="name_section text-lg font-bold flex items-center justify-center">
        <span>First_name</span>
        <span className="pl-2 pr-1">Last_name</span>
        <FiGlobe className="text-black1" />
      </p>
      <p className="text-sm flex items-center gap-2">
        <FaBriefcase />
        <span>job_position at account_name with employee_number employees</span>
      </p>
      <p className=" text-sm flex items-center gap-2">
        <IoMailSharp />
        <span>{`primary_email_id (4)`}</span>
        <AiFillCaretDown />
      </p>
      <p className=" text-sm flex items-center gap-2">
        <BsPhoneFill />
        <span>{`primary_phone (4)`}</span>
        <AiFillCaretDown />
      </p>
      <p className=" text-sm flex items-center gap-2">
        <AiFillHome />
        <span>{`account_phone`}</span>
      </p>

      <img
        src={dummyImage}
        className="mt-auto overflow-hidden w-10/12 px-1 pb-1 h-full object-contain"
        alt="dummy section"
      />
    </div>
  );
};

export default QuickView;
