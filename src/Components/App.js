/**
 * Created by cuiweigang on 15/11/26.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Shop from './ShopInfo/Shop';

import content from './Content';

let App = React.createClass({
  render () {
    console.log('react');
    return (
        <div>
          {this.props.children}
        </div>
    )
  }
});

let router = (
    <Router>
      <Route path="/" component={App}>
        <Route path="shopInfo" component={Shop}/>
      </Route>
    </Router>
);


ReactDOM.render(router, document.getElementById('container'));
