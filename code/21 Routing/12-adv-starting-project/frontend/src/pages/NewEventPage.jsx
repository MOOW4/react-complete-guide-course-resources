import EventForm from "../components/EventForm";
import {json, redirect} from "react-router-dom";


export default function NewEventPage() {
  return(
    <div>
      <EventForm />
    </div>
  );
}

export async function action({request, params}){
  const data = await request.formData();

  const enteredData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  const response = await fetch("http://localhost:8080/events", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(enteredData)
    })

  if(response.status === 422){
    return response;
  }

  if (!response.ok) {
    return json({message: "Event could not be created"}, {status: 500});
  }

  return redirect('/events');

}