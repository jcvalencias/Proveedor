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
import EmailVerification from './Components/Authentication/email-verification.jsx';
import RecoverPass from './Components/Authentication/recover-pass.jsx';
import PasswordResetConfirm from './Components/Authentication/PasswordResetConfirm.jsx';
import Activate from './Components/Authentication/Activate.jsx';


function Logout() {
  localStorage.clear()
  return <Navigate to='/SignIn'/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Navigate to='/SignUp' />
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <ProtectedRoute><Admin/></ProtectedRoute>,
  },
  {
    path: "/SignIn",
    element: <SignIn />
  },
  {
    path: "/SignUp",
    element: <SignUp/>
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
    path: "/emailverification",
    element: <EmailVerification/>
  },
  {
    path: "/recoverpass",
    element: <RecoverPass/>
  },
  { 
    path: "/reset-password/:uid/:token",
    element: <PasswordResetConfirm/>
  },
  { 
    path: "/activate/:uid/:token",
    element: <Activate/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
