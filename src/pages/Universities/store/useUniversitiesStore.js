import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useUniversitiesStore = (offset = 0, limit = 12, search) => {
  const [universities, setUniversities] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [programmList, setProgrammList] = useState([]);
  const [count, setCount] = useState(0);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        let url = `media/university/?limit=${limit}&offset=${offset}`;

        if (search.search) {
          url += `&search=${encodeURIComponent(search.search)}`;
        }

        if (search.country) {
          url += `&country=${encodeURIComponent(search.country)}`;
        }

        if (search.programm) {
          url += `&program=${encodeURIComponent(search.programm)}`;
        }

        const response = await fetchData(url);
        setUniversities(response.results);
        setCount(Math.ceil(response.count / limit));
      } catch (error) {
        console.error("Ошибка загрузки университетов:", error);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await fetchData(`media/country/`);
        setCountryList(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    const fetchProgramms = async () => {
      try {
        const response = await fetchData(`media/program/`);
        setProgrammList(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchUniversities();

    fetchCountries();

    fetchProgramms();
  }, [offset, search, fetchData, limit]);

  return {
    universities,
    countryList,
    programmList,
    count,
    loading,
  };
};
