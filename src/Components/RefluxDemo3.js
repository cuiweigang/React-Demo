/**
 * Created by cuiweigang on 15/11/30.
 */
import React from 'react';
import superAgent from 'superagent';
import Reflux from 'reflux';

var TodoActions = Reflux.createActions(
    [
      'addItem',
      'delItem',
      'title'
    ]);

var TodoStore = Reflux.createStore({
  data: {
    title: '数组列表',
    items: [1, 2]
  },
  init: function () {
    this.listenToMany(TodoActions);
  },
  onAddItem: function () {
    this.data.items.push(1);
    this.trigger(this.data);
  },
  onDelItem: function () {
    this.data.items.shift(1);
    this.trigger(this.data);
  },
  onTitle: function () {
    this.data.title = "数组列表({0})".replace('{0}', this.data.items.length);
    this.trigger(this.data);
  }
});

var RefluxDemo3 = React.createClass({
  mixins: [Reflux.connect(TodoStore, 'data')], //自动绑定内容
  getInitialState: function () {
    return {data: TodoStore.data};
  },
  onStatusChange: function () {
    this.setState({data: TodoStore.data});
  },
  render: function () {
    return (
        <div>
          <p>{this.state.data.title}</p>
          {
            this.state.data.items.map(function (item, key) {
              return <p key={key}>{item}</p>
            })
          }
          <input type="button" onClickCapture={TodoActions.addItem} value='add'/>
          <input type="button" onClickCapture={TodoActions.delItem} value='del'/>
          <input type="button" onClickCapture={TodoActions.title} value='title'/>
        </div>
    );
  }
});

export default  RefluxDemo3;