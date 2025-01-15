import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useStudentsStore = (offset = 0, limit = 9) => {
  const { i18n}=useTranslation();
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await fetchData(
          `media/students/?limit=${limit}&offset=${offset}`
        );
        setStudents(response.results);
        setCount(Math.ceil(response.count / limit));
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchStudentsData();
  }, [offset, fetchData, limit, i18n.language]);

  return {
    students,
    count,
    loading
  };
};
