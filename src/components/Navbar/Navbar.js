import classes from "./Navbar.module.css";
import catLogo from "./Wojak_cropped.jpg";

export default function Navbar() {
    return(
  <div className={classes.navbarContainer}>
    <div className={classes.logoContainer}>
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
        </div>
      </div>
      <ul className={classes.navbarList}>
        <li>Home</li>
        <li>Explore icon</li>
        <li>Chat icon</li>
        <li>Home</li>
      </ul>
    </div>
    <div className={classes.profileContainer}>
      <div className={classes.profileLink}>Profile Link</div>
      <div className={classes.logoutBtn}>Logout</div>
    </div>
  </div>)
}
