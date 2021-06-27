import axios from "axios";
import React, { PureComponent } from "react";

 

class Registration extends PureComponent {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
 

    this.state = {
      registrationId: "",
      festival: "",
      NumberOfAdults: "",
      NumberOfChildren: "",
      festivalDate: "",
      foodOption: '',
      userinfo:"",
      registration:"",
      respdata: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let inp = {
      registrationId: this.state.registrationId,
      festival: this.state.festival,
      NumberOfAdults: this.state.NumberOfAdults,
      NumberOfChildren: this.state.NumberOfChildren,
      festivalDate: this.state.festivalDate,
      foodOption: this.state.foodOption,
      userinfo: this.state.userinfo,
      registration: this.state.registration
    };
    console.log(inp);




    axios.post("/Register/insert", inp).then((response) => {
      console.log(response)
      this.setState({ respdata: response.data });
      console.log(this.state.respdata)
    });
    alert(`Registered Successfully..!!`);
  }

 

  handleChange(event) {
    event.preventDefault();
    let { name, value } = event.target;
    if (name === "registrationId") {
      this.setState({ registrationId: value });
    } else if (name === "festival") {
      this.setState({ festival: value });
    } else if (name === "NumberOfAdults") {
      this.setState({ NumberOfAdults: value });
    }  else if (name === "NumberOfChildren") {
      this.setState({ NumberOfChildren: value });
    }
    else if (name === "festivalDate") {
      this.setState({ festivalDate: value });
    } //else if (name === "foodOption") {
      //this.setState({ foodOption: value });
    //}
    else if (name === "userInfo") {
      this.setState({ userinfo: value });
    }
    console.log(this.state)
  }

  handleRadio(event) {
    this.setState({
      foodOption: event.target.value
    });
  }


  render() {
    if (this.state.respdata === "") {
      return (
        <div className="Registration">
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
            <h6
              style={{
                color: "white",
                marginLeft: "100px",
                marginTop: "50px",
                fontFamily: "cursive",
                fontSize: "50px",
              }}
            >
             Festival Registration
            </h6>
            <br/>
            <form onSubmit={this.handleSubmit} method="post">
              <div className="form-group" style={{ height: "50px" }}>
                <label style={{ color: "white", fontSize: "20px",marginLeft: "40px" }}>
                    Registration ID:
                  <input
                    name="registrationId"
                    onChange={this.handleChange}
                    type="text"
                    placeholder= " Id should be first 2 letters of your name+ 2 digits of birthdate eg. ri04 "
                    className="form-control form-control-lg"
                    style={{
                      borderRadius: "15px",
                      height: "40px",
                      width: "450px",
                      marginLeft: "30px",
                      fontSize: "12px",
                    }}
                    required
                  />
                </label>
              </div>
              <br/>
              <div className="form" style={{ height: "50px" }}>
                <label style={{ color: "white", fontSize: "20px",marginLeft: "40px" }}> Festival ID:</label>
                <input
                  name="festival"
                  onChange={this.handleChange}
                  type="text"
                  placeholder= " Enter proper festival ID"
                  className="form-control form-control-lg"
                  style={{
                    borderRadius: "15px",
                    width: "450px",
                    height: "40px",
                    marginLeft: "30px",
                    fontSize: "12px",
                  }}
                  required
                />
              </div>
              <br/>
              <div className="form">
                <label style={{ color: "white", fontSize: "20px",marginLeft: "40px" }}>No. of Adults:</label>
                <input
                  name="NumberOfAdults"
                  onChange={this.handleChange}
                  type="text"
                  placeholder= " Atleast 1 require"
                  className="form-control form-control-lg"
                  style={{
                    borderRadius: "15px",
                    width: "450px",
                    height: "40px",
                    marginLeft: "30px",
                    fontSize: "12px",
                  }}
                  required
                />
              </div>
              <br/>
              <div className="form" style={{ height: "80px" }}>
                <label style={{ color: "white", fontSize: "20px",marginLeft: "40px" }}>
                  No. of Children
                  <input
                    name="NumberOfChildren"
                    onChange={this.handleChange}
                    type="text"
                    placeholder= " "
                    className="form-control form-control-lg"
                    style={{
                      borderRadius: "15px",
                      width: "450px",
                      height: "40px",
                      marginLeft: "30px",
                      fontSize: "12px",
                    }}
                    required
                  />
                </label>
              </div>
              <br/>
              <div className="form">
                <label style={{ color: "white", fontSize: "20px",marginLeft: "40px" }}>Festival Date:</label>
                <input
                  name="festivalDate"
                  onChange={this.handleChange}
                  type="text"
                  placeholder= " Enter the date of festival"
                  className="form-control form-control-lg"
                  style={{
                    borderRadius: "15px",
                    width: "450px",
                    height: "40px",
                    marginLeft: "30px",
                    fontSize: "12px",
                  }}
                  required
                />
              </div>
              <br/>
              <div className="form">
                <label style={{ color: "white", fontSize: "20px",marginLeft: "40px" }}>Unique ID:</label>
                <input
                  name="userinfo"
                  onChange={this.handleChange}
                  type="text"
                  placeholder=" Enter your Unique ID"
                  className="form-control form-control-lg"
                  style={{
                    borderRadius: "15px",
                    width: "450px",
                    height: "40px",
                    marginLeft: "30px",
                    fontSize: "12px",
                  }}
                  required
                />
              </div>
              <br/>
              <div className="form" style={{ height: "50px" }}>
                <label style={{ color: "white", fontSize: "20px",marginLeft: "40px"}}>Food</label>
                <input
                  name="foodOption"
                  type="radio"
                  value="select if (Yes)"
                  checked={this.state.foodOption === "select if (Yes)"}
                  onChange={this.handleRadio}
                  className="form-control form-control-lg"
                  style={{
                    borderRadius: "10px",
                    height:"20px",
                     width:"20px",
                    marginLeft: "30px",
                  }}
                />
                <br/>
              </div>
              <div className="form" style={{ height: "80px" }}>
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

 

export default Registration;