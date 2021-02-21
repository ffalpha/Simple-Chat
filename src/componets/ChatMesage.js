import React from "react";

function ChatMesage(props) {
  const { text, uid, photoURL } = props.message;
  const messageclass = uid === props.currentid ? "sent" : "received";
  //   console.log(id);
  console.log(props.currentid);
  console.log(props.message);

  return (
    <div className={`message ${messageclass}`}>
      <img src={photoURL} alt="img" />
      <p>{text}</p>
    </div>
  );
}

export default ChatMesage;
