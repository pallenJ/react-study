import React, { Component } from 'react'

export default class App1 extends Component {
    render() {
        let elt = [];
        for (let i = 0; i < 10; i++) {
            elt.push(<h1>Test</h1>);
        }
        return (
            <div>
                {elt}
            </div>
        )
    }
}

