import React from "react";

function ChatMesage(props) {
  const { text, uid, photoURL } = props.message;
  const messageclass = uid === props.currentid ? "sent" : "received";
  return (
    <div className={`message ${messageclass}`}>
      <img src={photoURL} alt="img" />
      <p>{text}</p>
    </div>
  );
}

export default ChatMesage;
