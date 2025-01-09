import { Button, Container, Typography } from "ui/index";
import classes from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PATHS } from "utils/constants/Constants";
import { useEffect, useState } from "react";
import { useApiStore } from "utils/requester/requester";
import { Loader } from "pages/index";
import imageEmpty from "assets/images/empty.jpg";
import {useMediaQuery} from "utils/helpers/useMedia.js";

export const Hero = () => {
  const { i18n, t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isMobile=useMediaQuery("(max-width: 500px)");
  const { fetchData } = useApiStore();

  useEffect(() => {
    const fetchMainPage = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetchData(`/main-info/main-page/`);
        setData(response);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMainPage(i18n.language);
  }, [fetchData, i18n.language]);

  if (loading) {
    return <Loader />;
  }

  const backgroundImage = data?.length > 0 ? data[0]?.image : imageEmpty;

  return (
    <div
      className={classes.hero}
      style={{
        "--background-image": backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <Container>
        <div className={classes.textBlock}>
          <Typography
            color={isMobile? "black": "white"}
            weight="bold"
            variant="h1"
            className={classes.title}
          >
            {data.length > 0 && data[0].title}
          </Typography>
          <Typography className={classes.desc} variant="h4" color={isMobile? "black": "white"}>
            {data.length > 0 && data[0].description}
          </Typography>
          <Button size="medium" fullWidth={isMobile}>
            <Link to={PATHS.form}>
              <Typography>{t("header.btn")}</Typography>
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};
