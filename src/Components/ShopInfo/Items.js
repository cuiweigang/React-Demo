import React from 'react';
import Item from './Item';
import ShopInfoAction from '../../Actions/ShopInfoAction';
import ShopInfoStore from '../../Stores/ShopInfoStore';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ShopInfoStore.data
    };
    this.query = this.props.query;

    // 监听事件执行
    ShopInfoStore.listen(()=> {
      this.setState({data: ShopInfoStore.data})
    });
  }

  componentDidMount() {
    ShopInfoAction.items(this.query.shopId);
  }

  render() {

    let products = this.state.data.product;
    let items = [];
    products.items.map(function (item, key) {
      items.push(<Item key={key} item={item}/>);
    });

    let bottom = (
        <p className="foot-load">
          <a href="javascript:void(0)" className="foot">已经到底部了</a>
        </p>
    );

    let notProducts = (
        <p className="foot-load">
          <a href="javascript:void(0)" className="foot">还没有商品上架</a>
        </p>
    );

    let nextPage = ()=> {
      ShopInfoAction.items(this.query.shopId);
    };

    // 加载更多
    let more = (
        <p className="foot-load">
          <a href="javascript:void(0);" onClick={nextPage} className="more">点击加载更多</a>
        </p>
    );

    let showIcon = null;
    if (products.isNext && items.length <= 0) {
      showIcon = notProducts;
    }
    else if (products.isNext) {
      showIcon = bottom;
    }

    return (
        <div className="mini-store-block">
          <ul className="store-pro-lst">
            {items}
          </ul>
          {!products.isNext ? more : ''}
          {showIcon}
        </div>
    )
  }
}

export default Items;
