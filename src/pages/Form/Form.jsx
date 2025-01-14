import { useState } from "react";
import { Typography, Container, Button } from "ui/index";
import classes from "./Form.module.scss";
import formImage from "../../assets/images/formImage.png";
import { TextField, MenuItem, Modal, Box } from "@mui/material";
import { IMaskInput } from "react-imask";
import { useFormStore } from "./store/useFormStore";
import { useMediaQuery } from "utils/helpers/useMedia";
import { GreenIcon } from "assets/index";
import { Link } from "react-router-dom";
import Breadcrumbs from "ui/Breadcrumbs/Breadcrumbs.jsx";
import {Loader} from "pages/Loader/Loader.jsx";
import {useTranslation} from "react-i18next";

const initialState = {
  name: "",
  number: "",
  country: "",
  study: "",
  speciality: "",
};

const initialErrors = {
  name: "",
  number: "",
  country: "",
  study: "",
  speciality: "",
};

export const Form = () => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [open, setOpen] = useState(false);

  const {t}=useTranslation();

  const isTablet = useMediaQuery("(max-width: 700px)");
  const { submitForm, countryList, studyList, specialityList, loading } = useFormStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "form.fullName";
      case "number":
      case "country":
      case "study":
      case "speciality":
        return value ? "" : "form.validation";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = Object.keys(state).reduce((acc, field) => {
      const error = validateField(field, state[field]);
      if (error) acc[field] = error;
      return acc;
    }, {});
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await submitForm(state);
      setOpen(true);
      setState(initialState);
    } catch (error) {
      console.error(t("form.error"), error);
    }
  };

  const sharedTextFieldStyles = {
    textAlign: "start",
    "& .MuiOutlinedInput-root": {
      height: "45px",
      borderRadius: "8px",
      background: "var(--color-white)",
      outline: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px",
    },
    "& .MuiInputLabel-root": {
      lineHeight: "1.2",
      top: "-4px",
    },
    "& .MuiInputLabel-shrink": {
      top: "0px",
    },
  };
  if (loading) return <Loader/>
  return (
      <>
        <Breadcrumbs breadcrumbKey={"form"}/>
        <Container>
        <div className={classes.blockWrapper}>
          <div className={`${classes.formBlock} ${classes.round}`}>
            <Typography variant="h1" weight="bold" upp="upp">
              {t("buttonsText.request")}
            </Typography>
            <div className={classes.inputWrapper}>
              <Typography weight="semiBold">
                {t("form.fillForm")}
              </Typography>

              <form className={classes.form} onSubmit={onFormSubmit}>
                <TextField
                    name="name"
                    label={t("titles.fullName")}
                    variant="outlined"
                    value={state.name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                    helperText={errors.name ? t(errors.name) : ""}
                    sx={sharedTextFieldStyles}
                />

                <TextField
                    name="number"
                    label={t("titles.number")}
                    variant="outlined"
                    value={state.number}
                    slotProps={{
                      input: {
                        inputComponent: IMaskInput,
                        inputProps: {
                          mask: "+996 (000) 000 000",
                          onAccept: (value) => {
                            setState((prevState) => ({
                              ...prevState,
                              number: value,
                            }));
                            setErrors((prevErrors) => ({
                              ...prevErrors,
                              number: "",
                            }));
                          },
                          unmask: true,
                        },
                      },
                    }}
                    error={!!errors.number}
                    helperText={errors.number ? t(errors.number) : ""}
                    sx={sharedTextFieldStyles}
                />

                <TextField
                    id="country"
                    name="country"
                    select
                    label={t("titles.country")}
                    value={state.country}
                    onChange={handleInputChange}
                    error={!!errors.country}
                    helperText={t(errors.country)}
                    sx={sharedTextFieldStyles}
                >
                  {countryList.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.title}
                      </MenuItem>
                  ))}
                </TextField>

                <TextField
                    id="study"
                    name="study"
                    select
                    label={t("titles.direction")}
                    value={state.study}
                    onChange={handleInputChange}
                    error={!!errors.study}
                    helperText={t(errors.study)}
                    sx={sharedTextFieldStyles}
                >
                  {studyList.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.title}
                      </MenuItem>
                  ))}
                </TextField>

                <TextField
                    id="speciality"
                    name="speciality"
                    select
                    label={t("titles.specialty")}
                    value={state.speciality}
                    onChange={handleInputChange}
                    error={!!errors.speciality}
                    helperText={t(errors.speciality)}
                    sx={sharedTextFieldStyles}
                >
                  {specialityList.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.title}
                      </MenuItem>
                  ))}
                </TextField>

                <Button type="submit" size="default" fullWidth={true}>
                  <Typography variant="h4">{t("buttonsText.request")}</Typography>
                </Button>
              </form>
            </div>
          </div>
          <div
              className={`${classes.formBlock} ${isTablet ? classes.hidden : ""}`}
          >
            <img src={formImage} alt="FormImage" />
          </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "30%",
                minWidth: "300px",
                borderRadius: "20px",
                background: "var(--color-white)",
                border: "none",
                outline: "none",
                p: 5,
                textAlign: "center",
              }}
          >
            <Box component="div">
              <GreenIcon />
              <Typography
                  variant="h5"
                  weight="semiBold"
                  className={classes.modalTitle}
              >
                {t("titles.modal")}
              </Typography>
              <Button className={classes.modalBtn}>
                <Link to={"/"}>
                  <Typography variant="h5" weight="semiBold">
                    {t("buttonsText.goToHome")}
                  </Typography>
                </Link>
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
      </>
  );
};
