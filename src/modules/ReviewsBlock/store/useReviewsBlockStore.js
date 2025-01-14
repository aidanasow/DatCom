import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useReviewsBlockStore = ({ offset = 0, limit = 3 }) => {
  const { i18n}=useTranslation();
  const [reviews, setReviews] = useState([]);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchData(
          `services/review/?limit=${limit}&offset=${offset}`
        );
        setReviews(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchReviews();
  }, [offset, limit, fetchData, i18n.language]);

  return {
    reviews,
    loading,
  };
};
