import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useRingover } from "../../contexts/ringover-context";
import { arrangeSFData } from "../../utils/arrangeSFData";
import SalesforceItem from "../SalesforceItem";
import SearchField from "../SearchField";
import RingoverField from "./RingoverField";

const Leads = () => {
  const {
    state: { salesforceData, ringoverCadence, selectedSFData },
    sendbackSalesforceItem,
    handleSFClick,
  } = useRingover();

  const isRingoverValuesEmpty = Object.values(ringoverCadence).every(
    (value) => !value.data.data
  );

  const [salesforceSearch, setSalesforceSearch] = useState("");
  const [ringoverSearch, setRingoverSearch] = useState("");

  const sortedSalesforceData = arrangeSFData(salesforceData, salesforceSearch);

  useEffect(() => {
    const handleKeyDown1 = (e) => {
      if (e.key === "Backspace" && selectedSFData.data.data !== "") {
        sendbackSalesforceItem(selectedSFData);
        handleSFClick([selectedSFData.field]);
      }
    };
    document.addEventListener("keydown", handleKeyDown1);
    return () => {
      document.removeEventListener("keydown", handleKeyDown1);
    };
  }, [sendbackSalesforceItem, selectedSFData, handleSFClick]);

  return (
    <>
      <div className="gap-2 ringover w-3/4  flex p-3 justify-start items-center flex-col">
        <p className="font-semibold text-md">Ringover Cadence</p>
        <SearchField
          searchTerm={ringoverSearch}
          setSearch={setRingoverSearch}
        />
        <div className="flex-grow flex justify-start items-center mt-2 flex-col h-[calc(100%-2rem)] w-full">
          <section className="flex justify-evenly items-start w-full relative">
            <p className="text-lightBlue2">Ringover Fields</p>
            <p className="text-lightBlue2">Salesforce Fields</p>
            {isRingoverValuesEmpty && (
              <p className="absolute right-[25%]  translate-x-1/2  w-1/3 outline-2 top-9 text-center outline-dashed rounded-lg px-4 py-1 text-lightBlue2/50 ">
                Place Here
              </p>
            )}
          </section>

          <div className="flex flex-col w-11/12 gap-2 justify-center mt-2">
            {Object.entries(ringoverCadence)
              .filter((field) =>
                field[0].toLowerCase().startsWith(ringoverSearch.toLowerCase())
              )
              .map((entry, ind) => (
                <RingoverField key={entry[0]} field={entry} index={ind} />
              ))}
          </div>
        </div>
      </div>
      <Droppable droppableId="salesforceData">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="salesforce w-1/4 bg-white  flex p-3 justify-start items-start flex-col gap-2 overflow-auto"
          >
            <p className="font-semibold text-md text-center w-full">
              Salesforce
            </p>
            <SearchField
              searchTerm={salesforceSearch}
              setSearch={setSalesforceSearch}
            />
            {Object.entries(sortedSalesforceData).map(([letter, values]) => (
              <div className="flex pb-1 flex-col gap-2 w-full" key={letter}>
                <p className="pt-2">{letter}</p>
                {values.map((val, ind) => (
                  <SalesforceItem val={val} key={val.id} index={ind} />
                ))}
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

export default Leads;
