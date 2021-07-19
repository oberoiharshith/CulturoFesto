import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Table, InputGroup } from "react-bootstrap";
import {
  faList,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { axios } from "axios";
class UserAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: [],
      current: 1,
      next: 2,
    };
  }

  prevPage = () => {
    if (this.state.current > 1) {
      this.setState({
        current: this.state.current - 1,
      });
    }
  };

  nextPage = () => {
    if (
      this.state.current <
      Math.ceil(this.state.userinfo.length / this.state.next)
    ) {
      this.setState({
        current: this.state.current + 1,
      });
    }
  };

  componentDidMount() {
    fetch("http://3.20.221.44:8082/display")
      .then((response) => response.json())

      .then((data) => this.setState({ userinfo: data }));
  }
  //Course Delete (Incomplete)
  // deleteCourse = (courseId) => {
  //     axios.delete("http://localhost:9090/deleteCourse/"+courseId)
  //     .then(response => {
  //         if(response.data != null)
  //         {
  //             alert(response.data);
  //             this.setState({
  //                 courses:this.state.courses.filter(course=>course.courseId != courseId)
  //             });
  //         }
  //     });
  // };
  render() {
    const { userinfo, current, next } = this.state;
    const lastIndex = current * next;
    const firstIndex = lastIndex - next;
    const currentUser = userinfo.slice(firstIndex, lastIndex); // switch between the pages
    const totalPages = userinfo.length / next;
    return (
      <Card className="border border-dark bg-dark text-white text-center">
        <Card.Header>
          {" "}
          <FontAwesomeIcon icon={faList} /> Userinfo
        </Card.Header>
        <Card.Body>
          <Table bordered hover striped variant="dark">
            <thead>
              <tr>
                <th>ID </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>Date Of Birth</th>
                <th>Password</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {userinfo.length === 0 ? (
                <tr align="center">
                  <td colSpan="7">No User Found </td>
                </tr>
              ) : (
                currentUser.map((userinfo) => (
                  <tr>
                    <td>{userinfo.iDp}</td>
                    <td>{userinfo.firstName}</td>
                    <td>{userinfo.lastName}</td>
                    <td>{userinfo.mobile}</td>
                    <td>{userinfo.dob}</td>
                    <td>{userinfo.gnPassword}</td>
                    <td>{userinfo.gnUid}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <div style={{ float: "left" }}>Showing Page {current}</div>
          <div style={{ float: "right" }}>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <Button
                  type="button"
                  variant="outline-info"
                  disabled={current === 1 ? true : false}
                  onClick={this.prevPage}
                >
                  <FontAwesomeIcon icon={faStepBackward} />
                  Prev
                </Button>
              </InputGroup.Prepend>
              <InputGroup.Append>
                <Button
                  type="button"
                  variant="outline-info"
                  disabled={current === totalPages ? true : false}
                  onClick={this.nextPage}
                >
                  <FontAwesomeIcon icon={faStepForward} /> Next
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Card.Footer>
      </Card>
    );
  }
}
export default UserAdmin;
