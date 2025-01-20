import { create } from "zustand";
import { useApiStore } from "utils/requester/requester";
const { fetchData, loading } = useApiStore.getState();
export const useContactsStore = create((set, get) => {
  return {
    contacts: {},
    phone: null,
    policy: "",
    novaLabsLink: "",
    loading,
    error: null,
    fetchContacts: async () => {
      try {
        const response = await fetchData(`main-info/contacts/`);
        set({
          contacts: response[0],
          phone: response[0]?.phonenumber[0]?.phonenumber,
        });
      } catch (error) {
        set({ loading: false, error: error.message });
        console.error("Failed to fetch contacts:", error);
      }
    },

    fetchPolicy: async () => {
      try {
        const response = await fetchData(`/main-info/privacy-policy/`);
        set({ policy: response[0]?.file,});
      } catch (error) {
        set({ error: error.message });
        console.error("Failed to fetch policy:", error);
      }
    },
    fetchNovaLabsLink: async () => {
      try {
        const response = await fetchData(`/main-info/link/`);
        set({ novaLabsLink: response.site_link});
      } catch (error) {
        set({ error: error.message });
        console.error("Failed to fetch policy:", error);
      }
    },
  };
});
