import React from 'react'
import ReactDOM from 'react-dom/client'

import { DogsBrothersStoreApp } from './DogsBrothersStoreApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DogsBrothersStoreApp />
    </BrowserRouter>
  </React.StrictMode>,
)
