import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import {Suspense} from "react";


export default function EventDetailPage() {

  const {event, events} = useRouteLoaderData('event-detail');

  return(
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={event}>
          {(event) => <EventItem event={event}/>}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}></p>}>
        <Await resolve={events}>
          {(events) => <EventsList events={events}/>}
        </Await>
      </Suspense>
    </>
  );
}

async function fetchEvent(id){
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({message: "Event details could not be fetched"}, {status: 500});
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function fetchEvents(){

  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new Response(JSON.stringify({message: "Something went wrong"}), {status: 500});
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export async function loader({request, params}){

  const id = params.eventId;

  return defer({
    event: await fetchEvent(id),
    events: fetchEvents()
  })

}

export async function action({request, params}){

  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method
  });
  console.log(response);
  if (!response.ok) {
    throw json({message: "Event could not be deleted"}, {status: 500});
  }

  return redirect('/events');
}