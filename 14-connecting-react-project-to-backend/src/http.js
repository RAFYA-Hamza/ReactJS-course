export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-placess", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}
