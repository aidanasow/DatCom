import classes from "./DetailedUniversity.module.scss";
import { Typography, Container, CustomCard , Breadcrumbs} from "ui/index";
import { useDetailedUniversityStore } from "./store/useDetailedUniversityStore";
import { useParams } from "react-router-dom";
import { Slider, ReviewsBlock, ModalComponent } from "modules/index";
import { useState } from "react";
import { useMediaQuery } from "utils/helpers/useMedia";
import {useTranslation} from "react-i18next";

export const DetailedUniversity = () => {
  const { id } = useParams();
  const {t}=useTranslation();
  const { university, students, loading } = useDetailedUniversityStore(id);
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
      <>
        <Breadcrumbs breadcrumbKey={"universitiesDetail"} thirdElement={university.title}/>
        <div className={classes.wrapper}>
          <Container>
            <Typography variant="heading">{university.title}</Typography>

            <div
                className={classes.wrapperBlock}
            >
              <div className={classes.imageWrapper}>
                <img src={university.image} alt={university.title}/>
              </div>
              <div className={classes.articleBlock}>
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
              </div>
            </div>

            <div className={classes.description}>
              <Typography variant="h5">{university.description}</Typography>
            </div>

            <div className={classes.students}>
              {
                students.length>0&& <>
                    <Typography variant="heading">{t("titles.alumni")}</Typography>

                    <div className={classes.studentsSlider}>
                      <Slider
                          amount={isMobile ? 1 : isTablet ? 2 : 2.8}
                          sliderList={students}
                          renderSlide={(item) => (
                              <CustomCard
                                  variant="students"
                                  title={item.title}
                                  image={item.image}
                                  isMain
                                  description={item.description}
                                  modal={() => openModal(item)}
                              />
                          )}
                      />
                    </div>
                  </>
              }
            </div>

          </Container>
          <ReviewsBlock/>

          <ModalComponent open={open} closeModal={closeModal} student={student}/>
        </div>
      </>

  );
};
