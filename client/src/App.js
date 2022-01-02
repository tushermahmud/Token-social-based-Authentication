import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Activate from "./screens/Activate";
import Login from "./screens/Login";
import ForgetPassword from "./screens/ForgetPassword";
import ResetPassword from "./screens/ResetPassword";
import Home from "./screens/Home";
import Register from "./screens/Register";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from 'react';
import store from './redux/store';
import {loadUser} from './redux/actions/authAction'
import { useHistory } from 'react-router';
import {connect} from "react-redux"
import Messenger from './screens/messenger/Messenger';
function App({auth}) {
  useEffect(() => {
    store.dispatch(loadUser(history));
  }, []);

  const history = useHistory();
  console.log(auth)
  return (
    <Fragment>
      <ToastContainer />
      <Switch>
        <Route exact path="/" 
        render={(props) => <Messenger {...props} />} />
        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/users/activate/:token"
          render={(props) => <Activate {...props} />}
        />
        <Route exact path="/Login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/users/forget/password"
          render={(props) => <ForgetPassword {...props} />}
        />
        <Route
          path="/users/password/reset/:token"
          render={(props) => <ResetPassword {...props} />}
        />
      </Switch>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps,null)(App);
