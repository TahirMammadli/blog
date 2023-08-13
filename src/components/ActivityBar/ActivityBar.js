import classes from "./ActivityBar.module.css";

export default function ActivityBar() {
  return (
    <div className={classes.activityBarContainer}>
      <div className={classes.titleContainer}>
        <span className={classes.activityText}><b>Activity</b></span>
        <span>See all</span>
      </div>
    </div>
  );
}
