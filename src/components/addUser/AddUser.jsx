import React from "react";

const AddUser = () => {
  return (
    <div className="addUser absolute top-0 left-0 right-0 bottom-0 m-auto w-max h-max bg-gray-900/80 flex flex-col items-center gap-4 p-4 rounded">
      <form className="flex gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Username"
          className="bg-white p-2 outline-none border-none text-black rounded"
        />
        <button className="bg-blue-500 p-2 rounded">Search</button>
      </form>
      <div className="user flex items-center gap-24">
        <div className="detail flex items-center gap-2">
          <img src="./avatar.png" alt="" className="w-24 h-24 object-fit-cover rounded-full" />
          <h2>Name</h2>
        </div>
        <button className="bg-blue-500 p-2 rounded">Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
