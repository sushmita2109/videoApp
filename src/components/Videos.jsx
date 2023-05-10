import { useVideos } from "../context/VideoContext";
import { Link } from "react-router-dom";

export const Videos = () => {
  const { videos, handlelikes, handlelater } = useVideos();
  return (
    <div>
      <h1>Videos</h1>
      <ul style={{ display: "flex" }}>
        {videos.map((video) => (
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              borderRadius: "5px",
              boxShadow: "2px 4px 2px 1px",
              gap: "1px",
              maxWidth: "250px",
              margin: "2px 2px",
            }}
            key={video.id}
          >
            <img src={video.thumbnail} alt="videoimage" />
            <p>{video.title}</p>
            <Link to={`/videos/${video.id}`}>Watch Here</Link>
            <div style={{ display: "flex" }}>
              <button onClick={() => handlelikes(video.id)}>Like</button>
              <button onClick={() => handlelater(video.id)}>
                Add to watch later
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
