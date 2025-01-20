import {useEffect, useState} from "react";
import classes from  "./ScrollToTop.module.scss";
import {useContactsStore} from "modules/Contacts/store/useContactsStore.js";
import {ScrollIcon, whatsappImg} from "assets/index";
import {useTranslation} from "react-i18next";
import {useFormStore} from "pages/Form/store/useFormStore.js";

export const ScrollToTop = () => {
    const [showArrowTop, setShowArrowTop] = useState(false);
    const {phone, fetchContacts, fetchPolicy, fetchNovaLabsLink }=useContactsStore();
    const {fetchMainContact}=useFormStore();
    const {i18n}=useTranslation();
    const handleArrowTopClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowArrowTop(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        fetchContacts();
        fetchPolicy();
        fetchNovaLabsLink();
        fetchMainContact();
    }, [i18n.language]);

    return (
        <div className={classes.iconContainer}>
            <a href={`https://wa.me/${phone}`}
               target="_blank" rel="noopener noreferrer"
               className={classes.whatsAppIcon}>
                <img src={whatsappImg} alt={"WA"}/>
            </a>
            {showArrowTop && (
                <div className={classes.arrowTopIcon} onClick={handleArrowTopClick}>
                   <ScrollIcon/>
                </div>
            )}
        </div>
    );
};
