import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import './index.css'

// pages
import Admin from './Components/Admin/Admin.jsx';
import SignIn from './Components/Authentication/SignIn.jsx';
import SignUp from './Components/Authentication/SignUp.jsx';
import ListadoMapa from './Components/Search/listado-con-mapa.jsx';
import AddListing from './Components/Proveedor/AddListing.jsx';
import ProtectedRoute from './Components/JWT/ProtetedRoute.jsx';
import Login from './Components/JWT/login.jsx';
import Register from './Components/JWT/Register.jsx';
import Notes from './Components/notes/notes.jsx';


function Logout() {
  localStorage.clear()
  return <Navigate to='/SignIn'/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Navitage to='/SignUp' />
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><App /></ProtectedRoute>,
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/SignIn",
    element: <Login />
  },
  {
    path: "/SignUp",
    element: <SignUp />
  },
  {
    path: "/logout",
    element: <Logout/>
  },
  {
    path: "/listadoMapa",
    element: <ListadoMapa/>
  },
  {
    path: "/Addlisting",
    element: <AddListing/>
  },
  {
    path: "/notes",
    element: <Notes/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
