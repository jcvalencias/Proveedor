import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import Header from '../Structure/Header';



// function getCSRFToken() {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.substring(0, 10) === 'csrftoken=') {
//                 cookieValue = decodeURIComponent(cookie.substring(10));
//                 break;
//             }
//         }
//     }

//     console.log(cookieValue);
//     return cookieValue;
// }

// const csrfToken = getCSRFToken();

// console.log(csrfToken);

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/accounts/login/', formData)
            .then(response => {
                console.log(response.data);
                // Redirect to dashboard or another page after login
            })
            .catch(error => {
                console.error(error);
                setError('Login failed. Please check your credentials.');
            });
    };

    return (
        <>
            <Header />
            <div className="auth-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>
                <h5>Do you want to create an account?</h5>
                <a href='/SignUp'>
                <button>Sign Up</button>
                </a>
                {error && <p className="error">{error}</p>}
            </div>
        </>
    );
};

export default SignIn;