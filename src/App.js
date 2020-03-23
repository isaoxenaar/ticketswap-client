import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import EventContainer from "./components/EventContainer";
import TicketsContainer from "./components/TicketsContainer";
import OneTicketContainer from "./components/OneTicketContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/events/:id" component={EventContainer} />
          <Route exact path="/events" component={EventContainer} />
          <Route exact path="/event/:id" component={TicketsContainer} />
          <Route exact path="/ticket/:id" component={OneTicketContainer} />
        </main>
      </Provider>
    );
  }
}

export default App;
