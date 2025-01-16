import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
import "./css/button.css";
import "./css/typography.css";
import "./css/variables.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
