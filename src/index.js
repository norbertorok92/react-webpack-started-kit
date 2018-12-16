import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';

import LoaderWidget from './js/widgets/loader/loader.js';
import Layout from './js/pages/layout/layout.js';

import './styles/styles.global.scss'


const NoMatch = () => (
  <div>
    <h3>Route not found</h3>
  </div>
);

const Dashboard = Loadable({
  loader: () => import('./js/pages/dashboard/dashboard.js'),
  loading: LoaderWidget
});

const Login = Loadable({
  loader: () => import('./js/pages/login/login.js'),
  loading: LoaderWidget
});

const Signin = Loadable({
  loader: () => import('./js/pages/signin/signin.js'),
  loading: LoaderWidget
});

class AppRouter extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Layout path="/" exact component={Dashboard} />
            <Layout path="/dashboard" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={Signin} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('app'));