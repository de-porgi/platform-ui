import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Main, Header, Button } from '@aragon/ui'
import CompanyForm from './components/ApplicationForm/CompanyForm'
import DevelopmentForm from './components/ApplicationForm/DevelopmentForm'

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
              {/* for dev purposes only! */}
              <Link to="/dev">Development Form</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              PORGI
            </Route>
            <Route path="/form">
              <CompanyForm />
            </Route>
            <Route path="/dev">
              <DevelopmentForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </Main>
  )
}

export default App
