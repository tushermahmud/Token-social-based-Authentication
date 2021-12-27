import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Register from "./screens/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Activate from "./screens/Activate";
import Login from "./screens/Login";
import ForgetPassword from "./screens/ForgetPassword";
import ResetPassword from "./screens/ResetPassword";
import Home from './screens/Home';
import store from './redux/store';
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
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
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
