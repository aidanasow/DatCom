import { ClockIcon, DatComLogo, LocationIcon, PhoneIcon } from "assets/index";
import classes from "./Footer.module.scss";
import { navigationData, PhoneNumberData } from "utils/constants/Constants";
import { Link } from "react-router-dom";
import { Container, SocialMedia, Typography } from "ui/index";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.footerTop}>
          <div className={classes.logo}>
            <DatComLogo />
          </div>
          <div className={classes.navigation}>
            {navigationData.map((nav, key) => (
              <Link to={nav.path} key={key}>
                <Typography weight="regular">{nav.nav}</Typography>
              </Link>
            ))}
          </div>
          <div className={classes.workInfo}>
            <div className={classes.workInfo_wrap}>
              <div className={classes.locationIcon}>
                <LocationIcon />
              </div>
              <Typography
                weight="regular"
                className={classes.workInfo_wrap_text}
              >
                БЦ Victory,
                <br />
                ул. Ибраимова 103, <br />2 этаж; правое крыло
              </Typography>
            </div>
            <div
              className={`${classes.workInfo_wrap} ${classes.workInfo_clock}`}
            >
              <div className={classes.workInfo_wrap_icon}>
                <ClockIcon />
              </div>
              <Typography
                className={classes.workInfo_wrap_text}
                weight="regular"
              >
                c 10:00 до 18:00
              </Typography>
            </div>
          </div>
          <div className={classes.connection}>
            <div className={classes.phoneIcon}>
              <PhoneIcon />
            </div>
            <div className={classes.connection_list}>
              {PhoneNumberData.map((item, key) => (
                <a href="#" key={key} className={classes.phoneItem}>
                  <Typography weight="regular">{item}</Typography>
                </a>
              ))}
            </div>
          </div>
          <div className={classes.social}>
            <SocialMedia />
          </div>
        </div>
      </Container>
      <div className={classes.line} />
      <Container>
        <div className={classes.footerBottom}>
          <Typography variant="smallBody">
            <a href="#">Политика конфиденциальности</a>
          </Typography>
          <Typography variant="smallBody">
            ЗДЕСЬ ДОЛЖНО БЫТЬ НАЗВАНИЕ НАШЕЙ КОМАНДЫ😅
          </Typography>
        </div>
      </Container>
    </div>
  );
};
