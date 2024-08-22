import React, { useState } from 'react';
import axios from 'axios';

const UsuarioForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo_electronico: '',
        tipo_usuario: 'cliente',  // Default value
        estado: 'activo',  // Default value
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
            [name]: e.target.files[0],  // Handle file uploads
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the data for sending
        const data = new FormData();
        data.append('nombre', formData.nombre);
        data.append('correo_electronico', formData.correo_electronico);
        data.append('tipo_usuario', formData.tipo_usuario);
        data.append('estado', formData.estado);
        if (formData.foto_perfil) {
            data.append('foto_perfil', formData.foto_perfil);
        }
        if (formData.fotos) {
            data.append('fotos', formData.fotos);
        }

        // Make the API call
        axios.post('http://127.0.0.1:8000/api/usuarios/create/', data, {
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input
                    type="email"
                    name="correo_electronico"
                    value={formData.correo_electronico}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Tipo de Usuario:</label>
                <select
                    name="tipo_usuario"
                    value={formData.tipo_usuario}
                    onChange={handleChange}
                    required
                >
                    <option value="cliente">Cliente</option>
                    <option value="proveedor">Proveedor</option>
                    <option value="empleado">Empleado</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div>
                <label>Estado:</label>
                <select
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
            <div>
                <label>Foto de Perfil:</label>
                <input
                    type="file"
                    name="foto_perfil"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
            <div>
                <label>Fotos:</label>
                <input
                    type="file"
                    name="fotos"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
            <button type="submit">Crear Usuario</button>
        </form>
    );
};

export default UsuarioForm;
