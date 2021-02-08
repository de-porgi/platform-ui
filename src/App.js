import React from 'react'
import { Main } from '@aragon/ui'
import { Button, Segment, Menu, Container } from 'semantic-ui-react'
import { Spring, animated } from 'react-spring'
import { BrowserRouter, Switch, Route, Link, HashRouter } from 'react-router-dom'

import Logo from './components/Logo'
import AccountModule from './components/AccountModule/AccountModule'
import Landing from './routes/Landing'
import Projects from './routes/Projects'
import NewProject from './routes/NewProject'
import Account from './routes/Account'
import Project from './routes/Project'
import { NewProjectSeason } from './routes/NewProjectSeason'

const Router = process.env.IPFS === 'True' ? HashRouter : BrowserRouter

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
            <Router>
              <Main layout={false}>
                <Segment textAlign="center" clearing>
                  <Menu floated secondary>
                    <Menu.Item fitted>
                      <Link to="/">
                        <Logo />
                      </Link>
                    </Menu.Item>
                    <Menu.Item fitted>
                      <Button floated="left" color="blue" basic as={Link} to="/new">
                        Create Project
                      </Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/account">
                        Account
                      </Link>
                    </Menu.Item>
                  </Menu>
                  <AccountModule />
                </Segment>
                <Container>
                  <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/new" component={NewProject} />
                    <Route path="/account" component={Account} />
                    <Route path="/project/:address">
                      <Switch>
                        <Route exact path="/project/:address/new_season" component={NewProjectSeason} />
                        <Route exact path="/project/:address" component={Project} />
                      </Switch>
                    </Route>
                  </Switch>
                </Container>
              </Main>
            </Router>
          </animated.div>
        </animated.div>
      )}
    </Spring>
  )
}

export default App
