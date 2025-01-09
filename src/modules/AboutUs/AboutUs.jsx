import classes from "./AboutUs.module.scss";
import { Typography } from "ui/index";
import { useAboutUsStore } from "./store/useAboutUsStore";
import { useEffect, useState } from "react";
import { Loader } from "pages/index";

export const AboutUs = () => {
  const { data, loading } = useAboutUsStore();
  const [aboutUs, setAboutUs] = useState();

  useEffect(() => {
    if (!loading) {
      setAboutUs(data);
    }
  }, [data, loading]);

  if (loading) {
    return <Loader />;
  }

  if (!aboutUs || aboutUs.length === 0) {
    return <div></div>;
  }

  return (
    <div className={classes.block}>
      <div className={classes.block_left}>
          <img src={aboutUs[0].image} alt={aboutUs[0].title} />
      </div>
      <div className={classes.block_right}>
        <Typography upp="upp" weight="bold" variant="h2">
          {aboutUs[0].title}
        </Typography>
        <Typography className={classes.desc}>
          {aboutUs[0].description}
        </Typography>
      </div>
    </div>
  );
};
