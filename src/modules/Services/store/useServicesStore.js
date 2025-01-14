import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useServicesStore = (offset = 0, limit = 5) => {
  const { i18n}=useTranslation();
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await fetchData(
          `services/?limit=${limit}&offset=${offset}`
        );
        setServices(response.results);
        setCount(Math.ceil(response.count / limit));
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchStudentsData();
  }, [offset, fetchData, limit, i18n.language]);

  return {
    services,
    count,
    loading,
  };
};
