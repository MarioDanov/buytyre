// src/components/Register.tsx
import React from 'react';
import api from '../api';
import qs from 'qs';

const Register = ({ username, setUsername, password, setPassword, toggleRegistering }) => {
    const handleRegister = async () => {
        const newUser = qs.stringify({ username, password });
        try {
            const response = await api.post('/auth/register', newUser, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Registration successful');
            toggleRegistering();
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleRegister}>Register</button>
            <button onClick={toggleRegistering}>Back to Login</button>
        </div>
    );
};

export default Register;
