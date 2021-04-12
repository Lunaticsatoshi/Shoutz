import "./Feed.css";

//Components
import ShoutBox from "../ShoutBox/ShoutBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* ShoutBox Component */}

      <ShoutBox />
    </div>
  );
}

export default Feed;
