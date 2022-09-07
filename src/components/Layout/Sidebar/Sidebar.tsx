import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MdAdd, MdPeopleAlt, MdPersonPin } from "react-icons/md";
import { Colors } from "utils/consts";
import styles from "./Sidebar.module.scss";

const Sidebar = () => (
  <nav style={{ background: Colors.Sidebar, height: "100%" }}>
    <List>
      <ListItem disablePadding className={styles.List}>
        <ListItemButton className={styles.Button}>
          <ListItemText primary="MEMBERS" />
          <MdAdd size={20} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding className={styles.List}>
        <ListItemButton className={styles.Button}>
          <MdPeopleAlt size={20} />
          <ListItemText primary="Member list" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding className={styles.List}>
        <ListItemButton className={styles.Button}>
          <MdPersonPin size={20} />
          <ListItemText primary="Match list" />
        </ListItemButton>
      </ListItem>
    </List>
  </nav>
);

export default Sidebar;
