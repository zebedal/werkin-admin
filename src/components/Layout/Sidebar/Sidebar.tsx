import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MdAdd, MdPeopleAlt, MdPersonPin } from "react-icons/md";
import logo from "assets/img/fake_logo.svg";
import { MdLogout } from "react-icons/md";
import styles from "./Sidebar.module.scss";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <nav className={styles.Nav}>
    <Box className={styles.MenuWrapper}>
      <Box className={styles.LogoWrapper}>
        <img src={logo} alt="getwerkin" />
      </Box>
      <List>
        <ListItem disablePadding className={styles.List}>
          <ListItemButton className={styles.Button}>
            <ListItemText primary="MEMBERS" />
            <MdAdd size={20} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className={styles.List}>
          <NavLink to="/" state={{ header: "Member list" }}>
            <ListItemButton className={styles.Button}>
              <MdPeopleAlt size={20} />
              <ListItemText primary="Member list" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding className={styles.List}>
          <NavLink to="/match" state={{ header: "Match list" }}>
            <ListItemButton className={styles.Button}>
              <MdPersonPin size={20} />
              <ListItemText primary="Match list" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Box>
    <div className={styles.LogoutWrapper}>
      <span>Logout</span>
      <MdLogout size={25} />
    </div>
  </nav>
);

export default Sidebar;
