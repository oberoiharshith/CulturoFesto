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
      respdata: "", //storing the resultant response data coming from the server
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
    console.log(this.state.dob);
    axios.post("/home/register", inp).then((response) => {
      this.setState({ respdata: response.data });
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
  }
  render() {
    if (this.state.respdata === "") {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4"></div>
            <div
              className="col-sm-4"
              style={{ height: "800px", width: "500px", marginTop: "80px" }}
            >
              <div
                style={{
                  border: "2px solid white",
                  height: "800px",
                  width: "500px",
                  backgroundImage: "linear-gradient(#ffd89b, #19547b)",
                  opacity: "0.9",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    height: "120px",
                    width: "120px",
                    marginLeft: "180px",
                    marginTop: "20px",
                    backgroundImage: "url(./public/images/pic3.jpg)",
                    backgroundSize: "cover",
                    opacity: "0.7",
                  }}
                ></div>
                <h1
                  style={{
                    color: "white",
                    marginLeft: "150px",
                    marginTop: "50px",
                    fontFamily: "cursive",
                  }}
                >
                  SignUp
                </h1>
                <form onSubmit={this.handleSubmit} method="post">
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <div className="form-group">
                      <label
                        style={{ color: "white", fontSize: "25px" }}
                      ></label>
                      <input
                        name="firstName"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Firstname"
                        className="form-control form-control-lg"
                        style={{
                          borderRadius: "15px",
                          height: "50px",
                          width: "400px",
                          marginLeft: "40px",
                          fontSize: "20px",
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ color: "white", fontSize: "25px" }}
                      ></label>
                      <input
                        name="lastName"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Lastname"
                        className="form-control form-control-lg"
                        style={{
                          borderRadius: "15px",
                          width: "400px",
                          height: "50px",
                          marginLeft: "40px",
                          fontSize: "20px",
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ color: "white", fontSize: "25px" }}
                      ></label>
                      <input
                        name="iDp"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Unique ID"
                        className="form-control form-control-lg"
                        style={{
                          borderRadius: "15px",
                          width: "400px",
                          height: "50px",
                          marginLeft: "40px",
                          fontSize: "20px",
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ color: "white", fontSize: "25px" }}
                      ></label>
                      <input
                        name="mobile"
                        onChange={this.handleChange}
                        type="tel"
                        placeholder="Mobile"
                        className="form-control form-control-lg"
                        style={{
                          borderRadius: "15px",
                          width: "400px",
                          height: "50px",
                          marginLeft: "40px",
                          fontSize: "20px",
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ color: "white", fontSize: "25px" }}
                      ></label>
                      <input
                        name="dob"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Date of Birth"
                        className="form-control form-control-lg"
                        style={{
                          borderRadius: "15px",
                          width: "400px",
                          height: "50px",
                          marginLeft: "40px",
                          fontSize: "20px",
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        style={{
                          borderRadius: "20px",
                          width: "150px",
                          height: "50px",
                          marginLeft: "175px",
                          color: "black",
                          fontSize: "20px",
                          backgroundImage: "linear-gradient(#eacda3, #d6ae7b)",
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{ backgroundColor: "grey", opacity: "0.8", marginTop: "20px" }}
        >
          <h1 style={{ color: "white", fontSize: "50px", textAlign: "center" }}>
            Registered {this.state.respdata}
          </h1>
        </div>
      );
    }
  }
}

export default SignUp;
