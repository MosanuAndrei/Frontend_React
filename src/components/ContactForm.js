import React from 'react'
import './ContactForm.css'

class ContactForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fullName: "",
            dateFrom: "",
            dateTo: "",
            phoneNumber: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        if (name === "fullName"){
            this.setState({
                fullName: value
            });
        }
        if (name === "dateFrom"){
            this.setState({
                dateFrom: value
            });
        }
        if (name === "dateTo"){
            this.setState({
                dateTo: value
            });
        }
        if (name === "phoneNumber"){
            this.setState({
                phoneNumber: value
            });
        }
    }

    handleClick(event){
        event.preventDefault();
        const data = {
            "fullName":this.state.fullName,
            "dateFrom":this.state.dateFrom,
            "dateTo":this.state.dateTo,
            "phoneNumber":this.state.phoneNumber
        }
        fetch("", {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(data)
        }).then(function(){
            alert("Succes!");
        })
    }

    render(){
        return(
            <div className="contact-form">
                <div className="contact-title">Reserve Booking Page</div>
                <form action="/">
                    <div>
                        <label className="form-label">Full name:</label>
                        <input
                        className="form-element"
                        type="text"
                        name="fullName"
                        onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div>
                        <label className="form-label">Date From:</label>
                        <input
                            className="form-element"
                            type="date"
                            name="dateFrom"
                            onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div>
                        <label className="form-label">Date to:</label>
                        <input
                            className="form-element"
                            type="date"
                            name="dateTo"
                            onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div>
                        <label className="form-label">Phone number:</label>
                        <input
                            className="form-element"
                            type="tel"
                            name="phoneNumber"
                            onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <button className="form-button" onClick={this.handleClick}>Send Booking</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm