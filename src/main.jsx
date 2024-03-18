import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Headers from './Pages/Headers/Headers..jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot
(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Headers />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
