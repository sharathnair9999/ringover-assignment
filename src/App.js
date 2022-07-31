import {
  AccountsContacts,
  Customs,
  Leads,
  MainLogo,
  NavLinks,
  QuickView,
} from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MainLogo />
      <div className="layer__1 flex justify-center outer_bg items-center p-6 text-black1 w-screen h-screen overflow-auto">
        <div className="layer__2 h-full bg-outer_container rounded-lg w-full z-10 p-4">
          <div className="bg-white h-full w-full rounded-lg p-8">
            <NavLinks />
            <div className=" h-full w-full grid grid-cols-mainBody mt-4 gap-8">
              <QuickView />
              <div className="ringover-salesforce__view p-px bg-blackLight  h-5/6 overflow-hidden rounded-lg flex">
                <Routes>
                  <Route path="/">
                    <Route index element={<Leads />} />
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
