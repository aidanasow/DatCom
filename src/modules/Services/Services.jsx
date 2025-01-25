import { PATHS } from "utils/constants/Constants";
import classes from "./Services.module.scss";
import {Button, Container, Typography} from "ui/index";
import {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
import { useServicesStore } from "./store/useServicesStore";

export const Services = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const { services } = useServicesStore();
  const [descriptions, setDescriptions] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (services.length > 0 && services[index]?.included) {
      const servicesArray = services[index].included.map(
          (item) => item.title
      );
      setDescriptions(servicesArray);
      setImage(services[index].image);
    }
  }, [services, index]);


  return (
      <Container>
        <Typography variant="heading">{t("titles.services")}</Typography>
        <div className={classes.block} >
          <div className={classes.block_top}>
            {services?.map((item, key) => (
                <div
                    className={`${classes.title} ${index === key ? classes.active : ""}`}
                    key={key}
                    onClick={() => setIndex(key)}
                >
                  <Typography weight="regular">{item.title}</Typography>
                </div>
            ))}
          </div>
          <div className={classes.block_bottom}>
            <div className={classes.left}>
              <Typography
                  className={classes.left_title}
                  variant="h3"
                  weight="regular"
              >
                {t("titles.aboutService")}
              </Typography>
              <ul>{descriptions.map((item)=>(
                  <Typography>{item}</Typography>
              ))}</ul>
            </div>
            <div className={classes.right}>
              <div className={classes.rightImage}>
                <img src={image} alt="Image"/>
              </div>
              <div className={classes.btnBlock}>
                <Button variant="secondary" fullWidth size="default">
                  <Link to={PATHS.form}>
                    <Typography weight="regular">{t("buttonsText.request")}</Typography>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

  );
};
