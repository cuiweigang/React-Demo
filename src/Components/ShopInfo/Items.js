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
    this.autoLoading();
    ShopInfoAction.items(this.query.shopId);
  }

  /**
   * 自动加载下一页
   */
  autoLoading() {
    window.onscroll = ()=> {
      var scrollTop = parseInt(document.body.scrollTop); //被卷上去的高度
      var scrollHeight = parseInt(document.body.scrollHeight); //整个文档的高度
      var availHeight = parseInt(window.screen.availHeight); //屏幕工作区的高度

      //当距离底部小于一屏高度时，自动加载下一页
      if (scrollHeight - (scrollTop + availHeight) < availHeight) {
        console.log('加载下一页');
        ShopInfoAction.items(this.query.shopId);
      }
    };
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

export
default
Items;
