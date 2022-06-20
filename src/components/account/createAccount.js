import { Button } from "@mui/material";
import React from "react";

const createAccount = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="font-bold text-2xl mb-5">
        <h1>Create your Account Today!</h1>
      </div>
      <div>
        <input
          placeholder="email"
          type="text"
          className=" p-2 text-black rounded-2xl border-2 outline-0 w-96 mb-5"
        />
      </div>
      <div>
        <input
          placeholder="password"
          type="text"
          className=" p-2 text-black rounded-2xl border-2 outline-0 w-96 mb-5"
        />
      </div>
      <div>
        <button className="bg-black text-white rounded-md p-2 font-semibold">
          Sign Up!
        </button>
      </div>
    </div>
  );
};

export default createAccount;
