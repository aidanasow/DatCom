import { Link } from "react-router-dom";
import { Typography } from "..";
import classes from "./CustomCard.module.scss";
import { ArrowMore } from "assets/index";
import {useTranslation} from "react-i18next";

const cardVariant = {
  country: {
    card: classes.country,
    imageBlock: classes.countryImage,
    desc: classes.countryDesc,
    btn: classes.countryBtn,
  },
  students: {
    card: classes.students,
    imageBlock: classes.studentsImage,
    desc: classes.studentsDesc,
    btn: classes.studentsBtn,
  },
};

export const CustomCard = ({
  variant,
  image,
  title,
  description,
  link,
  modal,
    isUni=false
}) => {
  const cardConfig = cardVariant[variant];
  const {t}=useTranslation();
  if (!cardConfig) {
    return null;
  }

  const { card, imageBlock, desc, btn } = cardConfig;

  return (
    <div className={`${classes.card} ${card}`}>
      <div className={imageBlock}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.infoBlock}>
        <Typography variant="h3" weight="regular" truncate={isUni? 30:15} className={`${isUni? classes.bigHead : classes.smallHead}`}>
          {title}
        </Typography>
        <Typography className={`${desc} ${isUni? classes.uniDesc: ""}`}>{description}</Typography>
        {modal ? (
          <Typography
            weight="regular"
            pointer="pointer"
            className={btn}
            onClick={modal}
          >
            {t("buttonsText.details")} <ArrowMore />
          </Typography>
        ) : (
          <div className={classes.btnContainer}>
            <Link to={link}>
              <Typography weight="regular" pointer="pointer" className={btn}>
                {t("buttonsText.details")} <ArrowMore />
              </Typography>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
