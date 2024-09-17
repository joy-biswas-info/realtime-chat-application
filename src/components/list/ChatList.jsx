import { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="my-10 h-[80vh] overflow-scroll">
      <div className="search flex my-4 justify-between">
        <div className="searchBar flex bg-gray-900/50 items-center rounded-3xl px-4 flex-1">
          <img src="/search.png" alt="" className="w-5 h-5" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search chat"
            className="px-1 border-collapse focus:border-collapse focus:outline-none bg-gray-900/0"
          />
        </div>
        <img
          src={addMode ? "/minus.png" : "/plus.png"}
          alt=""
          className="w-7 h-7 p-2 bg-gray-900/50 rounded-full transition cursor-pointer"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item flex items-center gap-2 mt-1 p-1 border-b border-gray-400">
        <img src="/avatar.png" alt="" className="w-20 rounded-full" />
        <div className="text">
          <h3>John Doe</h3>
          <p>Hello</p>
        </div>
      </div>
      <div className="item flex items-center gap-2 mt-1 p-1 border-b border-gray-400">
        <img src="/avatar.png" alt="" className="w-20 rounded-full" />
        <div className="text">
          <h3>John Doe</h3>
          <p>Hello</p>
        </div>
      </div>
      <div className="item flex items-center gap-2 mt-1 p-1 border-b border-gray-400">
        <img src="/avatar.png" alt="" className="w-20 rounded-full" />
        <div className="text">
          <h3>John Doe</h3>
          <p>Hello</p>
        </div>
      </div>
      <div className="item flex items-center gap-2 mt-1 p-1 border-b border-gray-400">
        <img src="/avatar.png" alt="" className="w-20 rounded-full" />
        <div className="text">
          <h3>John Doe</h3>
          <p>Hello</p>
        </div>
      </div>
      <div className="item flex items-center gap-2 mt-1 p-1 border-b border-gray-400">
        <img src="/avatar.png" alt="" className="w-20 rounded-full" />
        <div className="text">
          <h3>John Doe</h3>
          <p>Hello</p>
        </div>
      </div>
      <div className="item flex items-center gap-2 mt-1 p-1 border-b border-gray-400">
        <img src="/avatar.png" alt="" className="w-20 rounded-full" />
        <div className="text">
          <h3>John Doe</h3>
          <p>Hello</p>
        </div>
      </div>
      <div className="item flex items-center gap-2 mt-1 p-1 border-b border-gray-400">
        <img src="/avatar.png" alt="" className="w-20 rounded-full" />
        <div className="text">
          <h3>John Doe</h3>
          <p>Hello</p>
        </div>
      </div>
      <div className="item flex items-center gap-2 mt-1 p-1 border-b border-gray-400">
        <img src="/avatar.png" alt="" className="w-20 rounded-full" />
        <div className="text">
          <h3>John Doe</h3>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
