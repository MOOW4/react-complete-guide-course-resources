import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
/*
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />,
    <Route path="/products" element={<Products />} />
  </Route>
);
*/

const router = createBrowserRouter([
  {path: "/", element: <RootLayout />, children: [
      {path: "/", element: <Home />},
      {path: "/products", element: <Products />},
    ], errorElement: <ErrorPage />},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
