import classes from "./FeedBar.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import SendIcon from "@mui/icons-material/Send";
import nightSnow from "./nightsnow.jpg";
import soyjak from "../ActivityBar/soyjak.png";
import doomer from '../Myprofile Bar/doomer.jpg'
export default function FeedBar() {
  return (
    <div className={classes.feedBarContainer}>
      <div className={classes.topMenu}>
        <div className={classes.pfpContainer}>
          <div>
            <img
              src={soyjak}
              alt="myImage"
              style={{ width: "50px", height: "50px", borderRadius: "100px" }}
            />
          </div>
          <div className={classes.nameAndTimeContainer}>
            <div>
              <span>Jean Paul</span>
            </div>
            <div>
              <span>12 minutes ago</span>
            </div>
          </div>
        </div>
        <div className={classes.hamburgerMenu}>
          <MoreVertIcon />
        </div>
      </div>

      <div className={classes.postTextContainer}>
        <span>Beautiful art! #art #aesthetics</span>
      </div>
      <div className={classes.postImageContainer}>
        <img
          src={nightSnow}
          alt="myImage"
          style={{ width: "90%", height: "60%", borderRadius: "10px" }}
        />
      </div>
      <div className={classes.bottomMenu}>
        <div className={classes.likeAndCommentContainer}>
          <div className={classes.iconContainer}>
            <FavoriteIcon />
            <span>153</span>
          </div>
          <div className={classes.iconContainer}>
            <CommentIcon />
            <span>20</span>
          </div>
          <div className={classes.iconContainer}>
            <BookmarkIcon />
            <span>5</span>
          </div>
        </div>

        <div className={classes.sendToIconContainer}>
          <SendIcon />
        </div>
      </div>
      <div className={classes.logoAndSeachbarContainer}>
        <img
          src={doomer}
          alt="myImage"
          className={classes.logo}
          style={{ width: "70px",
          height: "60px", borderRadius: "100px" }}
        />
        {/* this div below will be a separate component  */}
        <div className={classes.searchBar}>
          <input
            type="text"
            placeholder="Comment..."
            className={classes.searchInput}
          />
          <EmojiEmotionsIcon/>
        </div>
      </div>
    </div>
  );
}
