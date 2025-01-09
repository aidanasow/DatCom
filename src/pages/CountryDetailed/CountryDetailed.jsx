import { useParams } from "react-router-dom";
import { Container, CustomCard, Typography } from "ui/index";
import { useCountryDetailedStore } from "./store/useCountryDetailedStore";
import classes from "./CountryDetailed.module.scss";
import { CountryStepper } from "./components/Stepper/Stepper";
import { Slider } from "modules/index";

export const CountryDetailed = () => {
  const { id } = useParams();
  const { country } = useCountryDetailedStore(id);

  return (
    <>
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
              <img src={country?.image} alt={country.title} />
            </div>
          </div>
        </Container>
      </div>

      <div className={classes.aboutCountry}>
        <CountryStepper list={country?.about_country} />
      </div>

      <Container>
        <div className={classes.gallery}>
          <Typography variant="heading">Фотогалерея</Typography>
          <Slider
            amount={3}
            sliderList={country?.country_image}
            renderSlide={(item) => (
              <div className={classes.gallery_block}>
                <img src={item.image} alt="country gallery" />
              </div>
            )}
          />
        </div>
        <div className={classes.universityList}>
          <Typography variant="heading">Университеты Италии</Typography>
          <Slider
            amount={2.8}
            sliderList={country?.recommended_universities}
            renderSlide={(item) => (
              <CustomCard
                variant="students"
                title={item.title}
                image={item.image}
                description={item.description}
              />
            )}
          />
        </div>
      </Container>
    </>
  );
};
