import { useNavigate, useLocation, useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import api from "../../api";


const ActivateAccount = () => {
    const location = useLocation();

    const { uid, token } = useParams()
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await api.post('/signup/activate/'+uid+'/'+ token + '/');
        if (response.status === 200) {
            navigate('/signin');
        }
        } catch (err) {
        }
    };

    return (
        <>
        <div id="fb-root"></div>
                    
        <div className="account-pages">
        <div className="container">
        <div className="row g-0 bg-white align-items-center">
        <div className="col-lg-12">
            <div className="auth-box">
            <div className="mb-4 mb-md-5 text-center">
                <a className="auth-logo">
                <img src="/assets/Authentication/images/logo-color.png" height={48} alt="Solukay logo" />
                </a>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="auth-content">
                <div className="mb-3 pb-2">
                    <div className="avatar-md mx-auto">
                    <span className="avatar-title text-success bg-soft-success rounded-circle">
                        <i className="mdi mdi-email display-6" />
                    </span>
                    </div>
                </div>
                <div className="text-center">
                    <h4 className="logo-verde-oscuro">Cuenta Activada Exitosamente</h4>
                </div>
                <div className="mt-3">
                    <button className="btn shadow-none w-100 main-btn" type="submit">
                    Iniciar Sesion
                    </button>
                </div>
                {/* end form */}
            </div>
            </form>

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

export default ActivateAccount;