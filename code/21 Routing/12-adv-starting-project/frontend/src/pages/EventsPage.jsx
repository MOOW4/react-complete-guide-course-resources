import EventsList from '../components/EventsList';
import {Await, defer, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {

  const data = useLoaderData();
  const events = data.events;

  return (
    <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events}/>}
      </Await>
    </Suspense>
  );

}

export default EventsPage;

async function fetchEvents(){

  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    //throw new Error('Failed to fetch events');
    throw new Response(JSON.stringify({message: "Something went wrong"}), {status: 500});
  } else {
    // const resData = await response.json();
    // const res= new Response(redData, {status: 201});
    // return resData.events;
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader() {
  return defer({events: fetchEvents()});
}