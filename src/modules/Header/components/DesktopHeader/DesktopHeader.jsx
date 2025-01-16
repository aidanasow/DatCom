import { Button, SocialMedia, Typography } from "ui/index";
import classes from "./DesktopHeader.module.scss";
import { SwitchLanguage } from "../SwitchLanguage/SwitchLanguage";
import { DatComLogo } from "assets/index";
import { navigationData, PATHS } from "utils/constants/Constants";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useContactsStore } from "modules/Contacts/store/useContactsStore.js";

export const DesktopHeader = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { phone } = useContactsStore();
    const [showTopHeader, setShowTopHeader] = useState(true);

    const scrollToElement = () => {
        const element = document.getElementById("services");
        if (element) {
            const offset = 140;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
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

    const handleScroll = () => {
        setShowTopHeader(window.scrollY === 0)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (location.pathname === "/services") {
            scrollToElement();
        } else {
            scrollToTop();
        }
    }, [location.pathname]);


    return (
        <div className={classes.header}>
                <div className={`${showTopHeader? classes.topHeader: classes.topHeaderNone}`}>
                    <div>
                        {phone ? (
                            <Typography>{phone}</Typography>
                        ) : (
                            <Typography>+996 505‒28‒63‒85</Typography>
                        )}
                    </div>
                    <SocialMedia header />
                    <SwitchLanguage />
                </div>
            <nav className={classes.bottomHeader}>
                <div className={classes.logoBlock}>
                    <Link to="/">
                        <DatComLogo />
                    </Link>
                </div>
                {navigationData.map((nav, key) => (
                    <Link to={nav.path} key={key} onClick={scrollToElement}>
                        <Typography weight="regular">{t(nav.nav)}</Typography>
                    </Link>
                ))}
                <Button size="medium">
                    <Link to={PATHS.form}>
                        <Typography weight="regular"> {t("buttonsText.request")}</Typography>
                    </Link>
                </Button>
            </nav>
        </div>
    );
};
