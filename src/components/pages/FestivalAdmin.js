import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ButtonGroup,Button, Card, Table, InputGroup } from 'react-bootstrap';
import { faEdit, faList, faStepBackward, faStepForward, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
class FestivalAdmin extends React.Component { 
    constructor(props)
    {
        super(props);
        this.state={
            festival:[],
            current:1,
            next:2
        };
        
    }

    prevPage=()=>{
        if(this.state.current>1){
            this.setState({
                current:this.state.current-1
            });
        }
    };

    
    nextPage=()=>{
        if(this.state.current< Math.ceil(this.state.festival.length/this.state.next)){
            this.setState({
                current:this.state.current+1
            });
        }
    };

    componentDidMount() {

        fetch('http://localhost:8082/festival/findAll')
        
        .then(response => response.json())
        
        .then(data => this.setState({ festival:data }));
        
        }


        deleteRow(festivalId, e){
            axios.delete(`http://localhost:8082/festival/delete/${festivalId}`)
            .then(response => {
                if(response.data != null)
                {
                    alert(response.data);
                    this.setState({
                        festivals:this.state.festival.filter(festival=>festival.festivalId !== festivalId)
                    });
                }
            });
           
         };


    render() {
        const {festival,current,next}=this.state;
        const lastIndex=current*next;
        const firstIndex=lastIndex-next;
        const currentUser=festival.slice(firstIndex,lastIndex);
        const totalPages=festival.length/next;
        return (
            <Card className="border border-dark bg-dark text-white text-center">
                <Card.Header > <FontAwesomeIcon icon={faList} /> Editable Festival</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th>Festival Id</th>
                                <th>Festival Name</th>
                                <th>Festival Region</th>
                                <th>Festival Venue</th>
                                <th>Adult Fee</th>
                                <th>Child Fee</th>
                                <th>Festival Date</th>
                                <th>Festival Food</th>
                                <th>Food Price Adult</th>
                                {/* <th>Food Price Child</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {
                        festival.length===0 ?
                            <tr align="center">
                                <td colSpan="8">No Upcoming Festival </td>
                            </tr>:
                            currentUser.map((festival) => (
                                    <tr>
                                         <td>
                                            {festival.festivalId}
                                        </td>
                                        <td>{festival.festivalName}</td>
                                        <td>{festival.festivalRegion}</td>
                                        <td>{festival.festivalVenue}</td>
                                        <td>{festival.festivalAmountAdult}</td>
                                        <td>{festival.festivalAmountChildren}</td>
                                        <td>{festival.festivalDate}</td>
                                        <td>{festival.fooditem}</td>
                                        <td>{festival.foodPriceAdult}</td>
                                        {/* <td>{festival.foodPriceChildren}</td> */}
                                        <td>
                                            <ButtonGroup>
                                                {/* <Link to={"AddFestival/"+festival.festivalName} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '} */}
                                                <Button size="sm" variant="outline-danger" onClick={(e)=>this.deleteRow(festival.festivalId, e)}><FontAwesomeIcon icon={faTrash}/></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                            ))
                            }
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer>
                    <div style={{"float":"left"}}>
                            Showing Page {current}
                    </div>
                    <div style={{"float":"right"}}>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                <Button type="button" variant="outline-info" disabled={current===1?true:false} onClick={this.prevPage}>
                                <FontAwesomeIcon icon={faStepBackward} />Prev
                                </Button>
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                <Button type="button" variant="outline-info" disabled={current===totalPages?true:false} onClick={this.nextPage}>
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
export default FestivalAdmin;