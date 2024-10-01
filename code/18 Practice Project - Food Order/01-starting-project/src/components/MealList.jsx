import { useEffect, useState } from 'react';
import axios from 'axios';
import MealItem from "./MealItem.jsx";
import useHttp from "./hooks/useHttp.jsx";
import Error from "./Error.jsx";

const initialData = [];
const initialConfig = {};

export default function MealList() {

	const {isLoading, error, data: meals} = useHttp('http://localhost:3000/meals', initialConfig, initialData);

	if(isLoading){
		return <p className='center'>Loading...</p>;
	}
	if (error){
		return <Error title='Failed to fetch' message={error}></Error>;
	}

	return (
		<ul id='meals'>
			{meals.map(meal => (
				<MealItem key={meal.id} meal={meal}/>
			))}
		</ul>
	);
}