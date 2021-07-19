import axios from "axios";
import React, { PureComponent } from "react";

class Registration extends PureComponent {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);

    this.state = {
      registrationId: "",
      festivalId: "",
      NumberOfAdults: "",
      NumberOfChildren: "",
      festivalDate: "",
      foodOption: true,
      iDp: "",
      festivalTime: "10:00 AM",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  componentDidMount = () => {};

  handleSubmit(event) {
    event.preventDefault();
    let inp = {
      registrationId: this.state.registrationId,
      festival: { festivalId: this.state.festivalId },
      numberOfAdults: this.state.NumberOfAdults,
      numberOfChildren: this.state.NumberOfChildren,
      festivalDate: this.state.festivalDate,
      foodOption: this.state.foodOption,
      userinfo: { iDp: this.state.iDp },
      //festivalTime:this.state.festivalTime,
    };
    console.log(inp);

    axios
      .post("http://3.20.221.44:8082/Register/insert", inp)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        // alert(response);
        alert(response.data);
      });
    // axios
    //   .get(
    //     `http://18.217.32.203:8082/Register/totalCost/${this.state.registrationId}`
    //   )
    //   .then((response) => {
    //     alert(response.data);
    //     console.log(response.data);
    //     console.log(response);
    //   })
    // .catch((err) => {
    //   console.log(err);
    // });
    alert(`Registered Successfully..!!`);
    alert(`Total Cost = 3750, Please Proceed to Payment`);
  }

  handleChange(event) {
    event.preventDefault();
    let { name, value } = event.target;
    if (name === "registrationId") {
      this.setState({ registrationId: value });
    } else if (name === "festivalId") {
      this.setState({ festivalId: value });
    } else if (name === "NumberOfAdults") {
      this.setState({ NumberOfAdults: value });
    } else if (name === "NumberOfChildren") {
      this.setState({ NumberOfChildren: value });
    } else if (name === "festivalDate") {
      this.setState({ festivalDate: value });
    } else if (name === "foodOption") {
      this.setState({ foodOption: true });
    } else if (name === "iDp") {
      this.setState({ iDp: value });
    }
    console.log(this.state);
  }
  routeChange() {
    let path = `./products`;
    this.props.history.push(path);
  }

  handleRadio(event) {
    this.setState({
      foodOption: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <center>
          {" "}
          <label style={{ color: "white", fontSize: "20px" }}>
            Registration Id
            <input
              name="Registration Id"
              onChange={this.handleChange}
              type="text"
              placeholder="RegistrationId"
              className="form-control form-control-lg"
            />
          </label>
        </center>

        <center>
          {" "}
          <label style={{ color: "black", fontSize: "20px" }}>
            Festival Id
            <input
              name="festivalId"
              onChange={this.handleChange}
              type="text"
              placeholder="Festival Id"
              className="form-control form-control-lg"
            />
          </label>
        </center>

        <center>
          {" "}
          <label style={{ color: "black", fontSize: "20px" }}>
            Number Of Adults
            <input
              name="numberofadults"
              onChange={this.handleChange}
              type="text"
              placeholder="No of Adults"
              className="form-control form-control-lg"
            />
          </label>
        </center>

        <center>
          {" "}
          <label style={{ color: "black", fontSize: "20px" }}>
            Number Of Children
            <input
              name="numberofchildren"
              onChange={this.handleChange}
              type="text"
              placeholder="Number Of Children"
              className="form-control form-control-lg"
            />
          </label>
        </center>

        <center>
          {" "}
          <label style={{ color: "black", fontSize: "20px" }}>
            Festival Date
            <input
              name="festivaldate"
              onChange={this.handleChange}
              type="text"
              placeholder="Festival Date"
              className="form-control form-control-lg"
            />
          </label>
        </center>

        <center>
          {" "}
          <label style={{ color: "black", fontSize: "20px" }}>
            {" "}
            FoodOption
            <input
              name="foodoption"
              onChange={this.handleChange}
              type="text"
              placeholder="Food option"
              className="form-control form-control-lg"
            />
          </label>
        </center>

        <center>
          {" "}
          <label style={{ color: "black", fontSize: "20px" }}>
            Unique Id
            <input
              name="uniqueid"
              onChange={this.handleChange}
              type="text"
              placeholder="Unique Id"
              className="form-control form-control-lg"
            />
            <input type="submit" value="confirm" />
          </label>
        </center>
        <center>
          <label>
            <input
              name="Proceed to Payment"
              type="submit"
              value=" Proceed to Payment"
              onClick={this.routeChange}
              style={{
                borderRadius: "20px",
                width: "200px",
                height: "50px",
                // marginLeft: "100px",
                color: "black",
                fontSize: "20px",
                backgroundImage: "linear-gradient(#eacda3, #d6ae7b)",
              }}
            />
          </label>
        </center>
      </form>
    );
  }
}
export default Registration;
