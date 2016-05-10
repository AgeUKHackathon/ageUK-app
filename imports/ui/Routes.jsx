import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import Theme from './Theme.jsx'
import App from './App.jsx'
import Nav from './Navigation/index.jsx'

export default class Routes extends React.Component {
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Nav} />
          </Route>
        </Router>
      </div>
    )
  }
}