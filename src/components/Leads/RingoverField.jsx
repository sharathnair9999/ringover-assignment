import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useRingover } from "../../contexts/ringover-context";

const RingoverField = ({ field, index }) => {
  const {
    mouseEnterInCadence,
    mouseLeaveInCadence,
    handleSFClick,
    state: { hoveredItem, selectedSFData },
  } = useRingover();
  return (
    <Droppable droppableId={field[0]}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex justify-start w-full items-center "
        >
          <span
            onMouseEnter={() => mouseEnterInCadence(field[0])}
            onMouseLeave={() => mouseLeaveInCadence(field[0])}
            className={`text-purple bg-white rounded-lg p-2  w-1/2 text-center ${
              hoveredItem.toLowerCase() === field[0].toLowerCase() &&
              "bg-purple/10 scale-110 transition-all rounded-xl z-20"
            }`}
          >
            {field[0]}
          </span>
          {field[1]?.data?.data && (
            <Draggable draggableId={field[1].id} index={index}>
              {(provided) => (
                <span
                  onClick={() => {
                    handleSFClick(field);
                    console.log(field);
                  }}
                  className={`${
                    selectedSFData.data.data === field[1].data.data &&
                    "outline outline-1 outline-purple"
                  } cursor-pointer hover:bg-slate-200 gap-4 bg-lightBlue p-2 w-1/2 z-10  rounded-lg text-center text-purple `}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                >
                  {field[1].data.data}
                </span>
              )}
            </Draggable>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default RingoverField;
