import {Container, ReviewCard, Typography} from "ui/index";
import classes from "./ReviewsBlock.module.scss";
import {PATHS} from "utils/constants/Constants";
import {Link} from "react-router-dom";
import {useReviewsBlockStore} from "./store/useReviewsBlockStore";
import {useMediaQuery} from "utils/helpers/useMedia";
import {ArrowRight} from "assets/icons/ArrowRight.jsx";
import {useTranslation} from "react-i18next";
import {Loader} from "pages/Loader/Loader.jsx";

export const ReviewsBlock = () => {
    const {t} = useTranslation();
    const isTablet = useMediaQuery("(max-width: 900px)");
    const isMobile = useMediaQuery("(max-width: 500px)");
    const limit = isMobile ? 1 : isTablet ? 2 : 3;

    const {reviews, loading} = useReviewsBlockStore({
        offset: 0,
        limit,
    });
    if (loading) return <Loader/>;
    return (
        <div className={classes.block}>
            <Container>
                <div className={classes.heading}>
                    <Typography variant="heading">{t("titles.reviews")}</Typography>
                    <Link to={PATHS.reviews}>
                        <Typography weight="regular">{t("buttonsText.seeAll")}</Typography>
                    </Link>
                </div>
                <div className={classes.list}>
                    {reviews.map((item, key) => (
                        <ReviewCard key={key} data={item} short/>
                    ))}
                </div>
                <div className={classes.link}>
                    <Link to={PATHS.reviews}>
                        <Typography weight="regular">{t("buttonsText.seeAll")}</Typography>
                    </Link>
                    <ArrowRight size={24}/>
                </div>
            </Container>
        </div>
    );
};
