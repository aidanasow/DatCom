import { useEffect, useState } from "react";
import { useApiStore } from "utils/requester/requester";

export const useFormStore = () => {
  const { fetchData, postRequest, success, resetSuccess, loading } =
    useApiStore();
  const [countryList, setCountryList] = useState([]);
  const [studyList, setStudyList] = useState([]);
  const [specialityList, setSpecialityList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetchData(`media/country/`);
        setCountryList(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    const fetchStudies = async () => {
      try {
        const response = await fetchData(`media/program/`);
        setStudyList(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    const fetchSpecialities = async () => {
      try {
        const response = await fetchData(`services/degree/`);
        setSpecialityList(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCountries();
    fetchStudies();
    fetchSpecialities();
  }, [fetchData]);

  const submitForm = async (formData) => {
    try {
      await postRequest("services/application/", {
        full_name: formData.name,
        phone_number: formData.number,
        country: formData.country,
        degree: formData.study,
        faculty: formData.speciality,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    submitForm,
    countryList,
    studyList,
    specialityList,
    success,
    resetSuccess,
    loading,
  };
};
