import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useReviewsStore = (offset = 0, limit = 6) => {
  const [reviews, setReviews] = useState([]);
  const [video, setVideo] = useState([]);
  const [rating, setRating] = useState();
  const [count, setCount] = useState(0);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchReiewsData = async () => {
      try {
        const response = await fetchData(
          `services/review?limit=${limit}&offset=${offset}`
        );
        setReviews(response.results);
        setCount(Math.ceil(response.count / limit));
      } catch (error) {
        throw new Error(error);
      }
    };

    const fetchVideoData = async () => {
      try {
        const response = await fetchData(`/media/video/`);
        setVideo(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    const fetchAverageRating = async () => {
      try {
        const response = await fetchData(`/services/rating/`);
        setRating(response);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchAverageRating();
    fetchVideoData();
    fetchReiewsData();
  }, [offset, fetchData, limit]);

  return {
    rating,
    video,
    reviews,
    count,
    loading,
  };
};
