import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useCountryDetailedStore = (id) => {
  const { i18n}=useTranslation();
  const [country, setCountry] = useState({});
  const { fetchData , loading} = useApiStore();

  useEffect(() => {
    if (!id) return;

    const fetchCountry = async () => {
      try {
        const response = await fetchData(`media/country/${id}/`);
        setCountry(response);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCountry();
  }, [id, fetchData, i18n.language]);

  return {
    country, loading
  };
};
