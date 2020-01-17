import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import BookSeats from "./components/BookSeats";
import URLS from "./urls";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={URLS.BOOK_SEATS}>
          <BookSeats />
        </Route>
        <Route path={URLS.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
