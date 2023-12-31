import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [toggle, setToggle] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        setToggle(false); // Set toggle to false after signing out
      })
      .catch((error) => {
        navigate("./error");
      });
  };

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-36"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        { user && (
          <div className="flex">
            <img
              src="https://www.svgrepo.com/download/450312/sign-out.svg"
              alt="signout"
              className="w-12 "
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
}
