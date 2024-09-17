import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((pre) => pre + e.emoji);
    setOpen(false);
  };
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className="chatBody flex flex-col h-[85vh]">
      <div className="top flex border-b border-gray-400 items-center justify-between gap-96">
        <div className="user flex items-center">
          <div className="userAvater flex items-center gap-3">
            <img src="/avatar.png" alt="" className="w-20 rounded-full object-cover items-center" />
            <div className="userText">
              <h3 className="font-bold">John Doe</h3>
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
      <div className="center flex-1 p-12 overflow-y-scroll flex flex-col gap-1">
        <div className="message flex gap-1">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1 own">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1 own">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1 own">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1 own">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1 own">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="message flex gap-1">
          <img src="./avatar.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo?</p>
            <span>10 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom flex justify-between items-center gap-2 mt-auto border-t border-gray-400 pt-2">
        <div className="icons flex gap-4">
          <img src="./img.png" alt="" className="cursor-pointer corsor" />
          <img src="./camera.png" alt="" className="cursor-pointer" />
          <img src="./mic.png" alt="" className="cursor-pointer" />
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-gray-700 p-2 flex-1 border-0 text-white focus:border-0 rounded-2xl"
        />
        <div className="emoji relative">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer"
          />
          <div className="picker absolute bottom-12 left-0">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} className="" />
          </div>
        </div>
        <div className="sendButton">
          <button className=" bg-blue-600 px-4 py-2">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
