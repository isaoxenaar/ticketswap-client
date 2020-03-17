import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import EventContainer from "./components/EventContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/events" component={EventContainer} />
          <Route exact path="/events/:id" component={EventContainer} />
        </div>
      </Provider>
    );
  }
}
export default App;
