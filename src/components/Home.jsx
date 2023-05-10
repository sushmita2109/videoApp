import { useNavigate } from "react-router-dom";
export const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/videos");
  };
  return (
    <div>
      <h1>Home</h1>
      <h1>Welcome to video Library</h1>
      <h1>To browse all videos, click the button or go to the video page.</h1>
      <button onClick={routeChange}>Explore Videos</button>
    </div>
  );
};
