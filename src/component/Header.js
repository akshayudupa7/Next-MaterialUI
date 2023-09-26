"use client";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Badge from "@mui/icons-material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import SideDrawer from "./SideDrawer";
import Notification from "../component/Notification";
import Modals from "../component/Modals";
const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 2,
  },
  small: {
    padding: "20px 0px",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
      <SideDrawer>

          <MenuIcon />
      </SideDrawer>

        <Typography className={classes.title} variant="h4">
          Blogging Website
        </Typography>
        <Notification />
        <Modals/>
      </Toolbar>
      <Divider />
      <Typography className={classes.small} variant="subtitle1">
        Express your emotions through words
      </Typography>
    </>
  );
}

export default Header;
