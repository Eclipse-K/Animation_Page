import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/nav";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
        </Switch>
        <Nav />
      </div>
    );
  }
}

export default App;
