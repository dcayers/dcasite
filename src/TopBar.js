import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as LogoIcon } from "./logoIcon.svg";
const useStyles = makeStyles({
  root: {
    color: "#e9b8b0",
    border: 0,
    backgroundColor: "#252422",
    padding: 0,
    boxShadow: "none",
  },
  tb: {
    boxShadow: "none",
    padding: "1rem",
  },
});

export default function TopBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.tb}>
        <LogoIcon />
      </Toolbar>
    </AppBar>
  );
}
