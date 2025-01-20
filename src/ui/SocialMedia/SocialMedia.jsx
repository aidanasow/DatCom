import classes from "./SocialMedia.module.scss";
import {useContactsStore} from "modules/Contacts/store/useContactsStore.js";
import {InstagramIcon} from "assets/icons/InstagramIcon.jsx";
import {TelegramIcon} from "assets/icons/TelegramIcon.jsx";
import {WhatsappIcon} from "assets/icons/WhatsappIcon.jsx";
export const SocialMedia = ({ header }) => {
  const {contacts,phone} = useContactsStore();

  const SocialMediaData = [
    { icon: <InstagramIcon />, link: contacts.instagram },
    { icon: <TelegramIcon />, link: contacts.telegram },
    {icon: <WhatsappIcon />, link: `https://wa.me/${phone}` },
  ];

  return (
    <div className={classes.block}>
      {SocialMediaData.map((media, key) => (
        <a
          href={media.link}
          key={key}
          className={`${header && classes.header} ${classes.link}`}
          target="_blank"
        >
          {media.icon}
        </a>
      ))}
    </div>
  );
};
