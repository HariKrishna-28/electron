// import logo from "./logo.svg";
// import "./App.css";
import ReactPlayer from "react-player/youtube";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white font-bold text-3xl">
      {/* vanakam frans elarum epdi irukinga */}
      <div>
        {/* <video src="https://youtu.be/dQw4w9WgXcQ" autoPlay loop controls /> */}
        <ReactPlayer
          playing="true"
          loop
          controls="false"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </div>
    </div>
  );
}

export default App;
