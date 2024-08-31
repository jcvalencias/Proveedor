import React, { useState, useEffect } from 'react';
import Header from '../Structure/Header';

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [csrfToken, setCsrfToken] = useState('eOiqcjG0FRV7hrSOPunroDLGKtJEyZVO');
    const [error, setError] = useState('');

    // Function to retrieve CSRF token from cookies
    const getCsrfToken = () => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, 10) === 'csrftoken=') {
                    cookieValue = decodeURIComponent(cookie.substring(10));
                    break;
                }
            }
        }

        return cookieValue;
    };

    // Fetch CSRF token on component mount
    // useEffect(() => {
    //     const token = getCsrfToken();
    //     if (!token) {
    //         fetch('https://e655-190-24-56-12.ngrok-free.app/signup/get-csrf-token/', {
    //             credentials: 'include',  // Include cookies in the request
    //         })
    //             .then(response => {response
    //                 console.log(document.cookie)
    //             })
    //             .then(data => {
    //                 setCsrfToken(getCsrfToken());
    //                 console.log(csrfToken);
    //             })
    //             .catch(error => {
    //                 console.error('Could not fetch CSRF token:', error);
    //             });
    //     } else {
    //         setCsrfToken(token);
    //     }
    // }, []);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken(),  // Send the CSRF token in the headers
            },
            credentials: 'include',  // Include cookies in the request
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log('Login successful:', data);
            // Redirect to a different page or update UI on success
        })
        .catch(error => {
            console.error('Login failed:', error);
            setError('Invalid credentials or CSRF token issue.');
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