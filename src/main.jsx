import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'datatables.net-dt/css/jquery.dataTables.css';
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
   <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>

)