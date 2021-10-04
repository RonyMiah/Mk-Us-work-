
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import About from './Component/About/About';
import Course from './Component/Markting/Markting';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Component/Footer/Footer';
import NotFoundPage from './Component/NotFound/NotFound';

function App() {
  return (
    <div >
      
        <Router>
        <Header></Header>
          <Switch>
            
            <Route exact path="/">
            <Home></Home>
            </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/service">
              <Service></Service>
          </Route>

          <Route exact path="/about">
              <About></About>
          </Route>

          <Route exact path="/markting">
              <Course></Course>
          </Route>
          <Route exact path="*" >
            <NotFoundPage></NotFoundPage>
          </Route>
          </Switch>
          <Footer></Footer>
        </Router>





    </div>
  );
}

export default App;
