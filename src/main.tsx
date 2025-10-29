import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import './i18n/i18n' // Importando configuração do i18n

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)