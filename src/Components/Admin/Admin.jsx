import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';

const Admin = () => {
    const [theme, setTheme] = useState(''); // '' for default, 'dark-theme' or 'light-theme' for other themes

    const toggleTheme = (themeName) => {
        setTheme(themeName);
    };

    return (
        <div className={`app-container ${theme}`}>
            <div className="theme-toggle-buttons">
                <button onClick={() => toggleTheme('')} className="theme-button default">Default Theme</button>
                <button onClick={() => toggleTheme('dark-theme')} className="theme-button dark">Dark Theme</button>
                <button onClick={() => toggleTheme('light-theme')} className="theme-button light">Light Theme</button>
            </div>

            <div className="usuario-form-container">
                <h3>Create a New User</h3>
                <UsuarioForm />
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
        fotos: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        setFormData({
            ...formData,
            [name]: e.target.files[0],
        });
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
        if (formData.fotos) {
            data.append('fotos', formData.fotos);
        }

        axios.post('https://c395-190-24-56-12.ngrok-free.app/api/usuarios/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            alert('Usuario created successfully!');
            console.log(response.data);
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="usuario-form">
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
                    onChange={handleFileChange}
                    className="form-control"
                />
            </div>
            <button type="submit" className="submit-button">Crear Usuario</button>
        </form>
    );
};

export default Admin;
