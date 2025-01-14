import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useContactsStore = () => {
  const { i18n}=useTranslation();
  const [contacts, setContacts] = useState({});
  const [phone, setPhone]=useState(null)
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetchData(`main-info/contacts/`);
        setContacts(response[0]);
        setPhone(response[0]?.phonenumber[0]?.phonenumber)
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchContacts();
  }, [fetchData, i18n.language]);

  return {
    contacts,
    phone,
    loading,
  };
};
