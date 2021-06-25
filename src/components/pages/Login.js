import axios from "axios";
import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPlusSquare, faSave, faUndo, faKey } from '@fortawesome/free-solid-svg-icons';
import { authenticateUser } from '../../services/index';
import Festival from "./Festival";


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
    this.loginChange = this.loginChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);


    // this.state = {
    //   userid: "",
    //   password: "",
    //   respdata: "",
    // };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  initialState = {
    gnUid: '', gnPassword: '', type: 'password'
  };
  resetLogin = () => {
    this.setState(() => this.initialState);
  }

  submitLogin = event => {
    event.preventDefault();
    const login = {
      gnUid: this.state.gnUserid,
      gnPassword: this.state.gnPassword,
    };
  }


  loginChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick = () => this.setState(({ type }) => ({
    type: type === 'text' ? 'password' : 'text'
  }))


  validateUser = () => { // function
    this.props.authenticateUser(this.state.gnUid, this.state.gnPassword);
    setTimeout(() => {

      if (this.props.auth.isLoggedIn) {
        console.log("hii", this.props.auth.isLoggedIn)
        return this.props.history.push("/");//for redirecting to home page
      }

      else {
        alert("Invalid user ID or password");
        this.setState({ "error": "Invalid email and password" });
        this.resetLogin();

      }
    }, 500);
  };


  render() {
    
    const {gnUid, gnPassword} = this.state;
    return (
          
    
      
      
        <Card className="border border-dark bg-secondary text-white text-center">
            <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Log In</Card.Header>



            <Form onReset={this.resetLogin} onSubmit={this.submitLogin} onClick={this.ForgetPass} id="LoginFormId" style={{height:"42vh",margin:"auto",marginBottom:"50px"}}>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUserId">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control  autoComplete="off" type="text" name="gnUid" placeholder="Enter userId" className={"bg-dark text-white"} value={gnUid} onChange={this.loginChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control  autoComplete="off" type={this.state.type} name="gnPassword" placeholder="Enter password" className={"bg-dark text-white"} value={gnPassword} onChange={this.loginChange} />
                            <span className="password__show" style={{position: "absolute", top: "167px", left: "915px", cursor: "pointer"}} onClick={this.handleClick}>{this.state.type === 'text' ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}</span>
                            {/* <Form.Control  autoComplete="off" type="text" name="password" placeholder="Enter password" className={"bg-dark text-white"} value={password} onChange={this.loginChange} /> */}
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
                <Card.Footer style={{ "text-align": "right" }}>
                    <Button size="sm" variant="success" type="submit" onClick={this.validateUser}>
                        <FontAwesomeIcon icon={faSave} /> Submit
</Button>{'  '}
                    <Button size="sm" variant="info" type="reset">
                        <FontAwesomeIcon icon={faUndo} /> Reset
</Button>{'  '}



                </Card.Footer>
            </Form>
        </Card>
    );
}
}

const mapStateToProps = state => {
return {
    auth:state.auth
}
};

const mapDispatchToProps = dispatch => {
return {
    authenticateUser: (gnUid, gnPassword) => dispatch(authenticateUser(gnUid, gnPassword))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


