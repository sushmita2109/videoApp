import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Videos } from "./components/Videos";
import { WatchLater } from "./components/WatchLater";
import { LikeVideos } from "./components/LikeVideos";
import { Header } from "./components/Header";
import { IndiviualVideo } from "./components/IndiviualVideo";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/likevideos" element={<LikeVideos />} />
          <Route path="/videos/:videoId" element={<IndiviualVideo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
