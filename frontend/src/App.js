import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={"/home"} component={Home} exact />
        <Route path={"*"} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
