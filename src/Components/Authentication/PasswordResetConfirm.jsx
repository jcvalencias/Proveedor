import React, { useState,useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import api from "../../api";
import Carrousel from "./Carrousel";

const PasswordInput = ({ password, setPassword, text }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const timeoutRef = useRef(null);

  const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
      if (!isPasswordVisible) {
          // Automatically hide the password after 1 second
          timeoutRef.current = setTimeout(() => {
              setIsPasswordVisible(false);
          }, 1000);
      } else {
          clearTimeout(timeoutRef.current);
      }
  };

  return (
      <div className="form-floating form-floating-custom form-password auth-pass-inputgroup mb-3">
          <input
              type={isPasswordVisible ? 'text' : 'password'}
              className="form-control redondeado10"
              id="password-input"
              placeholder="Ingrese su Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button
              type="button"
              className="btn btn-link position-absolute h-100 end-0 top-0"
              onClick={togglePasswordVisibility}
          >
              <i className={`mdi ${isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'} font-size-18 text-muted`} />
          </button>
          <label htmlFor="password-input">{text}</label>
      </div>
  );
};

const PasswordResetConfirm = () => {
    const { uid, token } = useParams();  // Extracting uid and token from route params
    const navigate = useNavigate();  // For navigation after successful reset

    const [new_password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (new_password !== confirm_password) {
        setError('Passwords do not match');
        return;
        }

        try {
        const response = await api.post('/signup/password-reset-confirm/'+uid+'/'+ token + '/', {
            new_password,
            confirm_password
        });
        if (response.status === 200) {
            setSuccess(true);
            navigate('/signin');
        }
        } catch (err) {
        setError('Failed to reset password. Please try again.');
        }
    };

    return (
      // <form onSubmit={handleSubmit}>
      // <div>
      //     <label>New Password:</label>
      //     <input
      //     type="password"
      //     value={new_password}
      //     onChange={(e) => setPassword(e.target.value)}
      //     required
      //     />
      // </div>
      // <div>
      //     <label>Confirm Password:</label>
      //     <input
      //     type="password"
      //     value={confirm_password}
      //     onChange={(e) => setConfirmPassword(e.target.value)}
      //     required
      //     />
      // </div>
      // {error && <p className="error">{error}</p>}
      // <button type="submit">Reset Password</button>
      // </form>
    <>
      <div id="fb-root"></div>
      <div className="account-pages">
      <div className="container">
          <div className="row g-0 bg-white align-items-center">
              <Carrousel />
              <div className="col-lg-6">
                  <div className="auth-box">
                      <div className="mb-4 mb-md-5 text-center">
                          <a className="auth-logo">
                              <img src="/assets/Authentication/images/logo-color.png" height={48} alt="Solukay logo" />
                          </a>
                      </div>

                      <div className="auth-content">
                          <div className="mb-3 pb-3 text-center">
                              <h4 className="logo-verde-oscuro">Bienvenido de nuevo!</h4>
                              <p className="text-muted mb-0">Ingrese sus datos para acceder</p>
                          </div>
                          <form onSubmit={handleSubmit}>
                              
                              

                              <PasswordInput password={new_password} setPassword={setPassword} text="Contraseña"/>

                              <PasswordInput password={confirm_password} setPassword={setConfirmPassword} text="Validar contraseña"/>

                              {error && <p className="error">{error}</p>}
                              <div className="mt-3">
                                  <button className="btn shadow-none w-100 main-btn" type="submit">Cambiar contraseña</button>
                              </div>
                              <hr />
                              <div className="mt-3 text-center">
                                  <p className="mb-0 text-muted">Aún no tiene una cuenta? Es gratis!<a href="/signup"
                                          className="text-success fw-bold text-decoraton-underline ms-1"> Crear una Cuenta
                                      </a></p>
                              </div>
                          </form>
                          <div className="row justify-content-center align-items-center mt-4">
                      <div className="col-12 col-md-6" style={{ textAlign: "center" }}>
                          <button className="gsi-material-button mb-4">
                          <div className="gsi-material-button-state" />
                          <div className="gsi-material-button-content-wrapper">
                              <div className="gsi-material-button-icon">
                              <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  style={{ display: "block" }}
                              >
                                  <path
                                  fill="#EA4335"
                                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                  />
                                  <path
                                  fill="#4285F4"
                                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                  />
                                  <path
                                  fill="#FBBC05"
                                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                  />
                                  <path
                                  fill="#34A853"
                                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                  />
                                  <path fill="none" d="M0 0h48v48H0z" />
                              </svg>
                              </div>
                              <span className="gsi-material-button-contents">
                              Continuar con Google
                              </span>
                              <span style={{ display: "none" }}>
                              Continuar con Google
                              </span>
                          </div>
                          </button>
                      </div>
                      {/* end col */}
                      <div className="col-12 col-md-6">
                          <div
                          className="fb-login-button mb-4"
                          data-width="Ingresa con Facebook"
                          data-size="large"
                          data-button-type="rounded"
                          data-layout="rounded"
                          data-auto-logout-link="false"
                          data-use-continue-as="false"
                          style={{ borderRadius: "24px!important", textAlign: "center" }}
                          />
                      </div>
                      </div>
                      {/* end row */}
                  </div>
                  {/* auth content */}
                  </div>
                  {/* end authbox */}
              </div>
              {/* end col */}
              </div>
              {/* end row */}
          </div>
          {/* end container */}
          </div>
      </>
        
    );
}

export default PasswordResetConfirm;