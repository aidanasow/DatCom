import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useAboutUsStore = () => {
  const { i18n}=useTranslation();
  const [data, setData] = useState([]);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await fetchData(`/main-info/about-datcom/`);
        setData(response[0]);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchAboutUs();
  }, [fetchData, i18n.language]);

  return {
    data,
    loading,
  };
};
