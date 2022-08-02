import React from "react";
import { useRingover } from "../../contexts/ringover-context";

const QuickViewItem = ({ field, className = "" }) => {
  const {
    mouseEnterInQuickView,
    mouseLeaveInQuickView,
    state: { hoveredItem },
  } = useRingover();
  return (
    <span
      onMouseEnter={() => mouseEnterInQuickView(field)}
      onMouseLeave={() => mouseLeaveInQuickView(field)}
      className={`${className} ${
        hoveredItem.toLowerCase() === field.toLowerCase() && "bg-purple"
      }`}
    >
      {field}
    </span>
  );
};

export default QuickViewItem;
