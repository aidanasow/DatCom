import { useRef, useEffect, useState } from "react";
import classes from "./Contacts.module.scss";
import { Typography } from "ui/index";
import { useContactsStore } from "./store/useContactsStore";
import {
    ArrowLeft,
    ArrowRight,
    ClockIcon,
    InstagramIcon,
    LocationIcon,
    PhoneIcon,
    TelegramIcon,
} from "assets/index";
import { useMediaQuery } from "utils/helpers/useMedia";
import { useTranslation } from "react-i18next";

export const Contacts = () => {
    const { contacts } = useContactsStore();
    const { t } = useTranslation();
    const { shift, address, phonenumber, instagram, telegram, geo } = contacts || {};
    const isTablet = useMediaQuery("(max-width: 900px)");
    const [state, setState] = useState(false);

    const blockLeftRef = useRef(null);
    const blockRightRef = useRef(null);

    useEffect(() => {
        if (blockLeftRef.current && blockRightRef.current) {
            blockRightRef.current.style.height = `${blockLeftRef.current.offsetHeight}px`;
        }
    }, [contacts, state, isTablet]);

    const openContacts = () => {
        setState(!state);
    };
    return (
        <>
            <Typography variant="heading">{t("titles.contacts")}</Typography>
            <div className={classes.block}>
                <div
                    ref={blockLeftRef}
                    className={`${classes.block_left} ${state ? classes.block_left_active : ""}`}
                >
                    <div className={classes.block_left_info}>
                        <div className={`${classes.iconBlock} ${classes.changeIcon}`}>
                            <ClockIcon size={50}/>
                        </div>
                        <div className={classes.infoBlock}>
                            <Typography variant="h4" color="white" weight="bold">
                                {t("contacts.time")}:
                            </Typography>
                            <Typography color="white">
                                {shift ? shift : "No shift provided"}
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.block_left_info}>
                        <div className={`${classes.iconBlock} ${classes.changeIcon}`}>
                            <LocationIcon size={50} />
                        </div>
                        <div className={classes.infoBlock}>
                            <Typography variant="h4" color="white" weight="bold">
                                {t("contacts.address")}:
                            </Typography>
                            <Typography color="white">
                                {address ? address : "No address provided"}
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.block_left_info}>
                        <div className={`${classes.iconBlock} ${classes.changeIcon}`}>
                            <PhoneIcon color={"white"} size={50}/>
                        </div>
                        <div className={classes.infoBlock}>
                            <Typography variant="h4" color="white" weight="bold">
                                {t("contacts.phone")}:
                            </Typography>
                            {phonenumber &&
                                phonenumber.length > 0 &&
                                phonenumber.map((number, key) => (
                                    <Typography color="white" key={key}>
                                        {number.phonenumber}
                                    </Typography>
                                ))}
                        </div>
                    </div>
                    <div className={classes.block_left_info}>
                        <div className={`${classes.iconBlock} ${classes.changeIcon}`}>
                            <InstagramIcon />
                        </div>
                        <div className={classes.infoBlock}>
                            <Typography variant="h4" color="white" weight="bold">
                                {t("contacts.insta")}:
                            </Typography>
                            <Typography color="white">
                                <a href={instagram} target="_blank" rel="noreferrer">
                                    datcom_edu
                                </a>
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.block_left_info}>
                        <div className={`${classes.iconBlock} ${classes.changeIcon}`}>
                            <TelegramIcon />
                        </div>
                        <div className={classes.infoBlock}>
                            <Typography variant="h4" color="white" weight="bold">
                                {t("contacts.telegram")}:
                            </Typography>
                            <Typography color="white">
                                <a href={telegram} target="_blank" rel="noreferrer">
                                    datcom_edu
                                </a>
                            </Typography>
                        </div>
                    </div>
                </div>
                {isTablet && (
                    <div
                        className={`${classes.miniBlock} ${state ? classes.miniBlock_active : ""}`}
                        onClick={openContacts}
                    >
                        {!state ? <ArrowRight /> : <ArrowLeft />}
                    </div>
                )}
                <div ref={blockRightRef} className={classes.block_right}>
                   <iframe
                            className={classes.map}
                            src={contacts?.geo}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                </div>
            </div>
        </>
    );
};
