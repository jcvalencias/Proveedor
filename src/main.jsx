import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import axios from 'axios';

// pages
import Admin from './Components/Admin/Admin.jsx';
import SignIn from './Components/SignUp/SignIn.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import ListadoMapa from './Components/Search/listado-con-mapa.jsx';
import AddListing from './Components/Proveedor/AddListing.jsx';


// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/SignIn",
    element: <SignIn />
  },
  {
    path: "/SignUp",
    element: <SignUp />
  },
  {
    path: "/listadoMapa",
    element: <ListadoMapa/>
  },
  {
    path: "/Addlisting",
    element: <AddListing/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
