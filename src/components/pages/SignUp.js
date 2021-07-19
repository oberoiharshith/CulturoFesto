import axios from "axios";
import React, { PureComponent } from "react";

class SignUp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      iDp: "",
      mobile: "",
      dob: "",
      respdata: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let inp = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      iDp: this.state.iDp,
      mobile: this.state.mobile,
      dob: this.state.dob,
    };
    console.log(inp);

    axios
      .post("http://3.20.221.44:8082/home/register", inp)
      .then((response) => {
        console.log(response);
        this.setState({ respdata: response.data });
        console.log(this.state.respdata);
      });
  }

  handleChange(event) {
    event.preventDefault();
    let { name, value } = event.target;
    if (name === "firstName") {
      this.setState({ firstName: value });
    } else if (name === "lastName") {
      this.setState({ lastName: value });
    } else if (name === "iDp") {
      this.setState({ iDp: value });
    } else if (name === "mobile") {
      this.setState({ mobile: value });
    } else if (name === "dob") {
      this.setState({ dob: value });
    }
    console.log(this.state);
  }
  render() {
    if (this.state.respdata === "") {
      return (
        <div className="hero-image">
          <div
            style={{
              margin: "auto",
              width: "26%",
              height: "100%",
              border: "3px solid green",
              padding: "10px",
              backgroundImage: "linear-gradient(#ffd89b, #19547b)",
              opacity: "0.9",
            }}
          >
            <h6
              style={{
                color: "white",
                marginLeft: "100px",
                marginTop: "50px",
                fontFamily: "cursive",
                fontSize: "50px",
              }}
            >
              SignUp
            </h6>
            <form onSubmit={this.handleSubmit} method="post">
              <div className="form-group" style={{ height: "32px" }}>
                <label style={{ color: "white", fontSize: "25px" }}>
                  <input
                    name="firstName"
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Firstname"
                    className="form-control form-control-lg"
                    style={{
                      margin: "auto",
                      width: "104%",
                      border: "3px solid green",
                      padding: "10px",
                      marginLeft: "40px",
                      fontSize: "20px",
                    }}
                    required
                  />
                </label>
              </div>
              <div className="form" style={{ height: "80px" }}>
                <label style={{ color: "white", fontSize: "25px" }}></label>
                <input
                  name="lastName"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Lastname"
                  className="form-control form-control-lg"
                  style={{
                    margin: "auto",
                    width: "76%",
                    border: "3px solid green",
                    padding: "10px",
                    marginLeft: "40px",
                    fontSize: "20px",
                  }}
                  required
                />
              </div>
              <div className="form" style={{ height: "32px" }}>
                <label style={{ color: "white", fontSize: "25px" }}>
                  <input
                    name="iDp"
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Unique ID"
                    className="form-control form-control-lg"
                    style={{
                      margin: "auto",
                      width: "104%",
                      border: "3px solid green",
                      padding: "10px",
                      marginLeft: "40px",
                      fontSize: "20px",
                    }}
                    required
                  />
                </label>
              </div>
              <div className="form" style={{ height: "55px" }}>
                <label style={{ color: "white", fontSize: "25px" }}></label>
                <input
                  name="mobile"
                  onChange={this.handleChange}
                  type="tel"
                  placeholder="Mobile"
                  className="form-control form-control-lg"
                  style={{
                    margin: "auto",
                    width: "76%",
                    border: "3px solid green",
                    padding: "10px",
                    marginLeft: "40px",
                    fontSize: "20px",
                  }}
                  required
                />
              </div>
              <div className="form" style={{ height: "80px" }}>
                <label style={{ color: "white", fontSize: "25px" }}></label>
                <input
                  name="dob"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Date of Birth YYYY-MM-DD"
                  className="form-control form-control-lg"
                  style={{
                    margin: "auto",
                    width: "76%",
                    border: "3px solid green",
                    padding: "10px",
                    marginLeft: "40px",
                    fontSize: "20px",
                  }}
                  required
                />
              </div>
              <div className="form" style={{ height: "80px" }}>
                <input
                  type="submit"
                  style={{
                    margin: "auto",
                    width: "35%",
                    border: "3px solid green",
                    padding: "10px",
                    marginLeft: "128px",
                    fontSize: "20px",
                    backgroundImage: "linear-gradient(#eacda3, #d6ae7b)",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.state.respdata} </h1>
        </div>
      );
    }
  }
}

export default SignUp;
