import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useDetailedUniversityStore = (id) => {
  const [university, setUniversity] = useState({});
  const [students, setStudents] = useState([]);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    if (!id) return;

    const fetchUniversity = async () => {
      try {
        const response = await fetchData(`media/university/${id}`);
        setUniversity(response);
      } catch (error) {
        throw new Error(error);
      }
    };

    const fetchStudents = async () => {
      try {
        const response = await fetchData(`media/university/students/${id}`);
        setStudents(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchUniversity();
    fetchStudents();
  }, [id, fetchData]);

  return {
    university,
    students,
    loading,
  };
};
