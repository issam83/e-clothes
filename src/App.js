import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import "./App.css";

function App() {
  const Hats = props => {
    console.log(props);
    return <div>hats page</div>;
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
