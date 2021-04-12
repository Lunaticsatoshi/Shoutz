//Components
import { Avatar, Button } from "@material-ui/core";
import "./ShoutBox.css";

function ShoutBox() {
  return (
    <div className="shoutBox">
      <form>
        <div className="shoutBox__input">
          <Avatar src="https://images.unsplash.com/photo-1578684683535-67e29c7b65e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <input
            className="shoutBox__input"
            placeholder="What's happening?"
            type="text"
          />
        </div>
        {/* <input
          className="shoutBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        /> */}

        <Button type="submit" className="shoutBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default ShoutBox;
