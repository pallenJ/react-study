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
            { brdno: 2, brdwriter: 'JOJO', brdtitle: '연수다 최고유라쨩!!', brddate: new Date() }],
        maxNo: 3
    }

    handleSaveData = (data) => {
        this.setState({
            boards: this.state.boards.concat({
                brdno: this.state.maxNo++, brddate: new Date(), ...data
            })
        });
    }

    handleRemove = (brdno) => {
        this.setState({ boards: this.state.boards.filter(row => row.brdno !== brdno) })
    }


    render() {
        const { boards } = this.state;

        return (
            <Fragment>

                <div class="container" align="center">

                    <BoardForm onSaveData={this.handleSaveData} />
                    <pre />
                    <table class="table table-bordered" style={{ width: 600 }}>
                        <thead class="thead table-primary">
                            <tr>
                                <th>NO</th>
                                <th>TITLE</th>
                                <th>NAME</th>
                                <th>DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            boards.map(row => (
                            <BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />))
                            }

                        </tbody>
                    </table>

                </div>

            </Fragment>
        )
    }
}

class BoardItem extends Component {
    handleRemove = () => { 
        const { row, onRemove } = this.props; 
        onRemove(row.brdno); 
    }

    render() {
        return (
            <tr>
                <td>{this.props.row.brdno}</td> 
                <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td> 
                <td>{this.props.row.brdwriter}</td> 
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td> 
                <td><button class="btn btn-danger" onClick={this.handleRemove}> <i class="fa fa-trash" aria-hidden="true"></i> </button></td>

            </tr>);
    }
}

class BoardForm extends Component {
    state = {}
    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state); this.setState({});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ width: 400 }}>


                <div align="left" style={{ padding: 10 }} class="border">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input placeholder="title" name="brdtitle" id="title" onChange={this.handleChange} type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input placeholder="name" name="brdwriter" id="name" onChange={this.handleChange} type="text" class="form-control" />
                    </div>
                    <button class="btn btn-success btn-block" type="submit">Save</button>
                </div>
            </form>
        );
    }
}
