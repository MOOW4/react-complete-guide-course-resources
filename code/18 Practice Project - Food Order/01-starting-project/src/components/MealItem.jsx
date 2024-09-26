import Button from "./UI/Button.jsx";
import CartContext from "./store/CartContext.jsx";
import {useContext} from "react";

export default function MealItem({ meal }) {

	const cartCntx = useContext(CartContext);

	function handleAddMealToCart(meal){
		cartCntx.addItem(meal);
	}

	return(
		<li className='meal-item'>

			<article>
				<div>
					<img src={`http://localhost:3000/${meal.image}`}/>
					<h3>{meal.name}</h3>
					<p className='meal-item-price'>{meal.price}€</p>
					<p className='meal-item-description'>{meal.description}</p>
				</div>
				<p className='meal-item-actions'>
					<Button onClick={handleAddMealToCart}>Add to Cart</Button>
				</p>
			</article>

		</li>
	);
}