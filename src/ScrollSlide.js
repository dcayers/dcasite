import { Slide } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    marginBottom: "1rem",
  },
});
export default function HideOnScroll(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger({ threshold: props.t });
  return (
    <>
      <Slide in={trigger} direction={props?.direction || "up"}>
        <div className={classes.root}>{props.children}</div>
      </Slide>
    </>
  );
}
