import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { AragonApi } from '@aragon/api-react'
import App from './App'
import { WalletProvider } from './wallet'

const reducer = state => {
  if (state === null) {
    return { count: 0, isSyncing: true }
  }
  return state
}

ReactDOM.render(
  <WalletProvider>
    <AragonApi reducer={reducer}>
      <App />
    </AragonApi>
  </WalletProvider>,
  document.getElementById('root')
)
