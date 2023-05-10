import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeFetch } from "../data/fakefetch";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/videos");
      setVideos(res.data.videos);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handlelikes = (videoId) => {
    const filteredData = videos.map((video) =>
      video.id === videoId ? { ...video, likes: true } : { ...video }
    );
    setVideos(filteredData);
  };

  const handlelater = (videoId) => {
    const filterLater = videos.map((video) =>
      video.id === videoId ? { ...video, later: true } : { ...video }
    );
    setVideos(filterLater);
  };

  return (
    <VideoContext.Provider value={{ videos, handlelikes, handlelater }}>
      {children}
    </VideoContext.Provider>
  );
};

VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useVideos = () => useContext(VideoContext);
