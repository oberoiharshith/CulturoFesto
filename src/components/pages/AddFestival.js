import React from "react";
import axios from "axios";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPlusSquare,
  faSave,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
class AddFestival extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.festivalChange = this.festivalChange.bind(this);
    this.submitFestival = this.submitFestival.bind(this);
  }
  initialState = {
    festivalId: "",
    festivalName: "",
    festivalRegion: "",
    festivalVenue: "",
    festivalAmountAdult: "",
    festivalAmountChildren: "",
    festivalDate: "",
    fooditem: "",
    foodPriceAdult: "",
    foodPriceChildren: "",
  };

  componentDidMount() {
    const festivalName = +this.props.match.params.festivalName;
    if (festivalName) {
      this.findFestivalName(festivalName);
    }
  }

  findFestivalName = (festivalName) => {
    axios
      .get(
        "http://3.20.221.44:8082/festival/findFestivalByName/" + festivalName
      )
      .then((response) => {
        if (response.data != null) {
          this.setState({
            festivalId: response.data.festivalId,
            festivalName: response.data.festivalName,
            festivalRegion: response.data.festivalRegion,
            festivalVenue: response.data.festivalVenue,
            festivalAmountAdult: response.data.festivalAmountAdult,
            festivalAmountChildren: response.data.festivalAmountChildren,
            festivalDate: response.data.festivalDate,
            fooditem: response.data.fooditem,
            foodPriceAdult: response.data.foodPriceAdult,
            foodPriceChildren: response.data.foodPriceChildren,
          });
        }
      })
      .catch((error) => {
        console.error("Error" + error);
      });
  };
  resetCourse = () => {
    this.setState(() => this.initialState);
  };
  submitFestival = (event) => {
    // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
    event.preventDefault();
    const festival = {
      festivalId: this.state.festivalId,
      festivalName: this.state.festivalName,
      festivalRegion: this.state.festivalRegion,
      festivalVenue: this.state.festivalVenue,
      festivalAmountAdult: this.state.festivalAmountAdult,
      festivalAmountChildren: this.state.festivalAmountChildren,
      festivalDate: this.state.festivalDate,
      fooditem: this.state.fooditem,
      foodPriceAdult: this.state.foodPriceAdult,
      foodPriceChildren: this.state.foodPriceChildren,
    };

    axios
      .post("http://3.20.221.44:8082/festival/insert", festival)
      .then((response) => {
        if (response.data != null) {
          this.setState(this.initialState);
          alert(response.data);
        }
      });
  };
  // componentDidMount() {
  //     const requestOptions = {
  //         method: 'POST',
  //         body: JSON.stringify({CourseId:this.state.courseId,
  //             CourseName:this.state.courseName,
  //             courseDuration:this.state.courseDuration,
  //             Instructor:this.state.instructor,
  //             Fee:this.state.fee,
  //             capacity:this.state.capacity,
  //             instructorId:this.state.instructorId
  // })
  //     };
  //     fetch('http://localhost:9090/createcourse', requestOptions)
  //         .then(response => response.json())
  //         .then(data => this.setState({ postId: data.courseId }));
  // }

  festivalChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  festivalList = () => {
    return this.props.history.push("/FestivalAdmin");
  };

  render() {
    const {
      festivalId,
      festivalName,
      festivalRegion,
      festivalVenue,
      festivalAmountAdult,
      festivalAmountChildren,
      festivalDate,
      fooditem,
      foodPriceAdult,
      foodPriceChildren,
    } = this.state;
    return (
      <Card className="border border-dark bg-secondary text-white text-center alignItems-center">
        <Card.Header>
          <FontAwesomeIcon icon={faPlusSquare} /> Add Festival
        </Card.Header>

        <Form
          onReset={this.resetFestival}
          onSubmit={this.submitFestival}
          id="festivalFormId"
        >
          <Card.Body>
            <Row>
              <Form.Group
                as={Col}
                controlId="formGridfestivalId"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>Festival Id</b>
                </Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  type="text"
                  name="festivalId"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="Enter Festival Id"
                  className={"bg-light text-black"}
                  value={festivalId}
                  onChange={this.festivalChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridFestivalName"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>Festival Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  name="festivalName"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="Enter Festival Name"
                  className={"bg-light text-black"}
                  value={festivalName}
                  onChange={this.festivalChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridFestivalRegion"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>Festival Region</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  name="festivalRegion"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="Enter Festival Region"
                  className={"bg-light text-black"}
                  value={festivalRegion}
                  onChange={this.festivalChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                controlId="formGridFestivalVenue"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>Festival Venue</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  name="festivalVenue"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="Enter Festival Venue"
                  className={"bg-light text-black"}
                  value={festivalVenue}
                  onChange={this.festivalChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridFestivalAmountAdult"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>festival Amount Adult</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  name="festivalAmountAdult"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="festival Amount Adult"
                  className={"bg-light text-black"}
                  value={festivalAmountAdult}
                  onChange={this.festivalChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                controlId="formGridFestivalAmountChildren"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>festival Amount Children</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  name="festivalAmountChildren"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="festival Amount Children"
                  className={"bg-light text-black"}
                  value={festivalAmountChildren}
                  onChange={this.festivalChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridFestivalDate"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>Festival Date</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  name="festivalDate"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="Enter Festival Date"
                  className={"bg-light text-black"}
                  value={festivalDate}
                  onChange={this.festivalChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                controlId="formGridFoodItem"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>Food Item</b>
                </Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  type="text"
                  name="fooditem"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="Enter Food Item"
                  className={"bg-light text-black"}
                  value={fooditem}
                  onChange={this.festivalChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridFoodPriceAdult"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>Food Price Adult</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  name="foodPriceAdult"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="Enter Food Price Adult"
                  className={"bg-light text-black"}
                  value={foodPriceAdult}
                  onChange={this.festivalChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridFoodPriceChildren"
                style={{ width: "250px" }}
              >
                <Form.Label style={{ fontFamily: "Comic Sans Ms" }}>
                  <b>Food Price Children</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  name="foodPriceChildren"
                  style={{
                    border: "5px solid skyblue",
                    boxShadow: "5px 5px black",
                    borderRadius: "20px",
                  }}
                  placeholder="Enter Food Price Children"
                  className={"bg-light text-black"}
                  value={foodPriceChildren}
                  onChange={this.festivalChange}
                />
              </Form.Group>
            </Row>
          </Card.Body>
          <Row>
            <Card.Footer style={{ "text-align": "center" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} /> Submit
              </Button>
              {"  "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Reset
              </Button>{" "}
              <Button
                size="sm"
                variant="info"
                type="button"
                onClick={this.festivalList.bind()}
              >
                <FontAwesomeIcon icon={faList} /> Festival List
              </Button>
            </Card.Footer>
          </Row>
        </Form>
      </Card>
    );
  }
}
export default AddFestival;
