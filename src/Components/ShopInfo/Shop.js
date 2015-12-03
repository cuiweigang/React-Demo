import React from 'react';
import Info from './Info';
import Desc from './Desc';
import Items from './items';
import Reflux from 'reflux';
import ShopInfoAction from '../../Actions/ShopInfoAction';
import ShopInfoStore from '../../Stores/ShopInfoStore';
import Content from '../Content';
import Header from './Header';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ShopInfoStore.data
    };

    this.query = this.props.location.query;

    // 监听事件执行
    ShopInfoStore.listen(()=> {
      this.setState({data: ShopInfoStore.data})
    });
  }

  componentDidMount() {
    ShopInfoAction.shopInfo({shopId: this.query.shopId});
  }

  render() {
    return (
        <section className="mini-page">
          <Header title={'测试'}/>
          <section className="mini-container">
            <Info shopInfo={this.state.data.shopInfo}/>
            {this.state.data.shopInfo.desc ?
                <Desc desc={this.state.data.shopInfo.desc}/> : ''}
            <Items query={this.query}/>
          </section>
        </section>
    );
  }
}
export default Shop;
