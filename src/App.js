import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import { MainContainer } from "./components/StyledComponents";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <div>
          <MainContainer>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
            </Switch>
          </MainContainer>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
