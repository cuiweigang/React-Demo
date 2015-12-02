/**
 * Created by cuiweigang on 15/11/26.
 */
import React from 'react';
import Reflux from 'reflux';
import superAgent from 'superagent';

var getAll = Reflux.createAction({asyncResult: true});

var TodoStore = Reflux.createStore({
  init: function () {
    this.listenTo(getAll, 'getAll');
  },
  getAll: function (model, cb) {
    superAgent
        .post('http://api.imiaoke.cn/service/?path=api/v1/product/detail')
        .send({pid: 457044})
        .type('json')
        .end(function (err, res) {
          return cb(res.body);
        });
  }
});

//getAll({}, function (body) {
//  console.log('结果', body);
//});

var Message = React.createClass({
  render: function () {
    console.log(this.props);
    console.log(this.props.location.query.id);
    return (
        <p>
          message zero-{this.props.params.id}
          <input type="button" onClick={this.props.history.goBack} value="goBack"/>
        </p>
    );
  }
});

export default Message;
