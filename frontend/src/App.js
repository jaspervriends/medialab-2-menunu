import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./app.scss";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Header";
import Restaurant from "./pages/Restaurant/Restaurant";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={"/home"} component={Home} exact />
        <Route path={"/restaurant"} component={Restaurant} />
        <Route path={"*"} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
