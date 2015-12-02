import React from 'react';
import Info from './Info';
import Desc from './Desc';
import Items from './items';
import Reflux from 'reflux';
import ShopInfoAction from '../../Actions/ShopInfoAction';
import ShopInfoStore from '../../Stores/ShopInfoStore';
let that = null;
class Shop extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ShopInfoStore.data
    };
    that = this;
    this.query = this.props.location.query;

    this.listen = ShopInfoStore.listen(this.onStatusChange);
    //Reflux.listenTo(ShopInfoStore, 'onStatusChange');
  }

  componentDidMount () {
    console.log('shop=>componentDidMount');
    ShopInfoAction.shopInfo({shopId: this.query.shopId});
  }
  componentWillUnmount () {
    console.log('componentWillUnmount');
    this.listen();
  }

  onStatusChange () {
    that.setState({data: ShopInfoStore.data});
  }

  render () {
    console.log('shop->render', this.state);
    return (
      <section className="mini-container">
        <Info shopInfo={this.state.data.shopInfo}/>
        {this.state.data.shopInfo.desc
          ? <Desc desc={this.state.data.shopInfo.desc}/>
          : ''}
        <Items query={this.query}/>
      </section>
    )
  }
}
export default Shop;
