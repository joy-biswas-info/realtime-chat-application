import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Hello");
  };

  return (
    <div className="login h-[100%] w-[100%] flex gap-2 items-center justify-center">
      <div className="item flex-1 items-center flex flex-col">
        <h2 className="text-2xl font-bold mb-9">Welcome Back,</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-y-2 items-center">
          <input type="email" name="email" id="" placeholder="Your email here" />
          <input type="password" name="password" id="" placeholder="Your password here" />
          <button className="w-[100%] bg-blue-600 p-4 text-xl">Login</button>
        </form>
      </div>
      <div className="seperator h-[80%] w-[1px] bg-gray-300"></div>
      <div className="item  items-center flex flex-col flex-1">
        <h2 className="text-2xl font-bold mb-9">Create an Account</h2>
        <form action="#" className="flex flex-col gap-y-2 items-center">
          <label htmlFor="file" className="flex gap-1 w-[100%] items-center cursor-pointer">
            <img
              src={avatar.url || "./avatar.png"}
              alt=""
              className="w-12 h-12 rounded-full object-fit-cover "
            />
            <span className="border border-gray-400 w-[100%] p-2 bg-[#1B2D5A] rounded-full">
              Upload an image
            </span>
          </label>
          <input type="file" name="file" id="file" className="hidden" onChange={handleAvatar} />
          <input type="text" name="userName" id="" placeholder="User name" />
          <input type="email" name="email" id="" placeholder="Your email here" />
          <input type="password" name="password" id="" />
          <button className="w-[100%] bg-blue-600 p-4 text-xl">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
