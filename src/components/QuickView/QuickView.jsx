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
import QuickViewItem from "./QuickViewItem";
import { useRingover } from "../../contexts/ringover-context";

const QuickView = () => {
  const {
    state: { quickViewData, hoveredItem, ringoverCadence },
  } = useRingover();

  return (
    <div
      className={`quick-view h-[calc(100vh-13rem)] overflow-auto shadow-lg rounded-lg flex justify-center w-full items-center relative ${
        Object.keys(ringoverCadence).some(
          (item) => item.toLowerCase() === hoveredItem.toLowerCase()
        ) &&
        "after:absolute after:w-full after:h-full after:bg-gray-100/90 transition-all after:transition-all  after:text-gray-300"
      }  flex-col gap-1`}
    >
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
      <p className="name_section flex items-center justify-center">
        <QuickViewItem
          field={quickViewData.first_name}
          className="text-lg font-bold "
        />
        <QuickViewItem
          className="pl-2 pr-1 font-bold text-lg "
          field={quickViewData.last_name}
        />
        <FiGlobe className="text-black1" />
      </p>
      <p className="text-sm flex items-center justify-center flex-wrap gap-2">
        <FaBriefcase />
        <QuickViewItem field={quickViewData.job_position} /> at{" "}
        <QuickViewItem field={quickViewData.account_name} /> with{" "}
        <QuickViewItem field={quickViewData.employee_number} /> employees
      </p>
      <p className=" text-sm flex items-center gap-2">
        <IoMailSharp />
        <QuickViewItem field={quickViewData.primary_email_id} />
        {" (4)"}
        <AiFillCaretDown />
      </p>
      <p className=" text-sm flex items-center gap-2">
        <BsPhoneFill />
        <QuickViewItem field={quickViewData.primary_phone} />
        {" (4)"}
        <AiFillCaretDown />
      </p>
      <p className=" text-sm flex items-center gap-2">
        <AiFillHome />
        <QuickViewItem field={quickViewData.account_phone} />
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
