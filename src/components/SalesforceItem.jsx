import React from "react";
import { Draggable } from "react-beautiful-dnd";

const SalesforceItem = ({ val, index }) => {
  return (
    <Draggable draggableId={val.id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="cursor-pointer hover:bg-slate-200 flex justify-start items-center gap-4 bg-lightBlue px-3 w-full py-1 rounded-xl text-purple "
        >
          <span className="w-2 h-[90%] bg-white rounded-md "></span>
          <p>{val.data}</p>
        </div>
      )}
    </Draggable>
  );
};

export default SalesforceItem;
