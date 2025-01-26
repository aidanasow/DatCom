import {useRef, useState} from "react";
import {Typography, Container, ReviewCard, Breadcrumbs} from "ui/index";
import classes from "./Reviews.module.scss";
import {StarIcon, StarEmptyIcon, PlayIcon} from "assets/index";
import {useReviewsStore} from "./store/useReviewsStore";
import {Slider, PaginationComponent} from "modules/index";
import ReactPlayer from "react-player";
import {Loader} from "..";
import {useTranslation} from "react-i18next";
import {UseSize} from "utils/helpers/useSize.jsx";

export const Reviews = () => {
    const {t} = useTranslation();
    const [offset, setOffset] = useState(0);
    const ref=useRef(null)
    const limit = 6;

    const {reviews, count, video, rating, loading} = useReviewsStore(offset, limit);

    const {tablet, phone, laptop, miniTab} = UseSize();

    let cards = 3
    if (laptop) cards = 2.5
    if (tablet) cards = 1.72
    if (miniTab) cards = 1.8
    if (phone) cards = 1.5
    let space = 20;
    if (tablet) space = 16;

    const onChange = (_, page) => {
        setOffset((page - 1) * limit);
    };

    if (loading) {
        return <Loader/>;
    }
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
                                    <div key={index} >
                                        <StarIcon/>
                                    </div>
                                ) : (
                                    <div key={index} >
                                        <StarEmptyIcon/>
                                    </div>
                                )
                            )}
                        </div>
                        <div className={classes.reviewData}>
                            <Typography weight="regular">{rating?.average}</Typography>
                            <Typography color="gray2">{reviews?.length} {t("titles.ratings")}</Typography>
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
                                            ref={ref}
                                            width="100%"
                                            height="100%"
                                            light={false}
                                            url={item.link}
                                            controls
                                            playIcon={<PlayIcon/>}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </>

    );
};
