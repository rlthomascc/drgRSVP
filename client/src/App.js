import React, { Component } from 'react';
import Form from './components/Form.js';
import Output from './components/Output.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        router: 'home',
        }
    }

    changeRoute(e) {
        this.setState({
            router: e
        })
    }

    render() {
        const {router} = this.state
        if (router === 'home') {
            return (
                <div>
                <Form route={this.changeRoute.bind(this)}/>
            </div>
        );
        }
        return (
            <div>
                <Output route={this.changeRoute.bind(this)}/>
            </div>
        )
    };
};

export default App;