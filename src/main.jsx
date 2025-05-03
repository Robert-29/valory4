import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrivyProvider } from '@privy-io/react-auth';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <PrivyProvider appId="cma8t9iw8001zkt0l93gm1l4i">
    <App />
  </PrivyProvider>
  </StrictMode>,
  
)
