import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // handle errors
    // throw { message: "Could not fetch events!" };
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });

    // return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    console.log(response.events);
    return response;
  }
};
