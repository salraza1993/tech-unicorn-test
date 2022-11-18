import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/variables.scss'
import './assets/scss/mixins.scss'

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './router/AppRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppRoutes/>
    </Router>
  </React.StrictMode>
)
