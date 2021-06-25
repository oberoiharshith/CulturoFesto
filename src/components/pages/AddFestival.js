import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class AddFestival extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.festivalChange = this.festivalChange.bind(this);
        this.submitFestival = this.submitFestival.bind(this);
    }
    initialState = {
        festivalId:'', festivalName:'', festivalRegion:'', festivalVenue: '', festivalAmountAdult:'', festivalAmountChildren:'', festivalDate: '', fooditem: '',foodPriceAdult: '',foodPriceChildren: ''
    };

    componentDidMount(){
        const festivalName =+this.props.match.params.festivalName;
        if(festivalName){
            this.findFestivalName(festivalName)
        }
    }

    findFestivalName=(festivalName)=>{
        axios.get("localhost:8082/festival/findFestivalByName/"+festivalName)
        .then(response=>{
            if(response.data != null)
            {
                this.setState({
                    festivalId:response.data.festivalId,
                    festivalName:response.data.festivalName,
                    festivalRegion:response.data.festivalRegion,
                    festivalVenue:response.data.festivalVenue,
                    festivalAmountAdult:response.data.festivalAmountAdult,
                    festivalAmountChildren:response.data.festivalAmountChildren,
                    festivalDate:response.data.festivalDate,
                    fooditem:response.data.fooditem,
                    foodPriceAdult:response.data.foodPriceAdult,
                    foodPriceChildren:response.data.foodPriceChildren,
                });
            }
        }).catch((error)=>{
            console.error("Error"+error);
        });
    }
    resetCourse=()=>{
        this.setState(()=>this.initialState);
    }
    submitFestival = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const festival = {
            festivalId:this.state.festivalId,
            festivalName:this.state.festivalName,
            festivalRegion:this.state.festivalRegion,
            festivalVenue:this.state.festivalVenue,
            festivalAmountAdult:this.state.festivalAmountAdult,
            festivalAmountChildren:this.state.festivalAmountChildren,
            festivalDate:this.state.festivalDate,
            fooditem:this.state.fooditem,
            foodPriceAdult:this.state.foodPriceAdult,
            foodPriceChildren:this.state.foodPriceChildren,
        };

        axios.post("http://localhost:8082/festival/insert",festival)
        .then(response=>{
            if(response.data != null){
                this.setState(this.initialState);
                alert(response.data);
            }
        });
    }
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

    festivalChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    festivalList=()=>{
        return this.props.history.push("/FestivalAdmin");
    };


    render() {
        const { festivalId, festivalName,festivalRegion,festivalVenue,festivalAmountAdult,festivalAmountChildren,festivalDate,fooditem,foodPriceAdult,foodPriceChildren } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Festival</Card.Header>

                <Form onReset={this.resetFestival} onSubmit={this.submitFestival} id="festivalFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridfestivalId">
                                <Form.Label>Festival Id</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="festivalId" placeholder="Enter Festival Id" className={"bg-dark text-white"} value={festivalId} onChange={this.festivalChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFestivalName">
                                <Form.Label>Festival Name</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="festivalName" placeholder="Enter Festival Name" className={"bg-dark text-white"} value={festivalName} onChange={this.festivalChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFestivalRegion">
                                <Form.Label>Festival Region</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="festivalRegion" placeholder="Enter Festival Region" className={"bg-dark text-white"} value={festivalRegion} onChange={this.festivalChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFestivalVenue">
                                <Form.Label>Festival Venue</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="festivalVenue" placeholder="Enter Festival Venue" className={"bg-dark text-white"} value={festivalVenue} onChange={this.festivalChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFestivalAmountAdult">
                                <Form.Label>festival Amount Adult</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="festivalAmountAdult" placeholder="festival Amount Adult" className={"bg-dark text-white"} value={festivalAmountAdult} onChange={this.festivalChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFestivalAmountChildren">
                                <Form.Label>festival Amount Children</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="festivalAmountChildren" placeholder="festival Amount Children" className={"bg-dark text-white"} value={festivalAmountChildren} onChange={this.festivalChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFestivalDate">
                                <Form.Label>Festival Date</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="festivalDate" placeholder="Enter Festival Date" className={"bg-dark text-white"} value={festivalDate} onChange={this.festivalChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFoodItem">
                                <Form.Label>Food Item</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="fooditem" placeholder="Enter Food Item" className={"bg-dark text-white"} value={fooditem} onChange={this.festivalChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFoodPriceAdult">
                                <Form.Label>Festival Price Adult</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="foodPriceAdult" placeholder="Enter Food Price Adult" className={"bg-dark text-white"} value={foodPriceAdult} onChange={this.festivalChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFoodPriceChildren">
                                <Form.Label>Food Price Children</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="foodPriceChildren" placeholder="Enter Food Price Children" className={"bg-dark text-white"} value={foodPriceChildren} onChange={this.festivalChange} />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{ "text-align": "right" }}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Submit
  </Button>{'  '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Reset
  </Button>{' '}
  <Button size="sm" variant="info" type="button" onClick={this.festivalList.bind()}>
                            <FontAwesomeIcon icon={faList} /> Festival List
  </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}
export default AddFestival;