import classes from "./YourShortcutsBar.module.css";
import cybersport from "./cybersport.jpg";
import art from "./art.jpg";
import science from "./science.jpeg";
import programming from "./programming.jpg";
export default function YourShortcutsBar() {
  return (
    <div className={classes.container}>
      <div className={classes.headerTitle}>
        <span>
          <b>Your shortcuts</b>
        </span>
        <span>See all</span>
      </div>
      <div className={classes.shortcutsContainer}>
        <div className={classes.shortcutContainer}>
          <img
            src={art}
            alt="myImage"
            style={{ width: "70px", height: "60px", borderRadius: "100px" }}
          />
          <span className={classes.shortcutName}>Art and drawing</span>
        </div>

        <div className={classes.shortcutContainer}>
          <img
            src={programming}
            alt="myImage"
            style={{ width: "70px", height: "60px", borderRadius: "100px" }}
          />
          <span className={classes.shortcutName}>Programming</span>
        </div>

        <div className={classes.shortcutContainer}>
          <img
            src={cybersport}
            alt="myImage"
            style={{ width: "70px", height: "60px", borderRadius: "100px" }}
          />
          <span className={classes.shortcutName}>Cybersport</span>
        </div>

        <div className={classes.shortcutContainer}>
          <img
            src={science}
            alt="myImage"
            style={{ width: "70px", height: "60px", borderRadius: "100px" }}
          />
          <span className={classes.shortcutName}>Science</span>
        </div>
      </div>
    </div>
  );
}
