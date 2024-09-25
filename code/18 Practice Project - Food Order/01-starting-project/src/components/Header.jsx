export default function Header() {
	return (
		<header id='main-header'>
			<div id='title'>
				<img src="logo.jpg"></img>
				<h1>ReactFood</h1>
			</div>
			<button className='text-button'>Cart</button>
			{/* TODO: Add number of items in cart*/}

		</header>
	);
}