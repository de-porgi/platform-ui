import { Main, Header } from '@aragon/ui'
import { Spring, animated } from 'react-spring'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AccountModule from './components/AccountModule/AccountModule'
import { Landing } from './routes/Landing'
import { Projects } from './routes/Projects'
import { NewProject } from './routes/NewProject'
import { Account } from './routes/Account'
import { Project } from './routes/Project'
import CompanyForm from './components/ApplicationForm/CompanyForm'
import DevelopmentForm from './components/ApplicationForm/DevelopmentForm'

const Router = BrowserRouter

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


// function App() {
//   return (
//     <Main>
//       <Router>
//         <Header
//           primary="PORGI"
//           secondary={
//             <Button mode="strong">
//               <Link to="/form">Apply your idea!</Link>
//             </Button>
//           }
//         />
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Active projects</Link>
//             </li>
//             <li>
//               {/* for dev purposes only! */}
//               <Link to="/dev">Development Form</Link>
//             </li>
//           </ul>
//           <Switch>
//             <Route exact path="/">
//               PORGI
//             </Route>
//             <Route path="/form">
//               <CompanyForm />
//             </Route>
//             <Route path="/dev">
//               <DevelopmentForm />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </Main>