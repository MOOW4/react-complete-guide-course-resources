import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {

  const data = useLoaderData();
  const events = data.events;

  return (
    <EventsList events={events}/>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    //throw new Error('Failed to fetch events');
    throw new Response(JSON.stringify({message: "Something went wrong"}), {status: 500});
  } else {
    // const resData = await response.json();
      // const res= new Response(redData, {status: 201});
    // return resData.events;
    return response;
  }
}