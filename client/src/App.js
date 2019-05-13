import React, { Component } from 'react';
import Form from './components/Form.js';
import Output from './components/Output.js';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        router: 'home',
        agent: '',
        guests: 0,
        }
    }

    componentDidMount() {
        axios.get('/register')
        .then(res => {
            this.setState({
                guests: res.data.reduce((acc, elem) => {
                    return acc + elem.guests
                }, 0)
            })
        })
        .catch(err => { console.log(err) })
    }



    changeRoute(route, agent) {
        console.log(route, agent)
        this.setState({
            router: route,
            agent: agent,
        })
    }


    render() {
        const {router, agent, guests} = this.state
        if (router === 'home') {
            return (
                <div>
                <Form route={this.changeRoute.bind(this)} guests={guests}/>
            </div>
        );
        }
        return (
            <div>
                <Output route={this.changeRoute.bind(this)} agent={agent}/>
            </div>
        )
    };
};

export default App;