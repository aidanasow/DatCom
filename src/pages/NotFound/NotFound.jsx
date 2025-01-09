import classes from "./NotFound.module.scss";
import { Typography, Container, Button } from "ui/index";
import NotFoundImage from "assets/images/notFound.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.imgBlock}>
          <img src={NotFoundImage} alt="Not Found" className={classes.image} />{" "}
        </div>

        <div className={classes.infoBlock}>
          <Typography variant="h1" weight="bold" upp="upp">
            Страница, которую вы запрашиваете, не существует!
          </Typography>
          <Typography variant="h5" color="black">
            Перейдите на Главную страницу и попробуйте найти необходимую
            информацию там!
          </Typography>

          <Button variant="primary" size="medium" className={classes.btn}>
            <Link to="/">
              <Typography weight="regular">На главную</Typography>
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};
