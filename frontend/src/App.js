import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./app.scss";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/home"} component={Home} exact />
        <Route path={"*"} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
