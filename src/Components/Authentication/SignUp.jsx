import { useState, useEffect, useRef } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import Carrousel from "./Carrousel";

const PasswordInput = ({ password, setPassword }) => {
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
            <label htmlFor="password-input">Contraseña</label>
        </div>
    );
};

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // State for password
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post("/signup/", { username, password, email });

            // Change to validate email page
            navigate('/emailverification', { state: { email } });
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
            setPassword("");
        }
    };

    return (
        <>
            <div id="fb-root"></div>
            
            <div className="account-pages">
                <div className="container">
                    <div className="row g-0 bg-white align-items-center">
                        <Carrousel />
                        {/* end col */}
                        <div className="col-lg-6">
                            <div className="auth-box">
                                <div className="mb-4 mb-md-5 text-center">
                                    <a className="auth-logo">
                                        <img src="assets/Authentication/images/logo-color.png" height={48} alt="Solukay logo" />
                                    </a>
                                </div>
                                <div className="auth-content">
                                    <div className="mb-3 text-center">
                                        <h4 className="logo-verde-oscuro">Crear una Cuenta</h4>
                                        <p className="text-muted">Por favor, completa con tus datos</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating form-floating-custom mb-3">
                                            <input
                                                type="text"
                                                className="form-control redondeado10"
                                                id="input-email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Ingresa tu Email"
                                            />
                                            <label htmlFor="input-email">Email</label>
                                        </div>
                                        <div className="form-floating form-floating-custom mb-3">
                                            <input
                                                type="text"
                                                className="form-control redondeado10"
                                                id="input-username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Ingresa tu Usuario"
                                            />
                                            <label htmlFor="input-username">Usuario</label>
                                        </div>
                                        
                                        {/* Pass password state and setter to PasswordInput */}
                                        <PasswordInput password={password} setPassword={setPassword} />

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefault"
                                            />
                                            <label
                                                className="form-check-label text-muted f-15"
                                                htmlFor="flexCheckDefault"
                                            >
                                                Acepto los{" "}
                                                <a
                                                    href="#"
                                                    className="text-success text-decoraton-underline ms-1"
                                                >
                                                    Términos y Condiciones
                                                </a>
                                            </label>
                                        </div>
                                        <div className="mt-3">
                                            <button
                                                className="btn shadow-none w-100 main-btn"
                                                type="submit"
                                            >
                                                Crear Cuenta
                                            </button>
                                        </div>
                                        <hr />
                                        <div className="mt-3 text-center">
                                            <p className="mb-0 text-muted">
                                                Ya tienes cuenta ?
                                                <a
                                                    href="/signin"
                                                    className="text-success fw-bold text-decoraton-underline ms-1"
                                                >
                                                    {" "}
                                                    Acceder
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                    {/* end form */}
                                    <div className="row justify-content-center align-items-center mt-4">
                                        <div className="col-12 col-md-6" style={{ textAlign: "center" }}>
                                            <button className="gsi-material-button mb-4">
                                                <div className="gsi-material-button-state" />
                                                <div className="gsi-material-button-content-wrapper">
                                                    <div className="gsi-material-button-icon">
                                                        {/* SVG for Google button */}
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
};

export default SignUp;
