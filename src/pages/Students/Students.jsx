import { useState } from "react";
import { Typography, Container, CustomCard } from "ui/index";
import classes from "./Students.module.scss";
import { useStudentsStore } from "./store/useStudentsStore";
import { PaginationComponent } from "modules/PaginationComponent/PaginationComponent";
import { ModalComponent } from "modules/index";

export const Students = () => {
  const [offset, setOffset] = useState(0);
  const limit = 9;

  const { students, count } = useStudentsStore(offset, limit);

  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState({});

  const onChange = (_, page) => {
    setOffset((page - 1) * limit);
  };

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
        <Typography variant="heading">поступившие студенты</Typography>
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

        <PaginationComponent count={count} onChange={onChange} />
      </Container>

      <ModalComponent open={open} closeModal={closeModal} student={student} />
    </div>
  );
};
