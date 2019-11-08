import React, { Component , Fragment  } from 'react'

export default class Study extends Component {
    render() {
        return (
           <Fragment>
               <buttonEx name = "test"/>
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


export const buttonEx = (name) => {
    return (
        <div>
            <button className="btn btn-primary">{name}</button>
        </div>
    )
}
export const example = () => {
    return (
        <div>
            
        </div>
    )
}
