import classes from "./DetailedUniversity.module.scss";
import { Typography, Container, CustomCard } from "ui/index";
import { useDetailedUniversityStore } from "./store/useDetailedUniversityStore";
import { useParams } from "react-router-dom";
import { Slider, ReviewsBlock, ModalComponent } from "modules/index";
import { useState } from "react";
import { Grid2 as Grid } from "@mui/material";
import { useMediaQuery } from "utils/helpers/useMedia";

export const DetailedUniversity = () => {
  const { id } = useParams();
  const { university, students } = useDetailedUniversityStore(id);
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isMobile = useMediaQuery("(max-width: 400px)");

  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState({});

  const openModal = (student) => {
    setOpen(true);
    setStudent(student);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="heading">{university.title}</Typography>

        <Grid
          container
          spacing={3}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <Grid size={{ xs: 12, md: 7 }} className={classes.imageWrapper}>
            <img src={university.image} alt={university.title} />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} className={classes.articleBlock}>
            <Typography
              variant="h3"
              weight="bold"
              upp="upp"
              className={classes.secondaryTitle}
            >
              {university.secondary_title}
            </Typography>
            <Typography variant="h5">
              {university.secondary_description}
            </Typography>
          </Grid>
        </Grid>

        <div className={classes.description}>
          <Typography variant="h5">{university.description}</Typography>
        </div>

        <div className={classes.students}>
          <Typography variant="heading">Известные выпускники</Typography>

          <div className={classes.studentsSlider}>
            <Slider
              amount={isMobile ? 1 : isTablet ? 2 : 2.8}
              sliderList={students}
              renderSlide={(item) => (
                <CustomCard
                  variant="students"
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  modal={() => openModal(item)}
                />
              )}
            />
          </div>
        </div>

        <div className={classes.reviews}></div>
      </Container>
      <ReviewsBlock />

      <ModalComponent open={open} closeModal={closeModal} student={student} />
    </div>
  );
};
