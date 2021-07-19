import axios from "axios";
import React, { PureComponent } from "react";

class Feedback extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      registrationId: "",
      feedbackId: "",
      //courseInfo: "",
      //courseType: "",
      comments: "",
      Rating: "",
      //coursePrice: "",
      btnclicked: "false",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidUpdate() {
    //axios calls
    let inp = {
      registrationId: this.state.registrationid,
      feedbackId: this.state.feedbackid,
      //courseInfo: this.state.courseinfo,
      // courseType: this.state.coursetype,
      comments: this.state.comments,
      Rating: this.state.rating,
      //coursePrice: this.state.courseprice,
    };
    console.log(inp);
    if (this.state.btnclicked === "true") {
      axios
        .post("http://3.20.221.44:8082/feedback/postComment", inp)
        .then((response) => {
          this.setState({ btnclicked: "true", message: response.data });
          console.log(response.data);
        });
    }

    //axios interceptor
  }
  handleChange(event) {
    event.preventDefault();
    let { name, value } = event.target;
    if (name === "registrationId") {
      this.setState({ feedbackId: value });
    } else if (name === "comments") {
      this.setState({ comments: value });
    } else if (name === "Rating") {
      this.setState({ rating: value });
    } else {
      this.setState({
        btnclicked: "true",
      });
    }
  }
  render() {
    return (
      <div className="feedback">
        <div
          style={{
            margin: "auto",
            width: "26%",
            height: "100%",
            border: "3px solid green",
            padding: "10px",
            backgroundImage: "linear-gradient(#e66465, #9198e5)",
            opacity: "0.9",
          }}
        >
          <form>
            <card style={{ width: "18rem" }}>
              <h3
                className="glyphicon glyphicon-expand"
                style={{
                  color: "white",
                  marginLeft: "60px",
                  marginTop: "50px",
                  fontFamily: "cursive",
                  fontSize: "50px",
                }}
              >
                FEEDBACK
              </h3>
              <div className="form-group">
                <label></label>
                <input
                  name="feedbackId"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter your Feedback Id"
                  className="form-control"
                  style={{
                    margin: "auto",
                    width: "100%",
                    border: "3px solid green",
                    padding: "10px",
                    marginLeft: "1px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <div className="form-group">
                <label></label>
                <input
                  name="registrationId"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter the Registration Id"
                  className="form-control"
                  style={{
                    margin: "auto",
                    width: "100%",
                    border: "3px solid green",
                    padding: "10px",

                    fontSize: "20px",
                  }}
                />
              </div>

              <div className="form-group">
                <input
                  name="Rating"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter Your Rating"
                  className="form-control"
                  style={{
                    margin: "auto",
                    width: "100%",
                    border: "3px solid green",
                    padding: "10px",
                    marginLeft: "1px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <div className="form-group">
                <label></label>
                <textarea
                  name="comments"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter your Review"
                  className="form-control"
                  row="2"
                  style={{
                    margin: "auto",
                    width: "100%",
                    border: "3px solid green",
                    padding: "10px",
                    marginLeft: "1px",
                    fontSize: "20px",
                  }}
                />
              </div>

              <div className="form-group" style={{ marginLeft: "300px" }}>
                <input
                  className="form-control"
                  type="submit"
                  style={{
                    margin: "auto",
                    width: "105%",
                    border: "3px solid green",
                    padding: "10px",
                    marginLeft: "1px",
                    fontSize: "20px",
                    alignContent: "center",

                    backgroundImage: "linear-gradient(#4568dc, #b06ab3)",
                  }}
                  name="submit"
                  onChange={this.handleChange}
                />
              </div>
            </card>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
