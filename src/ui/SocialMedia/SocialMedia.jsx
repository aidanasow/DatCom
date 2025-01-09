import { SocialMediaData } from "utils/constants/Constants";
import classes from "./SocialMedia.module.scss";

export const SocialMedia = ({ header }) => {
  return (
    <div className={classes.block}>
      {SocialMediaData.map((media, key) => (
        <a
          href={media.link}
          key={key}
          className={`${header && classes.header} ${classes.link}`}
        >
          {media.icon}
        </a>
      ))}
    </div>
  );
};
