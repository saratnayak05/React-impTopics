import Login from "./components/Login";
import Profile from "./components/profile";

const App = () => {
  return (
    // <div className=' bg-slate-700 h-screen text-amber-100 flex items-center justify-center text-7xl'>Hi today we are going to learn Context Api</div>

    <div
      style={{
        backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
      `,
      }}
      className=" h-screen flex flex-col space-y-4 items-center justify-center"
    >
      <Login />
      <Profile />
    </div>
  );
};

export default App;
