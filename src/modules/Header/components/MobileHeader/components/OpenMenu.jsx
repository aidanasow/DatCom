import { Link, useLocation } from "react-router-dom";
import classes from "./OpenMenu.module.scss";
import { DatComLogo } from "assets/index";
import { Button, Typography } from "ui/index";
import { navigationData, PATHS } from "utils/constants/Constants";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {useContactsStore} from "modules/Contacts/store/useContactsStore.js";

export const OpenMenu = ({ isClose, setIsClose, menuRef }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const {contacts} = useContactsStore();

  const scrollToElement = () => {
    const element = document.getElementById("services");
    if (element) {
      const offset = 140;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementPosition - offset;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (location.pathname === "/services") {
      scrollToElement();
    } else {
      scrollToTop();
    }
  }, [location.pathname]);

  if (isClose === undefined) return null;

  return (
    <div className={`${classes.backdrop} ${isClose && classes.menuClose}`}>
      <div className={classes.nav} ref={menuRef}>
        <div className={classes.closeBtn} onClick={() => setIsClose(true)}>
          <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                  id="Vector-47"
                  d="M0.552983 16.387C0.26009 16.6799 0.26009 17.1548 0.552983 17.4476C0.845876 17.7405 1.32075 17.7405 1.61364 17.4476L0.552983 16.387ZM9.53031 9.53098C9.8232 9.23809 9.8232 8.76321 9.53031 8.47032C9.23742 8.17743 8.76254 8.17743 8.46965 8.47032L9.53031 9.53098ZM8.46965 8.47032C8.17676 8.76321 8.17676 9.23809 8.46965 9.53098C8.76254 9.82387 9.23742 9.82387 9.53031 9.53098L8.46965 8.47032ZM17.447 1.61431C17.7399 1.32142 17.7399 0.846548 17.447 0.553654C17.1541 0.260761 16.6792 0.260761 16.3863 0.553654L17.447 1.61431ZM9.53031 8.47032C9.23742 8.17743 8.76254 8.17743 8.46965 8.47032C8.17676 8.76321 8.17676 9.23809 8.46965 9.53098L9.53031 8.47032ZM16.3863 17.4476C16.6792 17.7405 17.1541 17.7405 17.447 17.4476C17.7399 17.1548 17.7399 16.6799 17.447 16.387L16.3863 17.4476ZM8.46965 9.53098C8.76254 9.82387 9.23742 9.82387 9.53031 9.53098C9.8232 9.23809 9.8232 8.76321 9.53031 8.47032L8.46965 9.53098ZM1.61364 0.553654C1.32075 0.260761 0.845876 0.260761 0.552983 0.553654C0.26009 0.846548 0.26009 1.32142 0.552983 1.61431L1.61364 0.553654ZM1.61364 17.4476L9.53031 9.53098L8.46965 8.47032L0.552983 16.387L1.61364 17.4476ZM9.53031 9.53098L17.447 1.61431L16.3863 0.553654L8.46965 8.47032L9.53031 9.53098ZM8.46965 9.53098L16.3863 17.4476L17.447 16.387L9.53031 8.47032L8.46965 9.53098ZM9.53031 8.47032L1.61364 0.553654L0.552983 1.61431L8.46965 9.53098L9.53031 8.47032Z"
                  fill="#262626"
              />
            </g>
          </svg>
        </div>
        <div className={classes.innerBlock}>

          <div className={classes.innerBlock_logo}>
            <Link to="/">
              <DatComLogo/>
            </Link>
          </div>
          <div className={classes.innerBlock_nav}>
            {navigationData.map((item, key) => (
                <div key={key}>
                  <Link to={item.path} key={key} onClick={scrollToElement}>
                    <Typography weight="regular">{t(item.nav)}</Typography>
                  </Link>
                </div>
            ))}
          </div>
          <Button size="medium">
            <Link to={PATHS.form}>
              <Typography weight="regular">{t("buttonsText.request")}</Typography>
            </Link>
          </Button>
          <div className={classes.phone}>

            {contacts.phonenumber && contacts.phonenumber.length > 0 ? (
                <a href={`tel:${contacts.phonenumber[0].phonenumber}`}>
                  <Typography weight={"smallBold"}>{contacts.phonenumber[0].phonenumber}</Typography>
                </a>
            ) : (
                <Typography>+996 505‒28‒63‒85</Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
