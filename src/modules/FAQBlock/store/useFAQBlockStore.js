import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useFAQBlockStore = (offset = 0, limit = 4) => {
  const { i18n}=useTranslation();
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
  }, [offset, fetchData, limit, i18n.language]);

  return {
    questions,
    loading,
  };
};
