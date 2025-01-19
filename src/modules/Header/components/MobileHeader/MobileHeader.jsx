import { BurgerMenuIcon, DatComLogo } from "assets/index";
import classes from "./MobileHeader.module.scss";
import { Link, useLocation } from "react-router-dom";
import { SwitchLanguage } from "../SwitchLanguage/SwitchLanguage";
import { useEffect, useRef, useState } from "react";
import { OpenMenu } from "./components/OpenMenu";
import {PATHS} from "utils/constants/Constants.jsx";
import {Typography} from "ui/Typography/Typography.jsx";
import {Button} from "ui/Button/Button.jsx";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "utils/helpers/useMedia.js";

export const MobileHeader = () => {
  const [isClose, setIsClose] = useState(true);
  const nav = useLocation();
  const menuRef = useRef(null);
  const {t}=useTranslation();
  const isMobile = useMediaQuery('(max-width: 650px)');
  useEffect(() => {
    setIsClose(true);
  }, [nav.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsClose(true);
      }
    };

    if (!isClose) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isClose]);

  return (
    <header className={classes.block}>
      <div className={classes.block_logo}>
        <Link to="/">
          <DatComLogo />
        </Link>
      </div>
      <div className={classes.block_right}>
        {!isMobile && (
            <Button size="medium">
              <Link to={PATHS.form}>
                <Typography weight="regular">{t("buttonsText.request")}</Typography>
              </Link>
            </Button>
        )}
        <div>
          <SwitchLanguage />
        </div>
        <div className={classes.block_burger} onClick={() => setIsClose(false)}>
          <BurgerMenuIcon />
        </div>
      </div>
      <OpenMenu isClose={isClose} setIsClose={setIsClose} menuRef={menuRef} />
    </header>
  );
};
