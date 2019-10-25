import React, { Component } from 'react'

export default class App1 extends Component {
    render() {
        let elt = [];
        for (let i = 0; i < 5; i++) {
            elt.push(
            <h1>Test</h1>
                );
        }
        let aaa = this.buttonTest; 
        return this.buttonTest("primary");
    }
    buttonTest(btnType) {
        return(
            <button class={"btn btn-"+btnType} type="submit">Button </button>
        );
    }
}

export class BoardEXE extends Component {
    render() {
        let elt = [];
        for (let i = 0; i < 10; i++) {
            elt.push(<h1>Board</h1>);
        }
        return (
            <div>
                {elt}
            </div>
        )
    }
}

