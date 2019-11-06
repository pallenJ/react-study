import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Switch, { Case, Default } from 'react-switch-case';

export default class BoardExample extends Component {
    static propTypes = {
        prop: PropTypes
    }
    static boardHeader = ["no", "title", "writer", "date"]
    static boardData = [
        {
            bno: 1,
            btitle: "sample01",
            bwriter: "writer1",
            content: <h1> Sample Test</h1>,
            regdate: "today"
        }
    ];
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row"></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}
