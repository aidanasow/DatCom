import { ClockIcon, DatComLogo, LocationIcon, PhoneIcon } from "assets/index";
import classes from "./Footer.module.scss";
import {navigationData, PATHS} from "utils/constants/Constants";
import { Link } from "react-router-dom";
import { Container, SocialMedia, Typography } from "ui/index";
import {useContactsStore} from "modules/Contacts/store/useContactsStore.js";
import novaLogo from "assets/images/novaLogo.png";
import {useTranslation} from "react-i18next";

export const Footer = () => {
  const {contacts, policy} = useContactsStore();
  const {t}=useTranslation();

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.footerTop}>
          <div className={classes.logo}>
            <Link to={PATHS.home}>
              <DatComLogo />
            </Link>

          </div>
          <div className={classes.navigation}>
            {navigationData.map((nav, key) => (
              <Link to={nav.path} key={key}>
                <Typography weight="regular">{t(nav.nav)}</Typography>
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
                {contacts?.address}
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
                {contacts?.shift}
              </Typography>
            </div>
          </div>
          <div className={classes.connection}>
            <div className={classes.phoneIcon}>
              <PhoneIcon />
            </div>
            <div className={classes.connection_list}>
              {contacts?.phonenumber?.map((item, index) => (
                <a href={`tel:${item.phonenumber}`}   key={index} className={classes.phoneItem}>
                  <Typography weight="regular">{item.phonenumber}</Typography>
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
            <a href={policy} target="_blank">{t("nav.policy")}</a>
          </Typography>
          <a className={classes.ourLogo} href="#" >
            <img src={novaLogo} alt="made by Novalabs"/>
          </a>
        </div>
      </Container>
    </div>
  );
};
