/**
 * Created by cuiweigang on 15/11/26.
 */
'use strict';
import React from 'react';
import '../Assets/css/App.css';
import ReactDOM from 'react-dom';
var Message = require("./Message");

var App = React.createClass({
  render: function () {
    var elapsed = Math.round(this.props.elapsed / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    return <div><Message seconds={seconds}/></div>;
  }
});

var start = new Date().getTime();
setInterval(function () {
  ReactDOM.render(
      <App elapsed={new Date().getTime() - start}/>,
      document.getElementById('container')
  );
}, 1000);