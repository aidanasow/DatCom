import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const getMatches = (query) => window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatches(query));

  const handleChange = () => setMatches(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  });


  return matches;
}
