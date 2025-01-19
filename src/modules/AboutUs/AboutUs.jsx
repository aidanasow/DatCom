import classes from "./AboutUs.module.scss";
import { Typography } from "ui/index";
import { useAboutUsStore } from "./store/useAboutUsStore";
import { useEffect, useState } from "react";
import { Loader } from "pages/index";

export const AboutUs = () => {
  const { data } = useAboutUsStore();


  if (data.length === 0) {
    return <div></div>;
  }

  return (
    <div className={classes.block}>
      <div className={classes.block_left}>
          <img src={data?.image} alt={data?.title} />
      </div>
      <div className={classes.block_right}>
        <Typography upp="upp" weight="bold" variant="h2">
          {data?.title}
        </Typography>
        <Typography className={classes.desc}>
          {data?.description}
        </Typography>
      </div>
    </div>
  );
};
