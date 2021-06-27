import React from "react";
import Navigationbar from "./components/Navigationbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/pages/Registration";

import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Festival from "./components/pages/Festival";
import FestivalAdmin from "./components/pages/FestivalAdmin";
import Feedback from "./components/pages/Feedback";
import AddFestival from "./components/pages/AddFestival";
import Footer from "./components/Footer";
import Payment from "./components/pages/Payment ";

function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Festival" component={Festival} />
          <Route path="/FestivalAdmin" component={FestivalAdmin} />
          <Route path="/services" component={Registration} />
          <Route path="/products" component={Payment} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/AddFestival/:festivalName" exact component={AddFestival} />
          <Route path="/AddFestival" component={AddFestival} />
        </Switch>
         <Footer /> 
      </Router>
    </>
  );
}

export default App;