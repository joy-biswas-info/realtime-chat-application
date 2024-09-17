const Detail = () => {
  return (
    <div className="details flex-1 overflow-scroll h-[80vh]">
      <div className="user p-12 flex flex-col items-center gap-2 border-b border-gray-300">
        <img src="./avatar.png" alt="" className="w-12 h-12 rounded-full" />
        <h3>John Doe</h3>
        <p>Lorem ipsum dolor sit</p>
      </div>
      <div className="info px-4">
        <div className="options">
          <div className="title flex justify-between">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <div className="photos">
          <div className="photoItem flex felx-col items-center justify-between">
            <div className="photoDetails flex items-center gap-1">
              <img
                src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
                alt=""
                className="h-12 w-12 rounded-sm"
              />
              <span className="font-extralight text-xs text-gray-400">Photo_2024</span>
            </div>
            <img
              src="./download.png"
              alt=""
              className="w-7 h-7 p-2 bg-gray-900/50 rounded-full transition cursor-pointer"
            />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options flex flex-col items-center mt-12 gap-4">
          <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 mx-auto w-[100%]">
            Block user
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mx-auto w-[100%]">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
