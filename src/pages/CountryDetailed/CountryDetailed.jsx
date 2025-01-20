import {useParams} from "react-router-dom";
import {Container, CustomCard, Typography, Breadcrumbs} from "ui/index";
import {useCountryDetailedStore} from "./store/useCountryDetailedStore";
import classes from "./CountryDetailed.module.scss";
import {CountryStepper} from "./components/Stepper/Stepper";
import {Slider} from "modules/index";
import {Loader} from "pages/Loader/Loader.jsx";
import {useMediaQuery} from "utils/helpers/useMedia.js";
import {useTranslation} from "react-i18next";

export const CountryDetailed = () => {
    const {id} = useParams();
    const {t}=useTranslation();
    const {country, loading} = useCountryDetailedStore(id);
    const tablet = useMediaQuery("(max-width: 900px)")
    const phone = useMediaQuery("(max-width: 500px)")
    const miniTab = useMediaQuery("(max-width: 750px)")
    const laptop = useMediaQuery("(max-width: 1200px)")
    let cards = 3
    if (laptop) cards = 2.5
    if (tablet) cards = 2
    if (miniTab) cards = 1.8
    if (phone) cards = 1.3
    let space=20;
    if (tablet) space=16;
    if (loading) return <Loader/>
    return (
        <>
            <Breadcrumbs breadcrumbKey={"countriesDetail"} thirdElement={country.title}/>
            <div className={classes.block}>
                <Container>
                    <div className={classes.blockTop}>
                        <div className={classes.blockTop_text}>
                            <Typography variant="heading" className={classes.heading}>
                                {country?.title}
                            </Typography>
                            <Typography>{country?.description}</Typography>
                        </div>
                        <div className={classes.blockTop_image}>
                            <img src={country?.image} alt={country.title}/>
                        </div>
                    </div>
                </Container>
            </div>
                <div className={classes.aboutCountry}>
                    <CountryStepper list={country?.about_country}/>
                </div>
            <Container>
                {
                    country?.country_image?.length>0 &&
                    <div className={classes.gallery}>
                        <Typography variant="heading">{t("titles.photoGallery")}</Typography>
                        <Slider
                            maxCards={cards}
                            spaceBetWeen={space}
                            sliderList={country?.country_image}
                            renderSlide={(item) => (
                                <div className={classes.gallery_block}>
                                    <img src={item.image} alt="country gallery"/>
                                </div>
                            )}
                        />
                    </div>
                }
                </Container>
                <Container>
                {
                    country?.recommended_universities?.length>0 &&
                    <div className={classes.universityList}>
                        <Typography variant="heading" >{t("titles.universities")}</Typography>
                        <Slider
                            maxCards={cards}
                            sliderList={country?.recommended_universities}
                            renderSlide={(item) => (
                                <CustomCard
                                    variant="students"
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                    isUni={true}
                                    link={`/universities/${item.id}`}
                                />
                            )}
                        />
                    </div>
                }
            </Container>
        </>
    );
};
