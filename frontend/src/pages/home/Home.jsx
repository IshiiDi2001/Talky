import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-[700px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
