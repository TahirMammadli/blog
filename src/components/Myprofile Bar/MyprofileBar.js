import classes from "./Myprofile.module.css";
import backgroundImage from "./alps.jpeg"
import profileImage from "./doomer.jpg"

export default function MyprofileBar() {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}>
      <img
          src={backgroundImage}
          alt="myImage"
          className={classes.logo}
          style={{ width: "280px", height: "100px", borderRadius: "10px" }}
        />
      </div>
      <div className={classes.profileImage}>
      <img
          src={profileImage}
          alt="myImage"
          className={classes.logo}
          style={{
            width: "80px",
            height: "60px",
            borderRadius: "60px",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}        />
      </div>
      <div className={classes.usernameContainer}>
        <div>John Doe</div>
        <div>@jdoe</div>
      </div>
      <div className={classes.followerCountBar}>
        <div>
          <p>245</p>
          <p>Post</p>
        </div>
        <div>
          <p>1211</p>
          <p>Followers</p>
        </div>
        <div>
          <p>435</p>
          <p>Following</p>
        </div>
      </div>
      <div >
        <button className={classes.myProfileButton}>My Profile</button>
      </div>
    </div>
  );
}
