import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { HashRouter,Switch, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import Page2 from './pages/Page2/home';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
    <Switch>
      <Route exact path="/" component={Page2} />
      <Route path="/page2" component={Home} />
     </Switch>
    </HashRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root