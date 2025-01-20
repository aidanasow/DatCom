import { CircularProgress } from "@mui/material";
import classes from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={classes.block}>
      <CircularProgress size={"70px"} />
    </div>
  );
};
