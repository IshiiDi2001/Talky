import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkelton";
import useConversation from "../../zustand/useConversation";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  const { selectedConversation } = useConversation();
  const firstName = selectedConversation.fullName.split(" ")[0];

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(8)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <div className="text-center mt-32 ">
          <img
            src="/conversation-start.gif"
            alt="Start the conversation"
            className="mx-auto w-1/4"
          />
          <p className=" text-lightOrange text-lg">
            Say <span className="text-darkOrange">'Hello'</span> to start
            conversation with <span className="text-sky-500">{firstName}!</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
