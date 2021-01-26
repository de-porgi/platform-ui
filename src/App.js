import React from 'react'
import { Main } from '@aragon/ui'
import { Spring, animated } from 'react-spring'

import AccountModule from './components/AccountModule/AccountModule'

function App() {
  return (
    <Spring
      from={{ opacity: 0, scale: 0.98 }}
      to={{ opacity: 1, scale: 1 }}
      native
    >
      {({ opacity, scale }) => (
        <animated.div style={{ opacity }}>
          <animated.div
            style={{
              transform: scale.interpolate(v => `scale3d(${v}, ${v}, 1)`),
            }}
          >
            <Main>
              <h1>Hello PORGI!</h1>
              <AccountModule />
            </Main>
          </animated.div>
        </animated.div>
      )}
    </Spring>
  )
}

export default App
