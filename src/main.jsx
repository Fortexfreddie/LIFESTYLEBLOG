import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { NewsProvider } from './context/NewsContext'
import { AllNewsProvider } from './context/NewsContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <AllNewsProvider>
          <App />
        </AllNewsProvider>
      </NewsProvider>
    </BrowserRouter>
  </StrictMode>,
)
