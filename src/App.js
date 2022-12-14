import {
  AccountsContacts,
  Customs,
  Leads,
  MainLogo,
  NavLinks,
  QuickView,
} from "./components";
import { Route, Routes } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { useRingover } from "./contexts/ringover-context";

function App() {
  const {
    state: { ringoverCadence },
    sendbackSalesforceItem,
    addToCadence,
    moveWithinCadence,
  } = useRingover();
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    let itemToSendBack;
    // Invalid cases while doing drag and drop

    // Case 1 : If destination is not a droppable context
    if (!destination) return;

    // Case 2 : If destination is the same droppable context
    if (
      source.droppableId === "salesforceData" &&
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // Case 3 : If the source and destination is the cadence itself
    if (
      Object.keys(ringoverCadence).includes(source.droppableId) &&
      Object.keys(ringoverCadence).includes(destination.droppableId)
    ) {
      console.log("case3");
      console.log({ source, destination, draggableId });
      // Case 3-0 : If the source and destination are the same
      if (source.droppableId === destination.droppableId) {
        return;
      }

      // Case 3-1 : The destination doesnt have any corresponding value attached
      if (!ringoverCadence[destination.droppableId].data.data) {
        moveWithinCadence(true, source.droppableId, destination.droppableId);
        return;
      }

      // Case 3-2 : The destination has a value attached.
      else {
        moveWithinCadence(false, source.droppableId, destination.droppableId);
        return;
      }
    }

    // Case 4 : Dropping back the item from Cadence to Salesforce
    if (destination.droppableId === "salesforceData") {
      console.log("case4");
      console.log({ source, destination, draggableId });
      itemToSendBack = {
        field: source.droppableId,
        data: ringoverCadence[source.droppableId].data,
      };
      sendbackSalesforceItem(itemToSendBack);
    }

    // Case 5 : Adding to cadence from salesforce
    if (
      source.droppableId === "salesforceData" &&
      Object.keys(ringoverCadence).some(
        (val) => val === destination.droppableId
      ) &&
      !ringoverCadence[destination.droppableId].data.data
    ) {
      console.log("case5");
      console.log({ source, destination, draggableId });
      addToCadence(destination.droppableId, draggableId);
    }
    // Case 6 : If tried to add from salesforce to a cadence where already something exists, just return
    if (
      source.droppableId === "salesforceData" &&
      Object.keys(ringoverCadence).some(
        (val) => val === destination.droppableId
      ) &&
      ringoverCadence[destination.droppableId].data.data
    ) {
      return;
    }
  };
  return (
    <>
      <MainLogo />
      <div className="layer__1 flex justify-center outer_bg items-center p-6 text-black1 w-screen h-screen overflow-auto">
        <div className="layer__2 h-full bg-outer_container rounded-lg w-full z-10 p-4">
          <div className="bg-white h-full w-full rounded-lg p-8">
            <NavLinks />
            <div className=" h-full w-full grid grid-cols-mainBody mt-4 gap-8">
              <QuickView />
              <div className="ringover-salesforce__view p-[2px] bg-blackLight  h-5/6 overflow-hidden rounded-l-lg flex">
                <Routes>
                  <Route path="/">
                    <Route
                      index
                      element={
                        <DragDropContext onDragEnd={onDragEnd}>
                          <Leads />
                        </DragDropContext>
                      }
                    />
                    <Route
                      path="accounts-contacts"
                      element={<AccountsContacts />}
                    />
                    <Route path="customs" element={<Customs />} />
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
