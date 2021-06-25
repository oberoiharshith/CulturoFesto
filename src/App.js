import React from "react";
import Navigationbar from "./components/Navigationbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Festival from "./components/pages/Festival";
import FestivalAdmin from "./components/pages/FestivalAdmin";
import Feedback from "./components/pages/Feedback";
import AddFestival from "./components/pages/AddFestival";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Festival" component={Festival} />
          <Route path="/FestivalAdmin" component={FestivalAdmin} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
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