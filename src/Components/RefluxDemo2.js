/**
 * Created by cuiweigang on 15/11/30.
 */
import React from 'react';
import Reflux from 'reflux';
import superAgent from 'superagent';

var TodoActions = Reflux.createActions(
    [
      'addItem',
      'delItem',
      'title'
    ]);

var addItem = Reflux.createAction();

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
    this.onTitle();
    this.trigger();
  },
  onDelItem: function () {
    this.data.items.shift(1);
    this.onTitle();
    this.trigger();
  },
  onTitle: function () {
    this.data.title = "数组列表({0})".replace('{0}', this.data.items.length);
    this.trigger();
  }
});

var Demo = React.createClass({
  mixins: [Reflux.listenTo(TodoStore, 'onStatusChange')],
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
          <input type="button" onClick={TodoActions.addItem} value='add'/>
          <input type="button" onClick={TodoActions.delItem} value='del'/>
          <input type="button" onClick={TodoActions.title} value='title'/>
        </div>
    );
  }
});

export default  Demo;