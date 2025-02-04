import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
      const chatData = useSelector((store) => store.chat.messages);
      const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(addMessage({
                  name: generateRandomName()+"Live Chat",
                  message: liveMessage,
                  id: Date.now()
            }))
            setLiveMessage("");
      }
  useEffect(() => {
        const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(15),
          id: Date.now(),
        })
      );
    }, 4000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="mx-2 p-2 border border-black w-full h-[500px] bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {" "}
          {chatData.map((chat) => (
            <ChatMessage
              key={chat.id}
              name={chat.name}
              message={chat.message}
            />
          ))}
        </div>
      </div>
      <form className="w-full p-2 m-4 border border-black rounded-lg" onSubmit={handleSubmit}>
        <input
          className="px-3 py-2 rounded-lg w-96 bg-slate-200 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button type="submit" className="px-3 py-2 mx-2 font-bold bg-red-400 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
