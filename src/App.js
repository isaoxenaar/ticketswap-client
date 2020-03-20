import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import EventContainer from "./components/EventContainer";
import TicketContainer from "./components/TicketContainer";
import CommentContainer from "./components/CommentContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/events" component={EventContainer} />
          <Route exact path="/event" component={TicketContainer} />
          <Route exact path="/ticket" component={CommentContainer} />
          <Route exact path="/events/:page" component={EventContainer} />
        </main>
      </Provider>
    );
  }
}

export default App;
