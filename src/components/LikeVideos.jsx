import { useVideos } from "../context/VideoContext";

export const LikeVideos = () => {
  const { videos } = useVideos();
  return (
    <div>
      <h1>Like Videos</h1>
      <ul style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
        {videos.map(
          (video) =>
            video.likes && (
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
