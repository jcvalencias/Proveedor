import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import './index.css'
// import '../public/assets/css/bootstrap.min.css';
// import '../public/assets/css/magnific-popup.css';
// import '../public/assets/css/slick.css';
// import '../public/assets/css/nice-select.css';
// import '../public/assets/css/jquery-ui.min.css';
// import '../public/assets/css/animate.css';
// import '../public/assets/css/default.css';
// import '../public/assets/css/style.css';
// import '../public/assets/fonts/themify-icons/themify-icons.css';
// import '../public/assets/fonts/flaticon/flaticon.css';

// // For Authentication styles
// import '../public/assets/Authentication/css/materialdesignicons.min.css';
// import '../public/assets/Authentication/css/authentication-style.css';

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
