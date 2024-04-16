import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import WelcomePage from "../Pages/WellcomePage/WelcomePage";
import SignUp from "../Pages/SignUp/SignUp";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<WelcomePage></WelcomePage>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signUp',
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);