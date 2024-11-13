import api from "../../api";
import { useState } from "react";
import { useNavigate, useLocation,  useParams } from "react-router-dom";
import Carrousel from "./Carrousel";


const Activate = () => {
    const { uid, token } = useParams();  // Extracting uid and token from route params
    const navigate = useNavigate(); 
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await api.post('/signup/activate/'+uid+'/'+ token + '/');
        if (response.status === 200) {
            setSuccess(true);
            navigate('/signin');
        }
        } catch (err) {
        setError('Failed to activate your account. Please try again.');
        }
    };

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
                <img src="/assets/Authentication/images/logo-color.png" height={48} alt="Solukay logo" />
                </a>
            </div>
            <div className="auth-content">
                <form onSubmit={handleSubmit}>
                <div className="mb-3 pb-2">
                    <div className="avatar-md mx-auto">
                    <span className="avatar-title text-success bg-soft-success rounded-circle">
                        <i className="mdi mdi-email display-6" />
                    </span>
                    </div>
                </div>
                <div className="text-center">
                    <h4 className="logo-verde-oscuro">Tu cuenta ha sido activada exitosamente</h4>
                    <p className="text-muted">
                    Ahora eres parte de la familia Solukay
                    </p>
                </div>
                <div className="mt-3">
                    <button className="btn shadow-none w-100 main-btn" type="submit">
                    Ingresar
                    </button>
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

export default Activate;