import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import api from '../api';
import { User, AuthResponse } from '../types';
import '../styles/customStyles.css';

interface LoginProps {
  onLoginSuccess: () => void;
  onGuestLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onGuestLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

 const handleLogin = async () => {
  const user: User = { username, password };
  try {
    const response = await api.post<AuthResponse>('/auth/login', JSON.stringify(user), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    alert(response.data.message);
    onLoginSuccess();
  } catch (error) {
    alert('Login failed');
  }
};

  return (
    <div className="center-container">
      <MDBContainer className="login-box gradient-form">
        <div className="text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            style={{ width: '185px' }}
            alt="logo"
            className="mb-4"
          />
          <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
        </div>

        <p>Please login to your account</p>

        <div className="form-group mb-4"> 
            
          <label htmlFor="form1">Email address:</label>         
          <MDBInput
            id="form1"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="form2">Password:</label>        
          <MDBInput
            id="form2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <MDBBtn className="w-100 gradient-custom-2 no-transform" onClick={handleLogin}>
            Sign in
          </MDBBtn>
        </div>

        <div className="text-center">
          <a className="text-muted" href="#!">
            Forgot password?
          </a>
        </div>

        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
          <p className="mb-0">Don't have an account?</p>
          <MDBBtn outline className="mx-2 no-transform" color="danger">
            Register
          </MDBBtn>
          <MDBBtn outline className="w-100 no-transform" color="primary" onClick={onGuestLogin}>
            Continue as Guest
          </MDBBtn>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Login;
