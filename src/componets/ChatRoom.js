import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMesage from "./ChatMesage";
function ChatRoom({ firestore }) {
  console.log(firestore);
  const messgeRef = firestore
    .collection("messages")
    .orderBy("createdAt")
    .limit(25);

  const [messages] = useCollectionData(messgeRef, { idField: "id" });
  console.log(messages);
  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMesage key={msg.id} message={msg} />)}
      </div>
    </>
  );
}

export default ChatRoom;
