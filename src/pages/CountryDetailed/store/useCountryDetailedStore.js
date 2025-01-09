import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useCountryDetailedStore = (id) => {
  const [country, setCountry] = useState({});
  const { fetchData } = useApiStore();

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
  }, [id, fetchData]);

  return {
    country,
  };
};
