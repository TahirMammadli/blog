import classes from "./Navbar.module.css";
import catLogo from "./pepethefro128x128.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
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
        <li><HomeIcon style={{ color: '#1da1f2' }} size={43}/></li>
        <li><ExploreIcon/></li>
        <li><MessageIcon/></li>
        <li><NotificationsIcon/></li>
        <li><PeopleIcon/></li>
      </ul>
    </div>
    <div className={classes.profileContainer}>
      <div className={classes.profileLink}>Profile Link</div>
      <div className={classes.logoutBtn}>Logout</div>
    </div>
  </div>)
}
