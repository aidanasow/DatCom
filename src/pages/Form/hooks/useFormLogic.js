import {useEffect, useState} from "react";
import {useFormStore} from "../store/useFormStore";
import {useTranslation} from "react-i18next";
import {redirect} from "react-router-dom";

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

export const useFormLogic = (language) => {
    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [open, setOpen] = useState(false);
    const {t} = useTranslation();
    const {
        submitForm,
        fetchCountries,
        fetchStudies,
        fetchSpecialities,
        countryList,
        studyList,
        specialityList,
        loading,
        whatsappNumber,
        message
    } = useFormStore();

    useEffect(() => {
        fetchCountries();
        fetchStudies();
        fetchSpecialities();
    }, [language]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
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
                const phoneRegex = /^\+996([2579])([25079]\d{0,7})$/;
                if (!value.trim()) {
                    return "form.validation";
                }
                if (!phoneRegex.test(value)) {
                    return "form.phoneNumberInvalid";
                }
                return "";
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
        const formDataString = `
        ${t("titles.fullName")}: ${state.name}
        ${t("titles.number")}: ${state.number}
        ${t("titles.country")}: ${countryList.find(option => option.id === state.country)?.title || ''}
        ${t("titles.direction")}: ${studyList.find(option => option.id === state.study)?.title || ''}
        ${t("titles.specialty")}: ${specialityList.find(option => option.id === state.speciality)?.title || ''}
    `;

        try {
            await submitForm(state);
            setState(initialState);
            setOpen(true);

            const link = `https://wa.me/${whatsappNumber}?text=${t("form.message")+formDataString}`;
            console.log(formDataString); // Для отладки
            window.location.href = link;
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };


    return {
        state,
        setState,
        setErrors,
        errors,
        open,
        loading,
        countryList,
        studyList,
        specialityList,
        setOpen,
        handleInputChange,
        onFormSubmit,
    };
};
