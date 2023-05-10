import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>||
      <Link to="/videos">Videos</Link>||
      <Link to="/likevideos">Like Videos</Link>||
      <Link to="/watchlater">Watch Later</Link>
    </nav>
  );
};
