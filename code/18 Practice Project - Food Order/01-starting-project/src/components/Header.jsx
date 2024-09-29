import Button from "./UI/Button.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";
import {useContext} from "react";
import CartContext from "./store/CartContext.jsx";

export default function Header() {

	const userProgressCtx = useContext(UserProgressContext);
	const cartCtx = useContext(CartContext);

	const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
		return totalNumberOfItems + item.quantity;
	}, 0);

	function handleOpenCart() {
		userProgressCtx.showCart();
	}

	return (
		<header id='main-header'>
			<div id='title'>
				<img src="logo.jpg"></img>
				<h1>ReactFood</h1>
			</div>
			<nav>
				<Button textOnly={true} onClick={handleOpenCart}>Cart ({totalCartItems})</Button>
			</nav>

		</header>
	);
}