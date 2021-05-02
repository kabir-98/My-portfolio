import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Blog from "./components/Blog/Blog";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";


function App() {
  return (
    <Router>
      <div className="main-container">
        
        <div className="row p-0 m-0">
          <div className="col-2 p-0">
            <Header></Header>
            {/* <MobileNavbar></MobileNavbar> */}
          </div>
          <div className="col-10">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/resume">
                <Resume></Resume>
              </Route>
              <Route path="/blog">
                <Blog></Blog>
              </Route>
              <Route path="/project">
                <Project></Project>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
