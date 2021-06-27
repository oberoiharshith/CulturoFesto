import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types'

class Payment extends Component {

    state = {
        paymentid: 0,
        customerfname: "",
        customerlname: "",
        customermail: "",
        customeraddress: "",
        customerpno: "",
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        let payment= {
          customerfname: this.state.customerfname,
          customerlname: this.state.customerlname,
          customermail: this.state.customermail,
          customeraddress: this.state.customeraddress,
          customerpno: this.state.customerpno,
        }


    await axios
      .post("http://localhost:8082/payment/insert/", payment)
      .then((data)=>{})
      .catch((error)=>{alert(error.response.data.message);  });
      this.props.history.push("/");
    };


    render()
    {
      
     
      const style={
          color:"black"
      }
      return(

        <form onSubmit={this.handleSubmit}>
      <h1>
        Payment Gateway
      </h1>

      <div className="form-group">
          <label>Enter First Name</label>
          <input type="text" className="form-control" id="customerfname" placeholder="Enter First Name" style={style}
                  value={this.state.customerfname} onChange={(event) => this.setState({ customerfname: event.target.value }) } required
          />
        </div>

        <div className="form-group">
          <label>Enter Last Name</label>
          <input type="text" className="form-control" id="customerlname" placeholder="Enter Last Name" style={style}
                  value={this.state.customerlname} onChange={(event) => this.setState({ customerlname: event.target.value }) } required
          />
        </div>

        <div className="form-group">
          <label>Enter Mail id</label>
          <input type="text" className="form-control" id="customermail" placeholder="Enter Maid id" style={style}
                  value={this.state.customermail} onChange={(event) => this.setState({ customermail: event.target.value }) } required
          />
        </div>

        <div className="form-group">
        <label>Enter Address</label> 
         <input type="text" className="form-control" id="customeraddress" placeholder="Enter Address"  style={style}
                  value={this.state.customeraddress} onChange={(event) => this.setState({customeraddress: event.target.value }) } required
          />
        </div>

        <div className="form-group">
         <label>Enter Phone No</label> <input type="text" className="form-control" id="customerpno" placeholder="Enter Phone No" style={style}
                  value={this.state.customerpno} onChange={(event) => this.setState({ customerpno: event.target.value }) } required
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Make Payment
        </button>
      </form>


        );
      }
    }





Component.PropTypes={
  customerfname: PropTypes.string,
  customerlname: PropTypes.string,
  customermail: PropTypes.string,
  customeraddress: PropTypes.string,
  customerpno:PropTypes.string,

  }

export default Payment;