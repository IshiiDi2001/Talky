import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounting when logout)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[800px] bg-white flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg bg-sky-500 px-4 py-2 mb-2">
            <span className="text-white label-text">To :</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John Doe 😍</p>
        <p className="text-darkOrange">Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center text-sky-500" />
      </div>
    </div>
  );
};
