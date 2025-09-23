import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className=" text-3xl font-semibold tracking-wider">
        Login, plz...
      </div>
    );
  else
    return (
      <div className="text-3xl font-semibold tracking-wider">
        Welcome,
        <span className=" font-bold bg-gradient-to-tl from-green-600 to-green-300 text-transparent bg-clip-text capitalize">
          {user.userName}
        </span>
      </div>
    );
};

export default Profile;
