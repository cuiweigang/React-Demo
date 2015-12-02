import React from 'react';
import Item from './Item';
import ShopInfoAction from '../../Actions/ShopInfoAction';
import ShopInfoStore from '../../Stores/ShopInfoStore';

let that = null;
class Items extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ShopInfoStore.data
    };
    this.query=this.props.query;
    that = this;

    ShopInfoStore.listen(this.onStatusChange);
  }

  componentDidMount () {
    ShopInfoAction.items(this.query.shopId);
  }

  onStatusChange () {
    that.setState({data: ShopInfoStore.data});
  }

  render () {
    console.log('items=>render', this.state.data);
    let products = this.state.data.product;
    let items=[];
    products.items.map(function(item, key) {
        items.push(<Item key={key} item={item}/>)
    });

    var bottom=(
      <p className="foot-load">
      <a href="" className="foot">已经到底部了</a>
    </p>
  );

    return (
      <div className="mini-store-block">
        <ul className="store-pro-lst">
          {items}
        </ul>

        {items.length<=0?bottom:''}

      </div>

    )
  }
}

export default Items;
