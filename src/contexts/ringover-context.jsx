import { createContext, useContext, useReducer } from "react";
import { initialState, ringoverReducer } from "./ringover-utils";

const RingoverContext = createContext();

const RingoverProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ringoverReducer, initialState);

  const handleSFClick = (data) => {
      dispatch({ type: "CLICK_SALESFORCE_ITEM", payload: data });
    },
    mouseEnterInCadence = (field) => {
      dispatch({ type: "HOVER_ON_RINGOVER_FIELD", payload: field });
    },
    mouseLeaveInCadence = () => {
      dispatch({ type: "HOVER_OFF_RINGOVER_FIELD" });
    },
    mouseEnterInQuickView = (field) => {
      dispatch({ type: "HOVER_ON_RINGOVER_FIELD", payload: field });
    },
    mouseLeaveInQuickView = () => {
      dispatch({ type: "HOVER_OFF_RINGOVER_FIELD" });
    },
    addToCadence = (destinationId, draggableId) => {
      dispatch({
        type: "ADD_TO_CADENCE",
        payload: { destinationId, draggableId },
      });
    },
    sendbackSalesforceItem = (item) => {
      dispatch({ type: "SENDBACK_SALESFORCE_ITEM", payload: item });
    };

  const value = {
    state,
    dispatch,
    handleSFClick,
    mouseEnterInCadence,
    mouseEnterInQuickView,
    mouseLeaveInCadence,
    mouseLeaveInQuickView,
    sendbackSalesforceItem,
    addToCadence,
  };
  return (
    <RingoverContext.Provider value={value}>
      {children}
    </RingoverContext.Provider>
  );
};

const useRingover = () => useContext(RingoverContext);

export { useRingover, RingoverProvider };
