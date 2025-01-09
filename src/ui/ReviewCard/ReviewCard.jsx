import { StarEmptyIcon } from "assets/icons/StarEmptyIcon";
import { Typography } from "..";
import classes from "./ReviewCard.module.scss";
import { StarIcon } from "assets/index";

export const ReviewCard = ({ data, short }) => {
  const totalStars = 5;

  return (
    <div className={`${classes.block} ${short ? classes.short : ""}`}>
      <div className={classes.block_top}>
        <div className={classes.studentPhoto}>
          <img src={data.image} alt={data.name} />
        </div>
        <div className={classes.studentInfo}>
          <Typography variant="h4" weight="regular" truncate={short? 15:0}>
            {data.full_name}
          </Typography>
          <Typography className={classes.studentInfo_study}>
            {data.university}
          </Typography>
          <div className={classes.rate}>
            {Array.from({ length: totalStars }).map((_, index) =>
              index < data.rating ? (
                <div key={index} className={classes.star}>
                  <StarIcon />
                </div>
              ) : (
                <div key={index} className={classes.star}>
                  <StarEmptyIcon />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div >

        <Typography variant="h6" truncate={short? 130: 0}>{data.text}</Typography>
      </div>
    </div>
  );
};
