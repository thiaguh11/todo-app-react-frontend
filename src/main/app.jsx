import React from 'react';
import Menu from '../template/menu'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

const App = () => (
  <div className="container">
    <Router>
      <div>
        <Menu />

        <Route exact path="/" component={Todo} />
        <Route exact path="/about" component={About} />
        <Redirect from="*" to="/" />
      </div>
    </Router>
  </div>
)

export default App;
