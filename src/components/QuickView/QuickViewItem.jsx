import React from "react";
import { useRingover } from "../../contexts/ringover-context";

const QuickViewItem = ({ field, className = "" }) => {
  const {
    mouseEnterInQuickView,
    mouseLeaveInQuickView,
    state: { hoveredItem, ringoverCadence },
  } = useRingover();
  const inRingoverCadence = Object.keys(ringoverCadence).some(
    (f) => f.toLowerCase() === field.toLowerCase()
  );
  return (
    <span
      onMouseEnter={() => mouseEnterInQuickView(field)}
      onMouseLeave={() => mouseLeaveInQuickView(field)}
      className={`${className} ${
        hoveredItem.toLowerCase() === field.toLowerCase() &&
        inRingoverCadence &&
        " z-10 font-semibold scale-110 rounded-md cursor-pointer"
      } ${!inRingoverCadence && "text-gray-400/80 cursor-not-allowed"} `}
    >
      {field}
    </span>
  );
};

export default QuickViewItem;
