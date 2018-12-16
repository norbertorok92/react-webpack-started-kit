import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect, withRouter} from 'react-router-dom';
import cookie from 'js-cookie';

class Page extends Component {
  render() {
    const {
      component: Component,
      ...rest
    } = this.props;
    const loggedIn = Boolean(cookie.get('x_session_id'));

    return (
      <Route
        {...rest}
        render={matchProps =>
          loggedIn ? (
            <Fragment>
              <Component
                {...matchProps}
              />
            </Fragment>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

Page.propTypes = {
  component: PropTypes.func.isRequired
};

export default withRouter(Page);
