import { useState, useEffect } from "react";
import { useFormStore } from "../store/useFormStore";

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

    const {
        submitForm,
        fetchCountries,
        fetchStudies,
        fetchSpecialities,
        countryList,
        studyList,
        specialityList,
        message,
        whatsappNumber,
        loading,
    } = useFormStore();

    useEffect(() => {
        fetchCountries(language);
        fetchStudies(language);
        fetchSpecialities(language);
    }, [language]);

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
            const link = `https://wa.me/${whatsappNumber}?text=Здравствуйте!${message}`;
            window.open(link, "_blank");
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return {
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
    };
};
