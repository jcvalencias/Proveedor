import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import axios from 'axios';
import Header from '../Structure/Header';

const Admin = () => {
    const [theme, setTheme] = useState(''); // '' for default, 'dark-theme' or 'light-theme' for other themes

    const toggleTheme = (themeName) => {
        setTheme(themeName);
    };

    return (
        <div className={`app-container ${theme}`}>
            <Header />
            <div className="theme-toggle-buttons">
                <button onClick={() => toggleTheme('')} className="theme-button default">Default Theme</button>
                <button onClick={() => toggleTheme('dark-theme')} className="theme-button dark">Dark Theme</button>
                <button onClick={() => toggleTheme('light-theme')} className="theme-button light">Light Theme</button>
            </div>

            <div className="usuario-form-container">
                <h3>Create a New User</h3>
                <UsuarioForm />
                <UserList />
            </div>
        </div>
    );
};

const UsuarioForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo_electronico: '',
        tipo_usuario: 'cliente',
        estado: 'activo',
        descripcion: '',
        foto_perfil: null,
        fotos: [],
    });

    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        if (name === 'fotos') {
            setFormData({
                ...formData,
                [name]: e.target.files,  // Store the FileList object
            });
        } else {
            setFormData({
                ...formData,
                [name]: e.target.files[0],  // Handle single file upload
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('nombre', formData.nombre);
        data.append('correo_electronico', formData.correo_electronico);
        data.append('tipo_usuario', formData.tipo_usuario);
        data.append('estado', formData.estado);
        data.append('descripcion', formData.descripcion);
        if (formData.foto_perfil) {
            data.append('foto_perfil', formData.foto_perfil);
        }
        if (formData.fotos.length > 0) {
            Array.from(formData.fotos).forEach((file, index) => {
                data.append(`fotos_${index}`, file);  // Use a unique key for each file
            });
        }

        axios.post('https://969e-190-24-56-12.ngrok-free.app/api/usuarios/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            setAlertMessage('Usuario created successfully!');
            setAlertType('success');
            console.log(response.data);
            // Clear the form after successful submission
            setFormData({
                nombre: '',
                correo_electronico: '',
                tipo_usuario: 'cliente',
                estado: 'activo',
                descripcion: '',
                foto_perfil: null,
                fotos: [],
            });
        })
        .catch((error) => {
            setAlertMessage('There was an error creating the Usuario. Please try again.');
            setAlertType('error');
            console.error('There was an error!', error);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="usuario-form">
            {alertMessage && (
                <div className={`alert ${alertType}`}>
                    {alertMessage}
                </div>
            )}
            <div className="form-group">
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Correo Electrónico:</label>
                <input
                    type="email"
                    name="correo_electronico"
                    value={formData.correo_electronico}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Tipo de Usuario:</label>
                <select
                    name="tipo_usuario"
                    value={formData.tipo_usuario}
                    onChange={handleChange}
                    required
                    className="form-control"
                >
                    <option value="cliente">Cliente</option>
                    <option value="proveedor">Proveedor</option>
                    <option value="empleado">Empleado</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div className="form-group">
                <label>Estado:</label>
                <select
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                    className="form-control"
                >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
            <div className="form-group">
                <label>Descripcion:</label>
                <textarea
                    type="text"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Foto de Perfil:</label>
                <input
                    type="file"
                    name="foto_perfil"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Fotos:</label>
                <input
                    type="file"
                    name="fotos"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="form-control"
                />
            </div>
            <button type="submit" className="submit-button">Crear Usuario</button>
        </form>
    );
};


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://292d-190-24-56-12.ngrok-free.app/api/usuarios/')
            .then(response => {
                console.log(response.data)
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error retrieving the users!", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>There was an error loading the users.</div>;

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.nombre} ({user.correo_electronico})
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Admin;
