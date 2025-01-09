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
import { useState } from "react";

export const Contacts = () => {
  const { contacts } = useContactsStore();
  const { shift, address, phoneNumber, instagram, telegram } = contacts || {};
  const isTablet = useMediaQuery("(max-width: 900px)");

  const [state, setState] = useState(false);

  const openContacts = () => {
    setState(!state);
  };

  return (
    <div className={classes.block}>
      <div
        className={`${classes.block_left} ${
          state ? classes.block_left_active : ""
        }`}
      >
        <div className={classes.block_left_info}>
          <div className={`${classes.iconBlock} ${classes.changeIcon} `}>
            <ClockIcon />
          </div>
          <div className={classes.infoBlock}>
            <Typography variant="h4" color="white" weight="bold">
              Время работы:
            </Typography>
            <Typography color="white">
              {shift ? shift : "No shift provided"}
            </Typography>
          </div>
        </div>
        <div className={classes.block_left_info}>
          <div className={`${classes.iconBlock} ${classes.changeIcon} `}>
            <LocationIcon />
          </div>
          <div className={classes.infoBlock}>
            <Typography variant="h4" color="white" weight="bold">
              Адрес:
            </Typography>
            <Typography color="white">
              {address ? address : "No address provided"}
            </Typography>
          </div>
        </div>
        <div className={classes.block_left_info}>
          <div className={`${classes.iconBlock} ${classes.changeIcon} `}>
            <PhoneIcon />
          </div>
          <div className={classes.infoBlock}>
            <Typography variant="h4" color="white" weight="bold">
              Телефон:
            </Typography>
            {phoneNumber &&
              phoneNumber.length > 0 &&
              phoneNumber.map((number, key) => (
                <Typography color="white" key={key}>
                  {number.phonenumber}
                </Typography>
              ))}
          </div>
        </div>
        <div className={classes.block_left_info}>
          <div className={`${classes.iconBlock} ${classes.changeIcon} `}>
            <InstagramIcon />
          </div>
          <div className={classes.infoBlock}>
            <Typography variant="h4" color="white" weight="bold">
              Инстаграм:
            </Typography>
            <Typography color="white">
              <a href={instagram} target="_blank">
                datcom_edu
              </a>
            </Typography>
          </div>
        </div>
        <div className={classes.block_left_info}>
          <div className={`${classes.iconBlock} ${classes.changeIcon} `}>
            <TelegramIcon />
          </div>
          <div className={classes.infoBlock}>
            <Typography variant="h4" color="white" weight="bold">
              Телеграм:
            </Typography>
            <Typography color="white">
              <a href={telegram} target="_blank">
                datcom_edu
              </a>
            </Typography>
          </div>
        </div>
      </div>
      {isTablet && (
        <div
          className={`${classes.miniBlock} ${
            state ? classes.miniBlock_active : ""
          }`}
          onClick={openContacts}
        >
          {!state ? <ArrowRight /> : <ArrowLeft />}
        </div>
      )}
      <div className={classes.block_right}>
        <iframe
          className={classes.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.697068557148!2d74.61568007617974!3d42.87923767114932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb75503e9feef%3A0xa079c9abc97cb6da!2zRGF0Q29tLdGD0YfQtdCx0LAg0LfQsCDQs9GA0LDQvdC40YbQtdC5!5e0!3m2!1sru!2skg!4v1732734310852!5m2!1sru!2skg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
