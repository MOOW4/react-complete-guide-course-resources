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
    // TODO handle error
  } else {
    // const resData = await response.json();
      // const res= new Response(redData, {status: 201});
    // return resData.events;
    return response;
  }
}