/**
 * Created by cuiweigang on 15/11/26.
 */
import React from 'react';

var Message = React.createClass({
  render: function () {
    return (
        <p>
          React has been successfully running for<span className='size'>{this.props.seconds}</span>seconds.
        </p>
    );
  }
});

export default  Message;
// module.exports = Message;