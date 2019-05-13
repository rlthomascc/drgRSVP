import React, { Component } from 'react';


const Output = (props) => {
    const {agent} = props;

    const reloadPage = () => {
        document.location.reload()
    }

    return (
        <div className="outputContainer">
        <img src="/photos/smaller.png" width="200px"/>
            <p className="h1 font-weight-bold" id={agent.split(' ').join('_')}>Your Agent Is {props.agent} </p>
            <br />
            <p className="h2 font-weight-bold">
            Thank you for taking the time to register <br /> 
            to the 2019 Del Real Group Client Appreciation Event! <br />
            </p>
            <br />
            <br />
            <button className="btn btn-primary" onClick={reloadPage}>New Registration</button>
        </div>
    )
}

export default Output