/**
 * Created by cuiweigang on 15/11/26.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Shop from './ShopInfo/Shop';
import Header from './ShopInfo/Header';

var App = React.createClass({
  render () {
    return (
        <section className="mini-page">
          <Header/>
          {this.props.children}
        </section>
    )
  }
});

var router = (
    <Router>
      <Route path="/" component={App}/>
      <Route path="shopInfo" component={Shop}/>
    </Router>
);


ReactDOM.render(router, document.getElementById('container'));
