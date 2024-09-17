const Chat = () => {
  return (
    <div className="chatBody">
      <div className="top flex border-b border-gray-400 items-center justify-between gap-96">
        <div className="user flex items-center">
          <div className="userAvater flex items-center gap-2">
            <img src="/avatar.png" alt="" className="w-20 rounded-full object-cover items-center" />
            <div className="userText">
              <h3>John Doe</h3>
              <p>Active</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-1">
          <img src="./phone.png" alt="" className="w-8 h-8 cursor-pointer" />
          <img src="./video.png" alt="" className="w-8 h-8 cursor-pointer" />
          <img src="./info.png" alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  );
};

export default Chat;
