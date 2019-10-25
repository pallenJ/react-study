import React, { Component } from 'react'

export default class App1 extends Component {
    render() {
        let elt = [];
        for (let i = 0; i < 5; i++) {
            elt.push(
            <h1>Test</h1>
                );
        } 
        return this.buttonTest();
    }
    buttonEXE(btnClass, btnName) {
        return(
            <button class={"btn "+btnClass} type="submit">{btnName} </button>
        );
    }
    buttonTest(){
        return (
            <div id= "btnSample">
                <div id="btn-larges">
                 <h3>Btn-larges</h3>   
                <div>
                    {this.buttonEXE("btn-default btn-lg","default")}
                    {this.buttonEXE("btn-primary btn-lg","primary")}
                    {this.buttonEXE("btn-info btn-lg","info")}
                    {this.buttonEXE("btn-warning btn-lg","warning")}
                    {this.buttonEXE("btn-danger btn-lg","danger")}
                    {this.buttonEXE("btn-secondary btn-lg","secondary")}
                </div>

                <div>
                    {this.buttonEXE("btn-outline-primary btn-lg","primary")}
                    {this.buttonEXE("btn-outline-info btn-lg","info")}
                    {this.buttonEXE("btn-outline-warning btn-lg","warning")}
                    {this.buttonEXE("btn-outline-danger btn-lg","danger")}
                    {this.buttonEXE("btn-outline-secondary btn-lg","secondary")}
                </div>
                
                </div>

            </div>
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

