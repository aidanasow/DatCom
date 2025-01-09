import { useEffect, useState } from "react";
import { Typography, Container, ReviewCard } from "ui/index";
import classes from "./Reviews.module.scss";
import { StarIcon } from "assets/index";
import { useReviewsStore } from "./store/useReviewsStore";
import { PaginationComponent } from "modules/PaginationComponent/PaginationComponent";
import { Slider } from "modules/index";
import ReactPlayer from "react-player";
import { StarEmptyIcon } from "assets/icons/StarEmptyIcon";
import { Loader } from "..";

export const Reviews = () => {
  const [offset, setOffset] = useState(0);
  const [ratingData, setRatingData] = useState({});
  const limit = 6;

  const { reviews, count, video, rating, loading } = useReviewsStore(
    offset,
    limit
  );

  const onChange = (_, page) => {
    setOffset((page - 1) * limit);
  };

  useEffect(() => {
    if (!loading) {
      setRatingData(rating);
    }
  }, [rating, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="heading">Отзывы</Typography>
        <Typography variant="h3" weight="semiBold" className={classes.semiText}>
          Отзывы студентов и их родителей о процессе поступления и обучения за
          рубежом
        </Typography>
        <div className={classes.reviewWrapper}>
          <div className={classes.starWrapper}>
            {Array.from({ length: 5 }).map((_, index) =>
              index < ratingData?.average ? (
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
          <div className={classes.reviewData}>
            <Typography weight="regular">{ratingData?.average}</Typography>
            <Typography color="gray2">{reviews.length} оценок</Typography>
          </div>
        </div>

        <div className={classes.cardWrapper}>
          {reviews.map((item, key) => (
            <ReviewCard data={item} key={key} />
          ))}
        </div>

        <PaginationComponent count={count} onChange={onChange} />

        <div>
          <Typography variant="heading">Видео-отзывы</Typography>
          <div>
            <Slider
              amount={3}
              sliderList={video}
              renderSlide={(item) => (
                <div className={classes.youtube}>
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url={item.link}
                    playIcon={
                      <svg
                        width="52"
                        height="36"
                        viewBox="0 0 52 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M50.0697 5.615C49.7761 4.52971 49.2032 3.54029 48.4082 2.74526C47.6132 1.95022 46.6238 1.37732 45.5385 1.0836C41.5653 0 25.5745 0 25.5745 0C25.5745 0 9.58293 0.0327999 5.60973 1.1164C4.52443 1.41014 3.53501 1.98307 2.74001 2.77814C1.94502 3.57321 1.37217 4.56267 1.07853 5.648C-0.123273 12.7076 -0.589473 23.4648 1.11153 30.242C1.4052 31.3273 1.97806 32.3167 2.77306 33.1117C3.56805 33.9068 4.55745 34.4797 5.64273 34.7734C9.61593 35.857 25.6071 35.857 25.6071 35.857C25.6071 35.857 41.5981 35.857 45.5711 34.7734C46.6564 34.4797 47.6459 33.9068 48.4409 33.1118C49.2359 32.3168 49.8088 31.3273 50.1025 30.242C51.3701 23.1724 51.7607 12.4218 50.0697 5.615Z"
                            fill="#E11414"
                          />
                          <path
                            d="M20.4849 25.6118L33.7505 17.9282L20.4849 10.2446V25.6118Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="51.201" height="36" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    light
                    playing
                    controls
                  />
                </div>
              )}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
