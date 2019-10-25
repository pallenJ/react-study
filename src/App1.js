import React, { Component } from 'react'

export default class App1 extends Component {
    render() {
        let elt = [];
        for (let i = 0; i < 5; i++) {
            elt.push(
            <h1>Test</h1>
                );
        } 
        return (
            <div class="container pull-center" align="center">
                <div class="panel col-8" style={{marginTop: 50}}>
                    <div class="panel-heading btn-primary">
                <p class="h2">Table 연습예제</p>

                    </div>
                    <div class="panel-body" style={{marginTop: 30}}>
                    {this.tableTest()}
                    </div>
                </div>
            </div>
        );
    }

    tableTest(){
        return(
            <table class="table table-bordered table-hover">
                <tbody>
               

                <tr>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
                <td>data4</td>
                </tr>   

                <tr>
                <td>data5</td>
                <td>data6</td>
                <td>data7</td>
                <td>data8</td>
                </tr>   

                <tr>
                <td>data9</td>
                <td>data10</td>
                <td>data11</td>
                <td>data12</td>
                </tr>   
                   

                </tbody>
                <thead class="table-primary">
                <tr>
                <th>col1</th>
                <th>col2</th>
                <th>col3</th>
                <th>col4</th>
                </tr>
                </thead>
            </table>
        );
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
                    {this.buttonEXE("btn-success btn-lg","success")}
                    {this.buttonEXE("btn-info btn-lg","info")}
                    {this.buttonEXE("btn-warning btn-lg","warning")}
                    {this.buttonEXE("btn-danger btn-lg","danger")}
                    {this.buttonEXE("btn-secondary btn-lg","secondary")}
                </div>

                <div>
                    {this.buttonEXE("btn-outline-default btn-lg text-white","default")}
                    {this.buttonEXE("btn-outline-primary btn-lg","primary")}
                    {this.buttonEXE("btn-outline-success btn-lg","success")}
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

