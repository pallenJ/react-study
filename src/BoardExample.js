import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Switch, { Case, Default } from 'react-switch-case';

export default class BoardExample extends Component {
    static propTypes = {
        prop: PropTypes
    }
    boardHeader = ["no", "title", "writer", "content", "date"]
    // static boardData = [
    //     {
    //         bno: 1,
    //         btitle: "sample01",
    //         bwriter: "writer1",
    //         content: <h1> Sample Test</h1>,
    //         regdate: "today"
    //     }
    // ];
    // static temp = {
    //     bno: 1,
    //     btitle: "sample01",
    //     bwriter: "writer1",
    //     content: <h1> Sample Test</h1>,
    //     regdate: "today"
    // }
    static submitHandler = (e) => { 
        //BoardData.boardData.push(BoardData.temp)
    //alert(JSON.stringify(BoardData.boardData))
    this.state = {no : 1}
    }
    render() {
        alert(JSON.stringify(this.state))
        BoardData.boardData.push(BoardData.temp)
        return (


            <div>
                <div class="container" align="center">
                    <div style={{ width: 400, padding:10 }} align="left" class ="bg-primary border">
                        <form onSubmit={BoardExample.submitHandler}>

                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control" name="title" id="title" aria-describedby="" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="content">Content</label>
                                <textarea class="form-control" name="content" id="content" rows="5"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="writer">Writer</label>
                                <input type="text" class="form-control" name="writer" id="writer" aria-describedby="" placeholder="" value="guest" />
                            </div>
                            <div class="btn btn-block bg-light">
                            <button type="submit" name="" id="" class="btn btn-outline-primary btn-lg btn-block">add</button>
                            </div>
                        </form>
                    </div>

                    <pre></pre>

                    {
                        BoardData.boardData.map(e => (
                            <Fragment>
                                <div class="card" style={{ width: 600 }}>
                                    <div class="card-header">
                                        no : {e.bno}
                                    </div>
                                    <div class="card-body" align="left">
                                        <h5 class="card-title">{e.btitle}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">writer : {e.bwriter}</h6>
                                        <p class="card-text border">{e.content}</p>
                                        <small>date : {e.regdate}</small>
                                    </div>
                                </div>
                                <br />
                            </Fragment>
                        ))
                    }

                </div>
            </div>
        )
    }
}



export class BoardData extends Component {
    static boardData = [
        {
            bno: 1,
            btitle: "sample01",
            bwriter: "writer1",
            content: <h1> Sample Test</h1>,
            regdate: "today"
        }
    ];
    static temp = {
        bno: 1,
        btitle: "sample01",
        bwriter: "writer1",
        content: <h1> Sample Test</h1>,
        regdate: "today"
    }
}
