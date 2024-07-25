import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // After successful login, navigate to the consultation page
    navigate('/consultation');
  };

  const handleSubscribe = () => {
    // Navigate to the subscribe page
    navigate('/subscribe');
  };

  return (
    <form>
      <div className="row g-3 mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="Email" aria-label="Email" id="email"/>
        </div>
        <div className="col">
          <input type="password" className="form-control" placeholder="Password" aria-label="Password" id="Password" />
        </div>
      </div>

      <div className="d-grid gap-2 mb-3">
        <button className="btn btn-primary" type="button" onClick={handleLogin}>Se connecter</button>
        <button className="btn btn-primary" type="button" onClick={handleSubscribe}>Créer un compte</button>
      </div>
    </form>
  );
}
