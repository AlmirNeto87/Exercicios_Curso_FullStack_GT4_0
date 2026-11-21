import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aura from '@primeuix/themes/aura'; 
import { PrimeReactProvider } from '@primereact/core';  

createRoot(document.getElementById('root')).render(
  
  
  <PrimeReactProvider theme={{ preset: Aura }}>
    <App />
  </PrimeReactProvider>

);
