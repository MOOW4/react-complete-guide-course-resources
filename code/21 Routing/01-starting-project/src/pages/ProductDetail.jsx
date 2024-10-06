import {useParams} from "react-router-dom";

export default function ProductDetail() {

  const params = useParams();
  return <div>
    <h1>{params.productId}</h1>
    <p>Welcome to the product detail page!</p>
  </div>;
}