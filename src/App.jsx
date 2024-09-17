import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import ChatList from "./components/list/ChatList";
import UserInfo from "./components/list/UserInfo";

const App = () => {
  return (
    <div
      className="container-fluid h-[100vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div class="wraper flex h-[90vh] w-[90vw] backdrop-filter backdrop-blur-lg backdrop-saturate-100 bg-blue-900/60 p-5 rounded-lg shadow-md text-white mx-auto">
        <div className="list border-r border-gray-400" style={{ flex: 1 }}>
          <UserInfo />
          <ChatList />
        </div>
        <div className="chat border-r border-gray-400" style={{ flex: 2 }}>
          <Chat />
        </div>
        <div className="" style={{ flex: 1 }}>
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default App;
