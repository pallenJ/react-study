import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1,{BoardMain,BoardEXE} from './App1';

import * as serviceWorker from './serviceWorker';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import BoardExample from './BoardExample';


//ReactDOM.render(<App1 />, document.getElementById('root'));
// ReactDOM.render(
// <Router>

// <Route path="/" component={App}></Route>
// </Router>   
// , document.getElementById('root'));

ReactDOM.render(<Router>
      <Route exact path = "/" component = {App}/>
      <Route path = "/test" component = {App1}/>
      <Route exact path = "/boardExe" component = {BoardMain}/>
      <Route path = "/boardExe/:action" component = {BoardEXE}/>
      <Route path = "/boardExe/detail/:no" component = {BoardEXE}/>
      <Route path = "/boardExample" component = {BoardExample}/>

</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
