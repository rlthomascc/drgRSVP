import React, { Component } from 'react';
import axios from 'axios';

const Form = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.fullname.value, e.target.agent.value, e.target.guests.value);
        axios.post('/register', {
            name: e.target.fullname.value,
            phone: e.target.phoneNumber.value,
            agent: e.target.agent.value,
            guests: e.target.guests.value,
        })

        axios.patch('/invites', {
            name: e.target.fullname.value,
            guests: e.target.guests.value,
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => { console.log(err) })

        props.route('', e.target.agent.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div id="formHeader">
                <img src="/photos/smaller.png" width="200px"/>
                <p className="h2 font-weight-bold">Del Real Group Registration for <br />
                Client Appreciation Event 2019</p>
                <p id="totalCount" className="font-weight-bold">Total Registered Guests: {props.guests}</p>
                <br />
            </div>

            <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" id="fullname" required />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter 10 digit Phone Number" pattern="\d*" minLength="7" maxLength="10" id="phoneNumber" required />
            </div>
            <div className="form-group">
                <label>Agent</label>
                <select className="form-control" id="agent" required>
                    <option value="">Choose One...</option>
                    <option value="Joseph Bondi">Joseph Bondi</option>
                    <option value="Daniel Del Real">Daniel Del Real</option>
                    <option value="Indalecio Andy Del Real">Indalecio 'Andy' Del Real</option>
                    <option value="Jennifer Edwards">Jennifer Edwards</option>
                    <option value="Carlos Gutierrez">Carlos Gutierrez</option>
                    <option value="Patricia Servin-Martinez">Patricia Servin-Martinez</option>
                    <option value="Michael Meneses">Michael Meneses</option>
                    <option value="Chris Sauls">Chris Sauls</option>
                    <option value="Amanda Stallcup">Amanda Stallcup</option>
                    <option value="Don Wright">Don Wright</option>
                </select>
            </div>
            <div className="form-group">
                <label>Number Of Guests</label>
                <select className="form-control" id="guests" required>
                    <option value="">Choose One...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>
        </form>
)

}


export default Form;