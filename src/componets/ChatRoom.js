import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMesage from "./ChatMesage";
function ChatRoom({ firestore, auth }) {
  const messgeRef = firestore.collection("messages");
  const query = messgeRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [msg, setMsg] = useState("");
  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      const { uid, photoURL } = auth.currentUser;
      await messgeRef.add({
        text: msg,
        createdAt: new Date(),
        uid,
        photoURL,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => (
            <ChatMesage
              key={msg.id}
              message={msg}
              currentid={auth.currentUser.uid}
            />
          ))}
      </div>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default ChatRoom;
