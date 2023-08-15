import classes from "./ActivityBar.module.css";
import angryWojak from "./angryWojak.jpg";
import pepe from "./pepe.png";
import sovietBuilding from "./sovietBuilding.jpg";
import sovietBuilding2 from "./sovietBuilding3.jpg";
import soyjak from "./soyjak.png";
export default function ActivityBar() {
  return (
    <div className={classes.activityBarContainer}>
      <div className={classes.titleContainer}>
        <span className={classes.activityText}>
          <b>Activity</b>
        </span>
        <span>See all</span>
      </div>
      <div className={classes.activity}>
        <div>
          <img
            src={angryWojak}
            alt="myImage"
            className={classes.pfp}
            style={{ width: "50px", height: "50px", borderRadius: "100px" }}
          />
        </div>
        <div>
          <span className={classes.activityText}>
            theweedman started following you
            <span className={classes.minutesAgo}>5m</span>
          </span>
        </div>
        <div>
          <button className={classes.followButton}>Follow</button>
        </div>
      </div>
      <div className={classes.activity}>
        <div>
          <img
            src={pepe}
            alt="myImage"
            className={classes.pfp}
            style={{ width: "50px", height: "50px", borderRadius: "100px" }}
          />
        </div>
        <div>
          <span className={classes.activityText}>
            elon liked your photo
            <span className={classes.minutesAgo}>30m</span>
          </span>
        </div>
        <div>
          <img
            src={sovietBuilding}
            alt="myBuilding"
            className={classes.pfp}
            style={{ width: "50px", height: "50px", borderRadius: "100px" }}
          />
        </div>
      </div>
      <div>
        <span>
          <b>Yesterday</b>
        </span>
      </div>
      <div className={classes.activity}>
        <div>
          <img
            src={soyjak}
            alt="myBuilding"
            className={classes.pfp}
            style={{ width: "50px", height: "50px", borderRadius: "100px" }}
          />
        </div>
        <div>
          <span className={classes.activityText}> zucc liked your photo</span>
          <span className={classes.minutesAgo}>5m</span>
        </div>
        <div>
          <img
            src={sovietBuilding}
            alt="myBuilding"
            className={classes.pfp}
            style={{ width: "50px", height: "50px", borderRadius: "100px" }}
          />
        </div>
      </div>
      <div className={classes.activity}>
        <div>
          <img
            src={soyjak}
            alt="myBuilding"
            className={classes.pfp}
            style={{ width: "50px", height: "50px", borderRadius: "100px" }}
          />
        </div>
        <div>
          <span className={classes.activityText}>zucc liked your photo</span>
          <span className={classes.minutesAgo}>5m</span>
        </div>
        <div>
          <img
            src={sovietBuilding2}
            alt="myBuilding"
            className={classes.pfp}
            style={{ width: "50px", height: "50px", borderRadius: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}
