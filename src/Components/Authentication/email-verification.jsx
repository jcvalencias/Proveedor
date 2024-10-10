import { useState, useEffect, useRef } from "react";
import api from "../../api"
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import Carrousel from "./Carrousel";


const EmailVerification = () => {
    return (
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
                <img src="assets/Authentication/images/logo-color.png" height={48} alt="Solukay logo" />
                </a>
            </div>
            <div className="auth-content">
                <form>
                <div className="mb-3 pb-2">
                    <div className="avatar-md mx-auto">
                    <span className="avatar-title text-success bg-soft-success rounded-circle">
                        <i className="mdi mdi-email display-6" />
                    </span>
                    </div>
                </div>
                <div className="text-center">
                    <h4 className="logo-verde-oscuro">Revisa tu Email</h4>
                    <p className="text-muted">
                    Te hemos enviado un email de verificación
                    <br />a tu email xxxx@email.com
                    <br />
                    Por favor, revísalo
                    </p>
                </div>
                <div className="mt-3">
                    <button className="btn shadow-none w-100 main-btn" type="submit">
                    Revisa tu email
                    </button>
                </div>
                <hr />
                <div className="mt-3 text-center">
                    <p className="mb-0 text-muted">
                    No lo recibiste ?
                    <a
                        href="#"
                        className="text-success fw-bold text-decoraton-underline ms-1"
                    >
                        {" "}
                        Re-Enviar
                    </a>
                    </p>
                </div>
                </form>
                {/* end form */}
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

export default EmailVerification;