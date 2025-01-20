import {useFormLogic} from "./hooks/useFormLogic";
import {Typography, Container, Button, Breadcrumbs} from "ui/index";
import classes from "./Form.module.scss";
import formImage from "assets/images/formImage.png";
import {TextField, MenuItem,} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Loader} from "pages/index";
import {useMediaQuery} from "utils/helpers/useMedia.js";
import FormModal from "./components/FormModal.jsx";
import {sharedTextFieldStyles} from "utils/constants/Constants.jsx";
import {useEffect} from "react";
import {useFormStore} from "pages/Form/store/useFormStore.js";



export const Form = () => {
    const {t, i18n} = useTranslation();
    const isTablet = useMediaQuery("(max-width: 700px)");
    const {fetchMainContact}=useFormStore();
    const {
        state,
        errors,
        open,
        loading,
        countryList,
        studyList,
        specialityList,
        setOpen,
        handleInputChange,
        onFormSubmit,
    } = useFormLogic(i18n.language);
    const { message, whatsappNumber, success}=useFormStore();
    const getErrorStyles = (hasError) => ({
        color: hasError ? "#eb5757" : "inherit",
    });

    useEffect(() => {
        if (success) {
            window.location.href=`https://wa.me/${whatsappNumber}?text=${t("form.message")+message}`;
        }
    }, [success]);

    if (loading) return <Loader/>;


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
                                    value={state.number || "+996"}
                                    onChange={handleInputChange}
                                    error={!!errors.number}
                                    helperText={errors.number ? t(errors.number) : ""}
                                    inputProps={{ maxLength: 13 }}
                                    sx={sharedTextFieldStyles}
                                />

                                <TextField
                                    id="country"
                                    name="country"
                                    select
                                    value={state.country}
                                    onChange={handleInputChange}
                                    error={!!errors.country}
                                    helperText={errors.country ? t(errors.country) : ""}
                                    sx={{
                                        ...sharedTextFieldStyles,
                                        "& .MuiOutlinedInput-input": getErrorStyles(!!errors.country),
                                        "& .MuiSelect-select": getErrorStyles(!!errors.country),
                                    }}
                                    SelectProps={{
                                        displayEmpty: true,
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {t("titles.country")}
                                    </MenuItem>
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
                                    value={state.study}
                                    onChange={handleInputChange}
                                    error={!!errors.study}
                                    helperText={errors.study ? t(errors.study) : ""}
                                    sx={{
                                        ...sharedTextFieldStyles,
                                        "& .MuiOutlinedInput-input": getErrorStyles(!!errors.country),
                                        "& .MuiSelect-select": getErrorStyles(!!errors.country),
                                    }}
                                    SelectProps={{
                                        displayEmpty: true,
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {t("titles.direction")}
                                    </MenuItem>
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
                                    value={state.speciality}
                                    onChange={handleInputChange}
                                    error={!!errors.speciality}
                                    helperText={errors.speciality ? t(errors.speciality) : ""}
                                    sx={{
                                        ...sharedTextFieldStyles,
                                        "& .MuiOutlinedInput-input": getErrorStyles(!!errors.country),
                                        "& .MuiSelect-select": getErrorStyles(!!errors.country),
                                    }}
                                    SelectProps={{
                                        displayEmpty: true,
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {t("titles.specialty")}
                                    </MenuItem>
                                    {specialityList?.map((option) => (
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
                    <div className={`${classes.formBlock} ${isTablet ? classes.hidden : ""} `}>
                        <img src={formImage} alt="FormImage"/>
                    </div>
                </div>
                <FormModal open={open} setOpen={setOpen}/>
            </Container>
        </>
    );
};
