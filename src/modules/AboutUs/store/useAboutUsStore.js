import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useAboutUsStore = () => {
  const [data, setData] = useState([]);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await fetchData(`/main-info/about-datcom/`);
        setData(response);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchAboutUs();
  }, [fetchData]);

  return {
    data,
    loading,
  };
};
