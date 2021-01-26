import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Main, Header, Button, Tabs } from '@aragon/ui'
import ApplicationForm from './components/ApplicationForm'

function App() {
  return (
    <Main>
      <Router>
        <Header
          primary="PORGI"
          secondary={
            <Button mode="strong">
              <Link to="/form">Apply your idea!</Link>
            </Button>
          }
        />
        <div>
          <ul>
            <li>
              <Link to="/">Active projects</Link>
            </li>
            <li>
              <Link to="/le">Pre-sale projects</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              PORGI
            </Route>
            <Route path="/form">
              <ApplicationForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </Main>
  )
}

export default App
