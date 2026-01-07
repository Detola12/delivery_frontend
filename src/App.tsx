import Home from "./pages/Home.tsx";
import {type RouteObject, useRoutes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Listings from "./pages/restaurant/Listing.tsx";

function App() {

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true, element: <Home/>,
        },
      ]
    },
    {
      path: "/restaurants",
      element : <Layout/>,
      children: [
        {
          index: true, element: <Listings/>
        }
      ]
    },
    {
      path: "/restaurants/{restaurant}",
      element : <Layout/>,
      children: [
        {
          index: true, element: <Listings/>
        }
      ]
    }
  ]
  return useRoutes(routes);
}

export default App
