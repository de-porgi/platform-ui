import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { WalletProvider } from './wallet'

ReactDOM.render(
  <WalletProvider>
    <App />
  </WalletProvider>,
  document.getElementById('root')
)
