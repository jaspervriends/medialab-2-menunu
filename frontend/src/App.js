import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./app.scss";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav"

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <BrowserRouter>
      <Header onChange={(value) => setShowNav(value)} opened={showNav} />
      {showNav && (
            <Nav onChange={(value) => setShowNav(value)} opened={showNav}/>
          )
        } 
      <Switch>
        <Route path={"/home"} component={Home} exact />
        <Route path={"*"} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
