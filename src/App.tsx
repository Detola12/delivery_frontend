import Home from "./pages/Home.tsx";
import {type RouteObject, useRoutes} from "react-router-dom";
import Layout from "./components/Layout.tsx";

function App() {

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true, element: <Home/>,
        }
      ]
    }
  ]
  return useRoutes(routes);
}

export default App
