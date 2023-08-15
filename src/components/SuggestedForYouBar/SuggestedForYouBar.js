import classes from "./SuggestedForYouBar.module.css";
import chadWojak from "./chadWojak.jpg";
import chad2 from './chad2.png'
import chad3 from './chad3.gif'
import chad6 from './chad6.png'
export default function SuggestedForYouBar() {
  return (
    <div className={classes.container}>
      <div className={classes.headerTitle}>
        <span>
          <b>Suggested For You</b>
        </span>
        <span>See all</span>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.suggestedProfile}>
            <div className={classes.imageNameContainer}>
          <img
            src={chad6}
            alt="myImage"
            style={{ width: "70px", height: "60px", borderRadius: "100px" }}
          />
          <div className={classes.theTextContainer}>
            <div>Norman</div>
            <div>Followed by Soyboy</div>
          </div>
          <div>
            {/* this button when clicked will follow or unfollow a user  */}
            <button  className={classes.followButton}>Follow</button>
          </div>
          </div>
       
        </div>
      </div>


      <div className={classes.mainContent}>
        <div className={classes.suggestedProfile}>
            <div className={classes.imageNameContainer}>
          <img
            src={chadWojak}
            alt="myImage"
            style={{ width: "70px", height: "60px", borderRadius: "100px" }}
          />
          <div className={classes.theTextContainer}>
            <div>Chad</div>
            <div>Followed by Yomama</div>
          </div>
          <div>
            {/* this button when clicked will follow or unfollow a user  */}
            <button  className={classes.followedButton}>Followed</button>
          </div>
          </div>
       
        </div>
      </div>



      <div className={classes.mainContent}>
        <div className={classes.suggestedProfile}>
            <div className={classes.imageNameContainer}>
          <img
            src={chad2}
            alt="myImage"
            style={{ width: "70px", height: "60px", borderRadius: "100px" }}
          />
          <div className={classes.theTextContainer}>
            <div>Bruh</div>
            <div>Followed by Ijustshidoutmyass</div>
          </div>
          <div>
            {/* this button when clicked will follow or unfollow a user  */}
            <button  className={classes.followButton}>Follow</button>
          </div>
          </div>
       
        </div>
      </div>




      <div className={classes.mainContent}>
        <div className={classes.suggestedProfile}>
            <div className={classes.imageNameContainer}>
          <img
            src={chad3}
            alt="myImage"
            style={{ width: "70px", height: "60px", borderRadius: "100px" }}
          />
          <div className={classes.theTextContainer}>
            <div>Themilkman</div>
            <div>Followed by nowayybruh</div>
          </div>
          <div>
            {/* this button when clicked will follow or unfollow a user  */}
            <button className={classes.followedButton}>Followed</button>
          </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}
