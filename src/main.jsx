import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { DarkModeProvider } from "./context/DarkModeContext";
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </StrictMode>,
)
