import { useVideos } from "../context/VideoContext";

export const WatchLater = () => {
  const { videos } = useVideos();
  return (
    <div>
      <h1>Watch Later</h1>
      <ul style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
        {videos.map(
          (video) =>
            video.later && (
              <li
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
                <p>
                  <strong>description:{video.description}</strong>
                </p>
                <p>{video.duration}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
