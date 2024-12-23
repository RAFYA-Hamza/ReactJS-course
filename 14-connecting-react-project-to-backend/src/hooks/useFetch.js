import { useState, useEffect } from "react";

export function useFetch(fetchFn, initialValue) {
  const [fetchData, setFetchDate] = useState(initialValue);
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const data = await fetchFn();

        setFetchDate(data);
      } catch (error) {
        setError({
          message:
            error.message || "Failed to fetch data, please try again later.",
        });
      }
      setIsFetching(false);
    }

    fetchData();
  }, []);

  return {
    isFetching,
    error,
    setFetchDate,
    fetchData,
  };
}
