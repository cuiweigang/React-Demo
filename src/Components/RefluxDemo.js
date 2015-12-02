/**
 * Created by cuiweigang on 15/11/30.
 */
import React from 'react';
import Reflux from 'reflux';
import superAgent from 'superagent';

var addItem = Reflux.createAction({asyncResult: true});

var TodoStore = Reflux.createStore({
  items: [
    1, 2
  ],
  init: function() { //初始化监听事件
    this.listenTo(addItem, 'addItem');
  },
  addItem: function() { //执行后端事件
    this.items.unshift(1); //在数据开头增加元素
    this.trigger(); //执行onStatusChange
  }
});

var TodoComponent = React.createClass({
  mixins: [Reflux.listenTo(TodoStore, 'onStatusChange')], // 设置Reflux监听的事件
  getInitialState: function() {
    return {list: []};
  },
  onStatusChange: function() {
    this.setState({list: TodoStore.items});
  },
  render: function() {
    return (
      <div>
        {this.state.list.map(function(item, key) {
          return <p key={key}>{item}</p>
        })
}
        <input type="button" onClick={addItem} value="add"/>
      </div>
    )
  }
});

export default TodoComponent;
