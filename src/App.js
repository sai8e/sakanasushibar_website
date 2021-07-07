import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/pages/Menu";
import Gallery from "./components/pages/Gallery";
import Specials from "./components/pages/Specials";
import Contact from "./components/pages/Contact";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTop_Custom from "./components/ScrollToTop_Custom";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop smooth />
        <ScrollToTop_Custom />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/specials" component={Specials} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
