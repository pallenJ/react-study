import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1,{BoardMain,BoardEXE} from './App1';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from "react-router-dom";
import BoardExample from './BoardExample';
import Study from './Study';


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
      <Route path = "/study" component = {Study}/>

</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
