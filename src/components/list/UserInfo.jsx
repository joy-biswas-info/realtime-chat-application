const UserInfo = () => {
  return (
    <div className="flex items-center gap-12">
      <div className="user flex gap-4 items-center ">
        <img src="/avatar.png" className="w-10 h-10 rounded-full object-fit-contain " alt="" />
        <h3 className="font-bold">Johan Doe</h3>
      </div>
      <div className="icons flex gap-3">
        <img className="w-6 cursor-pointer" src="/more.png" alt="" srcset="" />
        <img className="w-6 cursor-pointer" src="/video.png" alt="" srcset="" />
        <img className="w-6 cursor-pointer" src="/edit.png" alt="" srcset="" />
      </div>
    </div>
  );
};

export default UserInfo;
