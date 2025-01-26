import {useState} from "react";
import {Typography, Container, ReviewCard, Breadcrumbs} from "ui/index";
import classes from "./Reviews.module.scss";
import {StarIcon, StarEmptyIcon, PlayIcon} from "assets/index";
import {useReviewsStore} from "./store/useReviewsStore";
import {Slider, PaginationComponent} from "modules/index";
import ReactPlayer from "react-player";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "utils/helpers/useMedia.js";
import {UseSize} from "utils/helpers/useSize.jsx";

export const Reviews = () => {
    const {t} = useTranslation();
    const [offset, setOffset] = useState(0);
    const limit = 6;

    const {reviews, count, video, rating} = useReviewsStore(
        offset,
        limit
    );
    const {tablet, miniTab, laptop, phone}=UseSize();

    let cards = 2.8
    if (laptop) cards = 2.05
    if (tablet) cards = 1.72
    if (miniTab) cards = 1.4
    if (phone) cards = 1.5
    let space = 20;
    if (tablet) space = 16;

    const onChange = (_, page) => {
        setOffset((page - 1) * limit);
    };

    return (
        <>
        <Breadcrumbs breadcrumbKey={"reviews"}/>
        <div className={classes.wrapper}>
            <Container>
                <Typography variant="heading">{t("titles.reviews")}</Typography>
                <Typography variant="h3" weight="semiBold" className={classes.semiText}>
                    {t("titles.reviewsDet")}
                </Typography>
                <div className={classes.reviewWrapper}>
                    <div className={classes.starWrapper}>
                        {Array.from({length: 5}).map((_, index) =>
                            index < rating?.average ? (
                                <div key={index} className={classes.star}>
                                    <StarIcon/>
                                </div>
                            ) : (
                                <div key={index} className={classes.star}>
                                    <StarEmptyIcon/>
                                </div>
                            )
                        )}
                    </div>
                    <div className={classes.reviewData}>
                        <Typography weight="regular">{rating?.average}</Typography>
                        <Typography color="gray2">{reviews.length} {t("titles.ratings")}</Typography>
                    </div>
                </div>

                <div className={classes.cardWrapper}>
                    {reviews.map((item, key) => (
                        <ReviewCard data={item} key={key}/>
                    ))}
                </div>

                <PaginationComponent count={count} onChange={onChange}/>

                <div className={classes.youtubeWrapper}>

                    <Typography variant="heading">{t("titles.videoReviews")}</Typography>

                    <div>
                        <Slider
                            maxCards={cards}
                            spaceBetWeen={space}
                            sliderList={video}
                            renderSlide={(item) => (
                                <div className={classes.youtube}>
                                    <ReactPlayer
                                        width="100%"
                                        height="100%"
                                        style={{
                                            objectFit: "cover"
                                        }}
                                        url={item.link}
                                        playIcon={
                                            <PlayIcon/>
                                        }
                                        controls
                                        light
                                    />
                                </div>
                            )}
                        />
                    </div>
                </div>
            </Container>
        </div>
</>

)
    ;
};