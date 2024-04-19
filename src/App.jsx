import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import SignUp from "./component/SignUp/SignUp";
import SignIn from "./component/SignIn/SignIn";
import WeatherContextProvider from "./Context/WeatherContext";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <SignIn />,
        },
      ],
    },
  ]);

  return (
    <>
      <WeatherContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </WeatherContextProvider>
    </>
  );
}

export default App;
