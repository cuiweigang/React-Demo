/**
 * Created by cuiweigang on 15/11/26.
 */
'use strict';
import React from 'react';
import '../Assets/css/App.css';
import ReactDOM from 'react-dom';
import Message from './Message';
import Message1 from './Message1'
import { Router, Route, Link } from 'react-router'
import Menu from './Menu';

var App = React.createClass({
  render () {
    return (
        <div>
          <Menu/>
          {this.props.children}
        </div>
    )
  }
});

var router = (
    <Router>
      <Route path="/" component={App}>
        <Route path="m/:id" component={Message}/>
        <Route path="m1" component={Message1}>
        </Route>
      </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('container'));

//var routes = (
//    <Router>
//      <Route path="/" component={App}>
//        <Route path="m" component={Message}/>
//        <Route path="m1" component={Message1}>
//        </Route>
//        <Route path="*" component={App}/>
//      </Route>
//    </Router>);
//
//ReactDOM.render(routes
//    , document.body);