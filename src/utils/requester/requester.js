import axios from "axios";
import { BASE_URL } from "utils/constants/Constants";
import { create } from "zustand";
import i18n from "utils/I18next/I18n.js";
export const requester = axios.create({
  baseURL: BASE_URL,
});
requester.interceptors.request.use(config => {
  config.headers["Accept-Language"] = i18n.language;
  return config;
}, error => {
  return Promise.reject(error);
});

export const useApiStore = create((set) => ({
  loading: false,
  error: null,
  data: [],
  success: null,

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setData: (data) => set({ data }),
  setSuccess: (success) => set({ success }),

  resetSuccess: () => set({ success: null }),
  resetError: () => set({ error: null }),

  fetchData: async (url) => {
    set({ loading: true });
    try {
      const { data } = await requester.get(url);

      if (!data) {
        throw new Error("Not Found");
      }
      set({ data });
      return data;
    } catch (error) {
      set({ error: error.message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  postRequest: async (url, data) => {
    set({ loading: true, success: null, error: null });
    try {
      await requester.post(url, data);
      set({ success: "Request successful" });
    } catch (error) {
      set({
        error: error.message,
        success: null,
      });

      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));
