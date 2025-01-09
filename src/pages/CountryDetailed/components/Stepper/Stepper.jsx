import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { Container, Typography } from "ui/index";
import classes from "./Stepper.module.scss";
import { styled } from "@mui/material/styles";

const CustomStepLabel = styled(StepLabel)(() => ({
  marginTop: "-12px",

  ".MuiStepLabel-iconContainer": {
    background: "var(--color-white)",
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
    transform: "translateX(-11px)",
    position: "relative",
    zIndex: 1,

    "& .MuiStepIcon-root": {
      color: "transparent",

      "& text": {
        fill: "var(--color-black)",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "nunito-SemiBold",
        transform: "translateY(0px) translateX(3px)",
      },
    },
  },
}));

const CustomStepContent = styled(StepContent)(() => ({
  marginTop: "-45px",
}));

export const CountryStepper = ({ list }) => {
  return (
    <Container>
      <Typography variant="heading">О стране</Typography>
      <Stepper orientation="vertical" className={classes.block}>
        {list?.map((step) => (
          <Step key={step.id} expanded active>
            <CustomStepLabel />

            <CustomStepContent>
              <div className={classes.step}>
                <div className={classes.stepText}>
                  <Typography
                    variant="h4"
                    weight="bold"
                    className={classes.label}
                  >
                    {step.title}
                  </Typography>
                  <Typography>{step.description}</Typography>
                </div>
                <div className={classes.image}>
                  <img src={step.image} alt="country" />
                </div>
              </div>
            </CustomStepContent>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};
