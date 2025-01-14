import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useCountriesStore = (offset = 0, limit = 9) => {
  const { i18n}=useTranslation();
  const [countries, setCountries] = useState([]);
  const [count, setCount] = useState(0);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetchData(
          `media/country/?limit=${limit}&offset=${offset}`
        );
        setCountries(response.results);
        setCount(Math.ceil(response.count / limit));
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchCountriesData(i18n.language);
  }, [offset, fetchData, limit, i18n.language]);

  return {
    countries,
    count,
    loading,
  };
};
