import React from 'react'
import { Main, Header } from '@aragon/ui'
import { Spring, animated } from 'react-spring'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AccountModule from './components/AccountModule/AccountModule'
import Landing from './routes/Landing'
import Projects from './routes/Projects'
import NewProject from './routes/NewProject'
import Account from './routes/Account'
import Project from './routes/Project'

const Router = BrowserRouter

const App = () => {
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
              <Header primary="Hello Porgi" secondary={<AccountModule />} />
              <Router>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/new" component={NewProject} />
                  <Route path="/account" component={Account} />
                  <Route path="/project/:project" component={Project} />
                </Switch>
              </Router>
            </Main>
          </animated.div>
        </animated.div>
      )}
    </Spring>
  )
}

export default App
