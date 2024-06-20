import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

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
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-sky-500 font-semibold flex flex-col items-center gap-2">
        <p>
          Hello <span className="text-lightOrange">{authUser.fullName}</span> 👋
        </p>
        <img
          src="/Hello.gif"
          alt="Start the conversation"
          className="mx-auto w-1/2"
        />
        <p>Select a chat to start messaging!</p>
      </div>
    </div>
  );
};
