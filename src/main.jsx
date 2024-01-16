import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { DogsBrothersStoreApp } from './DogsBrothersStoreApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DogsBrothersStoreApp />
    </BrowserRouter>
  </React.StrictMode>,
)
