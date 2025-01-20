import {useEffect, useState} from "react";
import {useFormStore} from "../store/useFormStore";
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

export const useFormLogic = (language) => {
    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [open, setOpen] = useState(false);
    const {t}=useTranslation();
    const {
        submitForm,
        fetchCountries,
        fetchStudies,
        fetchSpecialities,
        countryList,
        studyList,
        specialityList,
        loading,
    } = useFormStore();

    useEffect(() => {
        fetchCountries();
        fetchStudies();
        fetchSpecialities();
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
                const phoneRegex =  /^\+996([2579])([25079]\d{0,7})$/;
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
        try {
            await submitForm(state);
            setState(initialState);
            setOpen(true);
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
