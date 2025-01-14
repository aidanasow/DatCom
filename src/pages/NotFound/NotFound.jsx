import classes from "./NotFound.module.scss";
import { Typography, Container, Button } from "ui/index";
import NotFoundImage from "assets/images/notFound.png";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

export const NotFound = () => {
  const {t}=useTranslation();
  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.imgBlock}>
          <img src={NotFoundImage} alt="Not Found" className={classes.image} />{" "}
        </div>

        <div className={classes.infoBlock}>
          <Typography variant="h1" weight="bold" upp="upp">
            {t("titles.notFound")}
          </Typography>
          <Typography variant="h5" color="black">
            {t("titles.notFound2")}
          </Typography>

          <Button variant="primary" size="medium" className={classes.btn}>
            <Link to="/">
              <Typography weight="regular">{t("buttonsText.goToHome")}</Typography>
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};
