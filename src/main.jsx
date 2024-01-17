import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { DogsBrothersStoreApp } from './DogsBrothersStoreApp'
import './styles.css'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <DogsBrothersStoreApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
