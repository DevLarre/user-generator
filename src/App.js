import React, { useState } from 'react';
import './App.css';
import HackerEffect from './components/HackerEffect';
import UserCard from './components/UserCard';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUser = () => {
    setLoading(true);
    setError(null);
    fetch('https://teste-api-deploy-render.onrender.com/get-user/randomuser')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar os usuários');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro:', error);
        setError('Erro ao carregar os usuários');
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <HackerEffect />
      <div className="container">
        <h1>GERADOR DE USUÁRIO ALEATÓRIO</h1>
        <p className="subtitle">
          Uma API gratuita e de código aberto para gerar dados de usuários aleatórios. Como Lorem Ipsum, mas para pessoas.
        </p>
        <button id="loadUsers" onClick={loadUser} disabled={loading}>
          {loading ? (
            <div className="spinner"></div>
          ) : (
            'Gerar Usuário'
          )}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && <UserCard user={user} />}
        <div className="sponsored">
          <h3>Random User</h3>
          <p>All rights reserved to Random User</p>
        </div>
        <a
            id="randomapi"
            href="https://randomuser.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Learn More
          </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
