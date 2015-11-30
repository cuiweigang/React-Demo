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
    return (
        <p>
          message zero-{this.props.params.id}
        </p>
    );
  }
});

export default  Message;
