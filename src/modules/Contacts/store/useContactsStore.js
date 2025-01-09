import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useContactsStore = () => {
  const [contacts, setContacts] = useState({});
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetchData(`main-info/contacts/`);
        setContacts(response[0]);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchContacts();
  }, [fetchData]);

  return {
    contacts,
    loading,
  };
};
