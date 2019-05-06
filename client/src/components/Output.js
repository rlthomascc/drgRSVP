import React, { Component } from 'react';


const Output = (props) => {

    return (
        <div className="outputContainer">
        <img src="/photos/smaller.png" width="200px"/>
            <p className="h2 font-weight-bold">
            Thank you for taking the time to register <br /> 
            to the 2019 Del Real Group Client Appreciation Event! <br />
            <br />
            </p>
            <p className="h5"><i>We can't wait to see you!</i></p>
            <br />
            <a href="http://www.thedelrealgroup.com/" target="_blank">View Our Website</a> 
            {'          |          '}
            <a href="http://www.delrealgroupreviews.com/" target="_blank">Leave Us A Review</a>
        </div>
    )
}

export default Output