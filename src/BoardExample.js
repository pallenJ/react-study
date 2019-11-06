import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Switch, { Case, Default } from 'react-switch-case';

export default class BoardExample extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        boards:
            [{ brdno: 1, brdwriter: 'GIOGIO', brdtitle: '최고다 연수유라쨩!', brddate: new Date() },
            { brdno: 2, brdwriter: 'JOJO', brdtitle: '연수다 최고유라쨩!!', brddate: new Date() }]
    }

    render() {
        const { boards } = this.state;

        return (
            <Fragment>

                <div class="container" align="center">
                    <div></div>
                    <pre />
                    <table class="table table-bordered">
                        <thead class="thead table-primary">
                            <tr>
                                <th>NO</th>
                                <th>TITLE</th>
                                <th>NAME</th>
                                <th>DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                        { boards.map(row => (<BoardItem key={row.brdno} row={row} />) ) }

                        </tbody>
                    </table>

                </div>

            </Fragment>
        )
    }
}

class BoardItem extends Component { 
    render() {
        return (
        <tr> 
            <td>{this.props.row.brdno}</td> 
            <td>{this.props.row.brdtitle}</td> 
            <td>{this.props.row.brdwriter}</td> 
            <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td> 
        </tr>);
    }
}
