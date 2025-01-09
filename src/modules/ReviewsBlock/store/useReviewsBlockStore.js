import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useReviewsBlockStore = ({ offset = 0, limit = 3 }) => {
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
  }, [offset, limit, fetchData]);

  return {
    reviews,
    loading,
  };
};
