import { useParams } from "react-router-dom";
import { useVideos } from "../context/VideoContext";
import { Link } from "react-router-dom";
export const IndiviualVideo = () => {
  const { videoId } = useParams();
  const { videos, handlelater, handlelikes } = useVideos();

  const inVideos = videos.filter((video) => video.id === videoId);

  console.log(videoId, inVideos);
  return (
    <div>
      <h1>Indiviual Video</h1>
      {videos.map((video) => {
        return video.id == videoId ? (
          <div
            key={video.id}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "8px",
              maxWidth: "350px",
            }}
          >
            <img src={video.thumbnail} alt="videoimage" />
            <p>{video.title}</p>
            <Link to={`/videos/${video.id}`}>Watch Here</Link>
            <p>
              <strong>description:{video.description}</strong>
            </p>
            <p>{video.duration}</p>
            <div style={{ display: "flex" }}>
              <button onClick={() => handlelikes(video.id)}>Like</button>
              <button onClick={() => handlelater(video.id)}>
                Add to watch later
              </button>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};
