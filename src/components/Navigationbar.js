import React from "react";
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { logoutUser } from '../services/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';





class Navigationbar extends React.Component {

  logout = () => {
      this.props.logoutUser();// to store the respone of logout function
  };



  render() {

    const guestLinks = (// navbar links for before login
        <>
            <div className="mr-auto"></div>
            <Nav className="mr-auto ">
                <Link to="/" className="navbar-logo">CulturoFesto<i class="fab fa-typo3" /></Link>
                <Link to="/Festival" className="nav-links" font-weight-bold>Festivals</Link>
            
                {/* <Link to={"course2"} className="nav-link font-weight-bold">Courses</Link>
                <Link to={"AboutUs"} className="nav-link font-weight-bold">About Us</Link>
                <Link to={"ContactUs"} className="nav-link font-weight-bold">Contact Us</Link> */}
            </Nav>
              <Nav className="navbar-right ms-auto">
                {/* <Link to={"sign-up"} className="nav-links-mobile">Sign Up</Link>
                <Link to={"login"} className="nav-links-mobile">Login</Link> */}
                <Link to={"sign-up"} className="text-white"><FontAwesomeIcon icon={faUser} />&nbsp;Sign Up </Link>'   '
                <Link to={"Login"} className="text-white"><FontAwesomeIcon icon={faSignInAlt} />&nbsp;Login</Link>
            </Nav>
        </>
    );

    const userLinks = (// nav links after login
        <>
            <Nav className="mr-auto me-auto">
                
                <Link to="/" className="navbar-logo">CulturoFesto<i class="fab fa-typo3" /></Link>
                <Link to="/Festival" className="nav-links">Festivals</Link>
                <Link to="/services" className="nav-links">Registration</Link>
                <Link to="/products" className="nav-links">Payment</Link>
                <Link to="/feedback" className="nav-links">Feedback</Link>
                <Link to="/FestivalAdmin" className="nav-links">Editable Festival</Link>
                <Link to="/AddFestival" className="nav-links">Add Festival</Link>



                
                {/* <Link to={"course2"} className="nav-link font-weight-bold">Courses</Link>
                <Link to={"UpdatePassword"} className="nav-link font-weight-bold">Update Password</Link>
                <Link to={"LeaderBoardDashBoard"} className="nav-link font-weight-bold">Leaderboard</Link>
                <Link to={"EnrollStudent"} className="nav-link font-weight-bold">Enroll</Link>
                <Link to={"CheckEligibility"} className="nav-link font-weight-bold">Eligible</Link>
                <Link to={"Attendance"} className="nav-link font-weight-bold">Attendance</Link>
                <Link to={"AboutUs"} className="nav-link font-weight-bold">About Us</Link>
                <Link to={"ContactUs"} className="nav-link font-weight-bold">Contact Us</Link> */}
            </Nav>
            <Nav className="navbar-right">
                <Link to={"/"} className="text-white" onClick={this.logout}> Logout</Link>
            </Nav>
        </>
    );


    const adminLinks = (// nav bar links
        <>
            <Nav className="mr-auto">
                <Link to="/" className="nav-links" >Festivals</Link>
                <Link to="/feedback" className="nav-links">Feedback</Link>
            </Nav>
            <Nav className="navbar-right">
                <Link to={"/"} className="nav-link" onClick={this.logout}> Logout</Link>
            </Nav>
        </>
    );

    function Links(x) {// for switing between the links like admin,user
        if(x==="Harshith"){
            console.log("admin")
            return adminLinks
        }
        else{
            console.log("not admin")
            return userLinks
        }

    }

    return (
        <Navbar bg="dark" variant="light">
            <Link to={""} className="navbar-brand">

            </Link>
            {this.props.auth.isLoggedIn ? Links(this.props.auth.isLoggedIn) : guestLinks} 
        </Navbar>

       


    );
};
};

const mapStateToProps = state => {
return {
    auth: state.auth
};
};

const mapDispatchToProps = dispatch => {
return {
    logoutUser: () => dispatch(logoutUser())
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigationbar);




