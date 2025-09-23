import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div className=" flex flex-col items-center justify-center w-sm space-y-5 py-4 border-2 rounded-2xl">
      <h2 className="text-3xl font-bold p-4  bg-gradient-to-br  from-green-600 to-green-100 text-transparent bg-clip-text">
        Login
      </h2>
      <input
        className=" border px-2 py-1 rounded-md"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        className="border px-2 py-1 rounded-md"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button
        className="border rounded px-4 py-1 hover:bg-green-200"
        onClick={handleSubmit}
      >
        {" "}
        Submit
      </button>
    </div>
  );
};

export default Login;
