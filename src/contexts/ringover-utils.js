import { v4 as uuid } from "uuid";
export const ringoverReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "HOVER_ON_RINGOVER_FIELD":
      return { ...state, hoveredItem: payload };
    case "HOVER_OFF_RINGOVER_FIELD":
      return { ...state, hoveredItem: "" };

    case "CLICK_SALESFORCE_ITEM":
      if (state.selectedSFData.field === payload[0]) {
        console.log(payload);
        return {
          ...state,
          selectedSFData: { field: "", data: { id: "", data: "" } },
        };
      } else {
        console.log(payload);

        return {
          ...state,
          selectedSFData: {
            field: payload[0],
            data: { id: payload[1].data.id, data: payload[1].data.data },
          },
        };
      }
    case "ADD_TO_CADENCE":
      let { destinationId, draggableId } = payload;
      let itemToAdd = state.salesforceData.find(
        (item) => item.id === draggableId
      );
      return {
        ...state,
        salesforceData: state.salesforceData.filter(
          (field) => field.id !== draggableId
        ),
        ringoverCadence: {
          ...state.ringoverCadence,
          [destinationId]: {
            ...state.ringoverCadence[destinationId],
            data: itemToAdd,
          },
        },
      };
    case "SENDBACK_SALESFORCE_ITEM":
      let { field, data } = payload;
      console.log(field);
      console.log(data);
      return {
        ...state,
        salesforceData: [...state.salesforceData, data],
        ringoverCadence: {
          ...state.ringoverCadence,
          [field]: {
            ...state.ringoverCadence[field],
            data: { id: "", data: "" },
          },
        },
      };
    default:
      return state;
  }
};

export const initialState = {
  salesforceData: [
    { id: uuid(), data: "Account Number" },
    { id: uuid(), data: "Account Name" },
    { id: uuid(), data: "Account Type" },
    { id: uuid(), data: "Body" },
    { id: uuid(), data: "Enumeration" },
    { id: uuid(), data: "BaseCE" },
    { id: uuid(), data: "Customer Name" },
    { id: uuid(), data: "Data Types" },
  ],
  selectedSFData: { field: "", data: { id: "", data: "" } },
  hoveredItem: "",
  quickViewData: {
    first_name: "First_Name",
    last_name: "Last_Name",
    job_position: "job_position",
    account_name: "account_name",
    employee_number: "employee_number",
    primary_email_id: "primary_email_id",
    primary_phone: "primary_phone",
    account_phone: "account_phone",
  },
  ringoverCadence: {
    account_name: { id: uuid(), data: { id: "", data: "" } },
    first_name: { id: uuid(), data: { id: "", data: "" } },
    last_name: { id: uuid(), data: { id: "", data: "" } },
    primary_email_id: { id: uuid(), data: { id: "", data: "" } },
    primary_phone: { id: uuid(), data: { id: "", data: "" } },
    employee_number: { id: uuid(), data: { id: "", data: "" } },
    job_position: { id: uuid(), data: { id: "", data: "" } },
  },
};
