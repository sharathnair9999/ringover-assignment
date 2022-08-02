import React from "react";
import RingoverField from "./RingoverField";

const RingoverFields = ({ data, search }) => {
  return (
    <div className="w-1/2 flex flex-col justify-start items-center gap-4 overflow-auto h-full">
      {data
        .filter((field) => field.toLowerCase().startsWith(search.toLowerCase()))
        .map((field) => (
          <RingoverField field={field} key={field} />
        ))}
    </div>
  );
};

export default RingoverFields;
