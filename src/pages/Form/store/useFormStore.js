import {create} from "zustand";
import {useApiStore} from "utils/requester/requester";
import {redirect} from "react-router-dom";

export const useFormStore = create((set, get) => ({
    countryList: [],
    studyList: [],
    specialityList: [],
    loading: false,
    success: null,
    message: "",
    whatsappNumber: "",
    setLoading: (loading) => set({loading}),
    setSuccess: (success) => set({success}),

    resetSuccess: () => set({success: null}),

    fetchCountries: async () => {
        const {fetchData} = useApiStore.getState();
        set({loading: true});
        try {
            const response = await fetchData(`media/country/`);
            set({countryList: response.results});
        } catch (error) {
            console.error("Error fetching countries:", error.message);
            throw new Error(error);
        } finally {
            set({loading: false});
        }
    },

    fetchStudies: async () => {
        const {fetchData} = useApiStore.getState();
        set({loading: true});
        try {
            const response = await fetchData(`media/program/`);
            set({studyList: response.results});
        } catch (error) {
            console.error("Error fetching studies:", error.message);
            throw new Error(error);
        } finally {
            set({loading: false});
        }
    },

    fetchSpecialities: async () => {
        const {fetchData} = useApiStore.getState();
        set({loading: true});
        try {
            const response = await fetchData(`services/degree/`);
            set({specialityList: response.results});
        } catch (error) {
            console.error("Error fetching specialities:", error.message);
            throw new Error(error);
        } finally {
            set({loading: false});
        }
    },
    fetchMainContact: async () => {
        const {fetchData} = useApiStore.getState();
        set({loading: true});
        try {
            const response = await fetchData(`/main-info/contact-for-application/`);
            set({whatsappNumber: response.main_number});
        } catch (error) {
            console.error("Error fetching specialities:", error.message);
            throw new Error(error);
        } finally {
            set({loading: false});
        }
    },

    submitForm: async (formData) => {
        const {postRequest} = useApiStore.getState();
        set({loading: true});
        try {
            const response = await postRequest("services/application/", {
                full_name: formData.name,
                phone_number: formData.number,
                country: formData.country,
                degree: formData.speciality,
                faculty: formData.study,
            });

            if (response?.data?.text) {
                set({message: response.data.text})
            }
            set({success: response.data});
            return response.data;
        } catch (error) {
            console.error("Error submitting form:", error.message);
            throw new Error(error);
        } finally {
            set({loading: false});
        }
    },
}));
