/**
 * Created by cuiweigang on 15/11/30.
 */
import React from 'react';
import {Link} from 'react-router';

var Menu = React.createClass({
  render: function () {
    var id = 2;
    return (
        <div>
          <Link to="/">首页</Link>
          <Link to={`/m/${id}`} query={{id:1}}>消息-1</Link>
          <Link to="/m1">消息-2</Link>
          <Link to="/m2">Reflux-Action</Link>
          <Link to="/m3">Reflux-Actions</Link>
          <Link to="/m4">Reflux-Content</Link>
        </div>
    )
  }
});

export default  Menu;