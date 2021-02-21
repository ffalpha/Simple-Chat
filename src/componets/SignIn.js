import React from "react";
import firebase from "firebase/app";
function Signin({ auth }) {
  const signInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export default Signin;
