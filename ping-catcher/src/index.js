import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Security } from '@okta/okta-react'
import config from './config'
import './index.css'
import App from './App'

import dotenv from 'dotenv'
dotenv.config()

ReactDOM.render(
  <Security {...config.oidc}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Security>,
  document.getElementById('root')
)
