import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

export default function Body() {
  const dispatch = useDispatch();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
     
      } else {
        dispatch(removeUser);
      
      }
    });
  }, []);

  return (
    <div>
      <Login />
      <Browse />
    </div>
  );
}
