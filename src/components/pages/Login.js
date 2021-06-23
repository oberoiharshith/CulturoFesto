import axios from "axios";
import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPlusSquare, faSave, faUndo, faKey } from '@fortawesome/free-solid-svg-icons';
import { authenticateUser } from '../../services/index';


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
    userid: '', password: '', type: 'password'
  };
  resetLogin = () => {
    this.setState(() => this.initialState);
  }

  submitLogin = event => {
    event.preventDefault();
    const login = {
      userid: this.state.userid,
      password: this.state.password,
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
    this.props.authenticateUser(this.state.userid, this.state.password);
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
    const {userid, password} = this.state;
    return (
        <Card className="border border-dark bg-secondary text-white text-center">
            <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Log In</Card.Header>



            <Form onReset={this.resetLogin} onSubmit={this.submitLogin} onClick={this.ForgetPass} id="LoginFormId" style={{height:"42vh",margin:"auto",marginBottom:"50px"}}>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUserId">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control  autoComplete="off" type="text" name="userid" placeholder="Enter userId" className={"bg-dark text-white"} value={userid} onChange={this.loginChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control  autoComplete="off" type={this.state.type} name="password" placeholder="Enter password" className={"bg-dark text-white"} value={password} onChange={this.loginChange} />
                            <span className="password__show" style={{position: "absolute", top: "167px", left: "841px", cursor: "pointer"}} onClick={this.handleClick}>{this.state.type === 'text' ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}</span>
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
    authenticateUser: (userId, password) => dispatch(authenticateUser(userId, password))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);




//   render() {
//     if (this.state.respdata === "") {
//       return (
//         <div className="sign-up">
//           <div
//             style={{
//               border: "2px solid white",
//               height: "700px",
//               width: "500px",
//               backgroundImage: "linear-gradient(#ffd89b, #19547b)",
//               opacity: "0.9",
//               borderRadius: "10px",
//             }}
//           >
//             <p
//               style={{
//                 color: "white",
//                 marginLeft: "110px",
//                 marginTop: "10px",
//                 fontFamily: "cursive",
//                 fontSize: "50px",
//               }}
//             >
//               User Login
//             </p>
//             <form method="post" onSubmit={this.handleSubmit}>
//               <div className="form-group">
//                 <p
//                   style={{
//                     color: "white",
//                     marginLeft: "50px",
//                     marginTop: "50px",
//                     fontSize: "50px",
//                   }}
//                 >
//                   UserId
//                 </p>
//                 <label style={{ color: "white", fontSize: "25px" }}></label>
//                 <input
//                   name="userid"
//                   onChange={this.handleChange}
//                   type="text"
//                   placeholder="Enter your Userid"
//                   className="form-control form-control-lg"
//                   style={{
//                     borderRadius: "10px",
//                     height: "50px",
//                     width: "400px",
//                     marginLeft: "40px",
//                     fontSize: "20px",
//                   }}
//                   required
//                 />
//                 <div className="form-group">
//                   <p
//                     style={{
//                       color: "white",
//                       marginLeft: "50px",
//                       fontSize: "50px",
//                     }}
//                   >
//                     Password
//                   </p>
//                   <label style={{ color: "white", fontSize: "25px" }}></label>
//                   <input
//                     name="password"
//                     onChange={this.handleChange}
//                     type="password"
//                     placeholder="Enter your password"
//                     className="form-control form-control-lg"
//                     style={{
//                       marginTop: "1px",
//                       borderRadius: "15px",
//                       width: "400px",
//                       height: "50px",
//                       marginLeft: "40px",
//                       fontSize: "20px",
//                     }}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="submit"
//                     value="Submit"
//                     style={{
//                       borderRadius: "20px",
//                       width: "150px",
//                       height: "50px",
//                       marginLeft: "175px",
//                       color: "black",
//                       fontSize: "20px",
//                       backgroundImage: "linear-gradient(#eacda3, #d6ae7b)",
//                     }}
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>Logged in</h1>
//         </div>
//       );
//     }
//   }
// }

// export default Login;