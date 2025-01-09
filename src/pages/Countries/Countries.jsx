import { useState } from "react";
import classes from "./Countries.module.scss";
import { Typography, Container, CustomCard } from "ui/index";
import { useCountriesStore } from "./store/useCountriesStore";
import { PaginationComponent } from "modules/PaginationComponent/PaginationComponent";

export const Countries = () => {
  const [offset, setOffset] = useState(0);
  const limit = 12;

  const { countries, count } = useCountriesStore(offset, limit);

  const onChange = (_, page) => {
    setOffset((page - 1) * limit);
  };

  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="heading">Страны</Typography>
        <div className={classes.cardWrapper}>
          {countries.map((item, key) => (
            <CustomCard
              key={key}
              variant="country"
              title={item.title}
              image={item.image}
              description={item.description}
              link={`/countries/${item.id}`}
            />
          ))}
        </div>

        <PaginationComponent count={count} onChange={onChange} />
      </Container>
    </div>
  );
};
