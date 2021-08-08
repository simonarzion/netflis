import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import Header from "./components/Header";
import { AllReducers } from "./redux/store";
import HomePage from "./screens/HomePage";
import NotFoundPage from "./screens/NotFoundPage";

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/*" component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
