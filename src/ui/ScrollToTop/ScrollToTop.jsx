import {useEffect, useState} from "react";
import ArrowTop from "assets/icons/ArrowTop.jsx";
import classes from  "./ScrollToTop.module.scss";
import whatsappImg from "assets/images/WhatsApp.png";
import {useContactsStore} from "modules/Contacts/store/useContactsStore.js";
import ScrollIcon from "assets/icons/ScrollIcon.jsx";

export const ScrollToTop = () => {
    const [showArrowTop, setShowArrowTop] = useState(false);
    const {phone}=useContactsStore();
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
