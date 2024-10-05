import {Link} from "react-router-dom";

// import {useNavigate} from "react-router-dom";

export default function Home() {
  return <div>
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
    <Link to={"/products"}>Products</Link>
  </div>;
}