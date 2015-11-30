/**
 * Created by cuiweigang on 15/11/26.
 */
import React from 'react';

var Message = React.createClass({
  render: function () {
    return (
        <p>
          message zero-{this.props.params.id}
        </p>
    );
  }
});

export default  Message;
