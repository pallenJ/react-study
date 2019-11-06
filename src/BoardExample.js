import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Switch, { Case, Default } from 'react-switch-case';

export default class BoardExample extends Component {
    static propTypes = {
        prop: PropTypes
    }
    
    render() {
        return (
               <Fragment>

                    <div class = "container">게시판</div>

               </Fragment>
        )
    }
}

