import classes from "./SwitchLanguage.module.scss";
import i18n from "utils/I18next/I18n";
import { EarthIcon, RusIcon, KGIcon } from "assets/index";
import { useState, useCallback } from "react";
import { Typography } from "ui/Typography/Typography.jsx";
import ArrowTop from "assets/icons/ArrowTop.jsx";
import ArrowBottom from "assets/icons/ArrowBottom.jsx";


export const SwitchLanguage = () => {
    const [activeList, setActiveList] = useState(false);

    const changeLanguage = useCallback((lng) => {
        i18n.changeLanguage(lng);
        setActiveList(false);
    }, []);

    const languages = [
        { code: "ru", label: "Рус", icon: <RusIcon /> },
        { code: "en", label: "Eng", icon: <KGIcon /> },
    ];

    const selectedLanguage = languages.find((lang) => lang.code === i18n.language);

    return (
        <div className={classes.headerSelect}>
            <div
                className={classes.selectedOption}
                onClick={() => setActiveList((prev) => !prev)}
            >
                <EarthIcon />
                <div className={classes.selectedDown}>
                    <Typography variant="h6">{selectedLanguage?.label}</Typography>
                    {activeList ? <ArrowTop /> : <ArrowBottom />}
                </div>
            </div>
            <ul className={`${classes.optionList} ${activeList ? classes.open : ""}`}>
                {languages.map((lang) => (
                    <li
                        key={lang.code}
                        className={classes.langOption}
                        onClick={() => changeLanguage(lang.code)}
                    >
                        {lang.icon}
                        <Typography variant="h6">{lang.label}</Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};
