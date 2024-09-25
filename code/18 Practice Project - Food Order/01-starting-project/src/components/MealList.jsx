import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MealList() {

	const [meals , setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			try {
				const response = await axios.get('http://localhost:3000/meals');
				setMeals(response.data);
				console.log(response.data);
			} catch (error) {
				setError(error);
			}
			finally {
				setIsLoading(false);
			}
		}
		fetchMeals();
	}, []);
	{/* TODO: disaply loading*/}

	return (
		<section id='meals'>
			{meals.map(meal => (
				<MealItem key={meal.id} meal={meal}/>
			))}
		</section>
	);
}