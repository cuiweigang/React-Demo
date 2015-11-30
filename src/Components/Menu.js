/**
 * Created by cuiweigang on 15/11/30.
 */
import React from 'react';
import {Link} from 'react-router';

var Menu = React.createClass({
  render: function () {
    return (
        <div>
          <Link to="/">首页</Link>
          <Link to="/m/1">消息-1</Link>
          <Link to="/m1">消息-2</Link>
        </div>
    )
  }
});

export default  Menu;