import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";
import {useTranslation} from "react-i18next";

export const useContactsStore = () => {
  const { i18n}=useTranslation();
  const [contacts, setContacts] = useState({});
  const [phone, setPhone]=useState(null)
  const [policy, setPolicy]=useState("")
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
    const fetchPolicy=async ()=>{
      try {
        const response = await fetchData(`/main-info/privacy-policy/`);
        setPolicy(response[0].file);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchContacts();
    fetchPolicy();
  }, [fetchData, i18n.language]);

  return {
    contacts,
    phone,
    loading,
    policy
  };
};
