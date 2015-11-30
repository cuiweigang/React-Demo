/**
 * Created by cuiweigang on 15/11/26.
 */
'use strict';
import React from 'react';
import '../Assets/css/App.css';
import ReactDOM from 'react-dom';
import Message from './Message';
import Message1 from './Message1';
import { Router, Route, Link } from 'react-router'
import TodoComponent from './RefluxDemo';
import RefluxDemo2 from './RefluxDemo2';
import RefluxDemo3 from './RefluxDemo3';

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
        <Route path="m1" component={Message1}/>
        <Route path="m2" component={TodoComponent}/>
        <Route path="m3" component={RefluxDemo2}/>
        <Route path="m4" component={RefluxDemo3}/>
      </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('container'));
