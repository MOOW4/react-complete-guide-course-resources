import {Link} from "react-router-dom";

const PRODUCTS = [
  {id: 'p1', title: 'Gaming Mouse', price: 29.99},
  {id: 'p2', title: 'Harry Potter 3', price: 9.99},
  {id: 'p3', title: 'Used plastic bottle', price: 0.99},
  {id: 'p4', title: 'Half-dried plant', price: 2.99}
];


export default function Products() {
  return <div>
    <h1>Products</h1>
    <p>Welcome to the products page!</p>
    <ul>
      {PRODUCTS.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  </div>;
}