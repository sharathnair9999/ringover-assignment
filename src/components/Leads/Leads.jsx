import React, { useState } from "react";
import SearchField from "../SearchField";

const Leads = () => {
  const salesforceData = [
    "Account Number",
    "Account Name",
    "Account Type",
    "Build Version",
    "Body",
    "Enumeration",
    "BaseCE",
    "Customer Name",
    "Data Types",
  ];
  const ringoverData = [
    "account_name",
    "first_name",
    "last_name",
    "primary_email_id",
    "primary_phone",
    "employee_number",
    "job_position",
  ];
  const [salesForceFields, setSalesForceFields] = useState([]);
  const [salesforceSearch, setSalesforceSearch] = useState("");
  const [ringoverSearch, setRingoverSearch] = useState("");
  const sortedData = [
    ...new Set(
      salesforceData
        .filter((word) =>
          word.toLowerCase().startsWith(salesforceSearch.toLowerCase())
        )
        .map((word) => word)
        .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    ),
  ].reduce((acc, curr) => {
    if (!acc.hasOwnProperty(curr[0])) {
      acc = { ...acc, [curr[0]]: [curr] };
    } else acc = { ...acc, [curr[0]]: [...acc[curr[0]], curr] };
    return acc;
  }, {});
  return (
    <>
      <div className="gap-2 ringover w-3/4  flex p-3 justify-start items-center flex-col">
        <p className="font-semibold text-md">Ringover Cadence</p>
        <SearchField
          searchTerm={ringoverSearch}
          setSearch={setRingoverSearch}
        />
        <div className="flex-grow flex justify-center items-start  w-full ">
          <div className="flex-grow flex flex-col justify-start items-center gap-4 overflow-auto h-[calc(100%-2rem)]">
            <p className="text-lightBlue2">Ringover Fields</p>
            {ringoverData.map((field) => (
              <span
                className="text-purple bg-white rounded-lg p-2 w-10/12 text-center"
                key={field}
              >
                {field}
              </span>
            ))}
          </div>
          <div className="flex-grow flex flex-col justify-start items-center gap-4 overflow-auto h-[calc(100%-2rem)]">
            <p className="text-lightBlue2">Salesforce Fields</p>
            {salesForceFields.length === 0 && (
              <span className="border border-dashed rounded-md p-2 text-lightBlue2/50 w-10/12 text-center">
                Place here
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="salesforce w-1/4 bg-white  flex p-3 justify-start items-start flex-col gap-2 overflow-auto">
        <p className="font-semibold text-md">Salesforce</p>
        <SearchField
          searchTerm={salesforceSearch}
          setSearch={setSalesforceSearch}
        />
        {Object.entries(sortedData).map(([letter, values], ind) => {
          return (
            <div className="flex pb-1 flex-col gap-2 w-full" key={letter}>
              <p className="pt-2">{letter}</p>
              {values.map((val) => (
                <div
                  key={val}
                  className="cursor-pointer hover:bg-slate-200 flex justify-start items-center gap-4 bg-lightBlue px-3 w-full py-1 rounded-xl text-purple "
                >
                  <span className="w-2 h-[90%] bg-white rounded-md "></span>
                  <p className="">{val}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Leads;
