import React, { useState } from "react";
import SearchInput from "../sidebar/SearchInput";
import Conversations from "../sidebar/Conversations";
import LogoutButton from "../sidebar/LogoutButton";

const MobileNavbar = () => {
  const [showConversations, setShowConversations] = useState(false);

  return (
    <>
      <div className="bg-white p-4 text-sky-500 border border-b-sky-500 fixed top-0 left-0 right-0 flex justify-between md:hidden z-10">
        <SearchInput />
        <div className="flex flex-col ">
          <button onClick={() => setShowConversations(true)}>Users</button>
          <LogoutButton />
        </div>
      </div>
      {/* Drawer */}
      {showConversations && (
        <div className="fixed inset-0 z-20 flex">
          <div className="bg-white w-80 p-4 shadow-lg">
            <button
              onClick={() => setShowConversations(false)}
              className="text-sky-500 mb-4"
            >
              Close
            </button>
            <div className="overflow-auto" style={{ height: "600px" }}>
              <Conversations />
            </div>
          </div>
          <div
            className="flex-grow bg-black opacity-50"
            onClick={() => setShowConversations(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
