import React, { Component , Fragment  } from 'react'

export default class Study extends Component {
    render() {
        return (
           <Fragment>
               {/* <ButtonEx name = "test"/> */}
               <Counter/>
           </Fragment>
        )
    }
}
export class Study1 extends Component {
    render() {
        return (
            <button className="btn btn-dark">aaa</button>
           
        )
    }
}

class Counter extends Component {
    state = {
      number: 0
    }
  
    handleIncrease = () => {
      this.setState({
        number: this.state.number + 1
      });
    }
  
    handleDecrease = () => {
      this.setState({
        number: this.state.number - 1
      });
    }
  
    render() {
      return (
         <div align="center"> 
        <div className = "border" style = {{width:400}}>
            <div className = "panel panel-default">
                <div className = "panel-heading">counter</div>
            </div>
          
          <div className = "panel-body"> <p className = "h1">   value: {this.state.number}</p></div>
          <div className = "panel-footer">

          <button onClick={this.handleIncrease} className = "btn btn-outline-primary">+</button>
          <button onClick={this.handleDecrease} className = "btn btn-outline-danger">-</button>
          </div>
        </div>
        </div>
      );
    }
  }
  

export const ButtonEx = (e) => {
    return (
        <div>
            <button className="btn btn-primary">{e.name}</button>
        </div>
    )
}
export const example = () => {
    return (
        <div>
            
        </div>
    )
}
