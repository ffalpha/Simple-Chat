import { useState } from "react";
import "./App.css";
import { auth, firestore } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

import Chatroom from "./componets/ChatRoom";
import SignIn from "./componets/SignIn";
import SignOut from "./componets/SignOut";
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header> {user ? <SignOut /> : <div>Simple Chat</div>}</header>
      <section style={{ justifyContent: "center", alignitems: "center" }}>
        {user ? <Chatroom firestore={firestore} auth={auth} /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
