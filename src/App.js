import { useState } from "react";
import "./App.css";
import { auth, firestore } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

import Chatroom from "./componets/ChatRoom";
import SignIn from "./componets/SignIn";
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header></header>
      <section>
        {user ? <Chatroom firestore={firestore} /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
