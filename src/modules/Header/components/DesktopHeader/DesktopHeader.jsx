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
    const { phone } = useContactsStore();
    const [showTopHeader, setShowTopHeader] = useState(true);

    const handleScroll = () => {
        setShowTopHeader(window.scrollY === 0)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header className={classes.header}>
                <div className={`${showTopHeader? classes.topHeader: classes.topHeaderNone}`}>
                    <div>
                        {phone && <Typography>{phone}</Typography> }
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
                    <Link to={nav.path} key={key} className={classes.headerNav}>
                        <Typography weight="regular">{t(nav.nav)}</Typography>
                    </Link>
                ))}
                <Button size="medium">
                    <Link to={PATHS.form}>
                        <Typography weight="regular"> {t("buttonsText.request")}</Typography>
                    </Link>
                </Button>
            </nav>
        </header>
    );
};
