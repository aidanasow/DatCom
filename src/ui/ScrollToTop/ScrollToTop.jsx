import {useEffect, useState} from "react";
import ArrowTop from "assets/icons/ArrowTop.jsx";
import classes from  "./ScrollToTop.module.scss";
import whatsappImg from "assets/images/WhatsApp.png";

export const ScrollToTop = () => {
    const [showArrowTop, setShowArrowTop] = useState(false);

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
            <a href={"https://wa.me/+996701262677"}
               target="_blank" rel="noopener noreferrer"
               className={classes.whatsAppIcon}>
                <img src={whatsappImg} alt={"WA"}/>
            </a>
            {showArrowTop && (
                <div className={classes.arrowTopIcon} onClick={handleArrowTopClick}>
                    <ArrowTop color={"white"}/>
                </div>
            )}
        </div>
    );
};
