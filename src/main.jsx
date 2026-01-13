import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Auth0Provider } from "@auth0/auth0-react";

import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  
    <App/>
  
  </AuthProvider>
  
)
