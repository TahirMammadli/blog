import classes from "./PostSectionBar.module.css";
import catLogo from "../Navbar/Wojak_cropped.jpg";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import PollIcon from "@mui/icons-material/Poll";
import PublicIcon from "@mui/icons-material/Public";
import LockIcon from "@mui/icons-material/Lock";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Picker } from "emoji-mart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
export default function PostSectionBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji.native);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the value of isOpen
  };
  return (
    <div className={classes.postSectionBarContainer}>
      <div className={classes.logoAndSeachbarContainer}>
        <img
          src={catLogo}
          alt="myImage"
          className={classes.logo}
          style={{ width: "50px", height: "50px", borderRadius: "100px" }}
        />
        {/* this div below will be a separate component  */}
        <div className={classes.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            className={classes.searchInput}
          />
          <EmojiEmotionsIcon/>
        </div>
      </div>
      <div className={classes.postSectionIconContainer}>
        <div className={classes.iconContainer}>
          <ImageIcon />
          <span>Image</span>
        </div>
        <div className={classes.iconContainer}>
          <VideocamIcon />
          <span>Video</span>{" "}
        </div>
        <div className={classes.iconContainer}>
          <PollIcon />
          <span>Poll</span>
        </div>
        <div className={classes.visibilityIconContainer}>
          <PublicIcon />
          <div className={classes.dropdownContainer}>
            <button className={classes.dropdownButton} onClick={toggleDropdown}>
              <ArrowDropDownIcon />
              Public
            </button>
            {isOpen && (
              <ul className={classes.dropdownList}>
                <li>Public</li>
                <li>Private</li>
              </ul>
            )}
          </div>
          {/* <LockIcon/> */}
        </div>
       
      </div>
    </div>
  );
}
