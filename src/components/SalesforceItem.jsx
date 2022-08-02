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
          className="cursor-pointer after:absolute after:content-[''] text-center after:w-2 after:h-[70%] after:left-3 after:rounded-md after:bg-white  relative hover:bg-slate-200 gap-4 bg-lightBlue px-3 w-full py-1 rounded-xl text-purple "
        >
          {val.data}
        </div>
      )}
    </Draggable>
  );
};

export default SalesforceItem;
