import { useEffect, useState } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/place");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || "Failed to fetch places, please try again later.",
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
