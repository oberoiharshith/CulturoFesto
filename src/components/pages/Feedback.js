import axios from "axios";
import React, { PureComponent } from "react";
import Products from "./Products";
class Feedback extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      courseId: "",
      courseName: "",
      courseInfo: "",
      //courseType: "",
      courseReview: "",
      courseRating: "",
      coursePrice: "",
      btnclicked: "false",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidUpdate() {
    //axios calls
    let inp = {
      festivalId: this.state.festivalid,
      courseName: this.state.coursename,
      courseInfo: this.state.courseinfo,
      // courseType: this.state.coursetype,
      courseReview: this.state.coursereview,
      courseRating: this.state.courserating,
      coursePrice: this.state.courseprice,
    };
    console.log(inp);
    if (this.state.btnclicked === "true") {
      axios
        .post("http://localhost:8082/feedback/postComment", inp)
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
    if (name === "FestivalId") {
      this.setState({ coursename: value });
    } else if (name === "courseInfo") {
      this.setState({ courseinfo: value });
    } else if (name === "courseId") {
      this.setState({ courseid: value });
    } // else if (name === "courseType") {
    // this.setState({ coursetype: value });
    //}
    else if (name === "courseReview") {
      this.setState({ coursereview: value });
    } else if (name === "courseRating") {
      this.setState({ courserating: value });
    } else if (name === "coursePrice") {
      this.setState({ courseprice: value });
    } else {
      this.setState({
        btnclicked: "true",
      });
    }
  }
  render() {
    return (
      <div className="feedback">
        <form>
          <h3
            className="glyphicon glyphicon-expand"
            style={{ color: "white", marginLeft: "600px" }}
          >
            FEEDBACK
          </h3>
          <div className="form-group">
            <label></label>
            <input
              name="courseName"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter your Fav Course Name"
              className="form-control"
              style={{
                width: "700px",
                marginLeft: "180px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              name="courseId"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter the Course Id"
              className="form-control"
              style={{
                width: "700px",
                marginLeft: "180px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              name="courseInfo"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter the Course Info"
              className="form-control"
              style={{
                width: "700px",
                marginLeft: "180px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              name="courseType"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter your Course Type"
              className="form-control"
              style={{
                width: "700px",
                marginLeft: "180px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            />
          </div>

          <div className="form-group">
            <label
              style={{
                marginLeft: "360px",
                fontSize: "25px",
                color: "white",
              }}
            >
              Enter Your Rating
            </label>
            <input
              name="courseRating"
              onChange={this.handleChange}
              type="range"
              className="form-control"
              min="0"
              max="5"
              style={{
                width: "700px",
                marginLeft: "180px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              name="coursePrice"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter your Course Price"
              className="form-control"
              style={{
                width: "700px",
                marginLeft: "180px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              name="courseReview"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter your Review"
              className="form-control"
              style={{
                width: "700px",
                marginLeft: "180px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            />
          </div>

          <div className="form-group" style={{ marginLeft: "380px" }}>
            <input
              className="form-control"
              type="submit"
              style={{
                height: "50px",
                width: "300px",
                borderRadius: "20px",
                textAlign: "center",
                color: "white",
                fontSize: "20px",

                backgroundImage: "linear-gradient(#4568dc, #b06ab3)",
              }}
              name="submit"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Feedback;
