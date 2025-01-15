import { useState } from "react";
import { Typography, Container, CustomCard } from "ui/index";
import classes from "./Students.module.scss";
import { useStudentsStore } from "./store/useStudentsStore";
import { PaginationComponent } from "modules/PaginationComponent/PaginationComponent";
import { ModalComponent } from "modules/index";
import Breadcrumbs from "ui/Breadcrumbs/Breadcrumbs.jsx";
import { Loader } from "pages/Loader/Loader.jsx";
import { useTranslation } from "react-i18next";

export const Students = () => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState({});
  const { students, count, loading } = useStudentsStore(offset, limit);

  const onChange = (_, page) => {
    setCurrentPage(page);
    setOffset((page - 1) * limit);
  };
  console.log(currentPage)

  const openModal = (student) => {
    setOpen(true);
    setStudent(student);
  };

  const closeModal = () => {
    setOpen(false);
  };

  if (loading) return <Loader />;

  return (
      <>
        <Breadcrumbs breadcrumbKey={"students"} />
        <div className={classes.wrapper}>
          <Container>
            <Typography variant="heading">{t("titles.adStudents")}</Typography>
            <div className={classes.cardWrapper}>
              {students.map((item) => (
                  <CustomCard
                      key={item.id}
                      variant="students"
                      title={item.title}
                      image={item.image}
                      description={item.description}
                      modal={() => openModal(item)}
                  />
              ))}
            </div>

            <PaginationComponent count={count} page={currentPage} onChange={onChange} />
          </Container>

          <ModalComponent open={open} closeModal={closeModal} student={student} />
        </div>
      </>
  );
};
