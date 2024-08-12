import Error from "./components/Error.jsx";

export async function fetchAvailablePlaces() {

	const response = await fetch("http://localhost:3000/places");
	const responseData = await response.json();
	if (!response.ok) {
		throw new Error("Failed to fetch places.");
	}
	return responseData.places;
}

export async function updateUserPlaces(places) {
	const response = await fetch('http://localhost:3000/user-places', {
		method: 'PUT',
		body: JSON.stringify({places: places}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const responseData = await response.json();
	if (!response.ok) {
		throw new Error(responseData.message || 'Failed to update places.');
	}
	return responseData.message;
}