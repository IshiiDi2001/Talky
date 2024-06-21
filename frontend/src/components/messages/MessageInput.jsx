import React, { useState } from "react";
import { BsSend, BsEmojiSmile } from "react-icons/bs";
import Picker from "emoji-picker-react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { loading, sendMessage } = useSendMessage();

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative flex items-center">
        <button
          type="button"
          className="absolute text-black inset-y-0 left-0 flex items-center pl-3 z-10"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <BsEmojiSmile />
        </button>

        <input
          type="text"
          className="border text-sm rounded-lg block w-full pl-10 pr-10 p-2.5 bg-sky-400 border-sky-500 text-black placeholder-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="absolute text-black inset-y-0 right-0 flex items-center pr-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
        {showEmojiPicker && (
          <div className="absolute bottom-12 left-0">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageInput;
