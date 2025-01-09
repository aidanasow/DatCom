import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useFAQBlockStore = (offset = 0, limit = 4) => {
  const [questions, setQuestions] = useState([]);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetchData(
          `services/faq/?limit=${limit}&offset=${offset}`
        );
        setQuestions(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchQuestions();
  }, [offset, fetchData, limit]);

  return {
    questions,
    loading,
  };
};
