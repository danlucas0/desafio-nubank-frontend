import React from 'react';
import './App.css';
import CadastroForm from './components/CadastroForm';
import ClientesList from './components/ClientesList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="nubank-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#820AD1"/>
              <text x="16" y="21" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">N</text>
            </svg>
            <span>nubank</span>
          </div>
          <p>Cadastro de Clientes</p>
        </div>
      </header>

      <main className="app-main">
        <CadastroForm />
        <ClientesList />
      </main>

      <footer className="app-footer">
        <p>Nubank © 2024 — Desafio Técnico Frontend</p>
      </footer>
    </div>
  );
}

export default App;
