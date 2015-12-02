import React from 'react';
import ShopInfoAction from '../../Actions/ShopInfoAction';
import ShopInfoStore from '../../Stores/ShopInfoStore';

class Info extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {}

  render () {
    console.log('info-render', this.props.shopInfo);
    if (!this.props.shopInfo || !this.props.shopInfo.shopId) {
      console.log('shopInfo is null');
      return false;
    }

    let shopInfo = this.props.shopInfo;
    
    return (
      <div className="mini-store-block">
        <div className="store-Hbox">
          <p className="mHbj"></p>
          <figure className="storeInfo">
            <p className="storefig">
              <img src={shopInfo.headImg}/></p>
            <figcaption>
              <h3 className="h3">{shopInfo.name}</h3>
            </figcaption>
          </figure>

        </div>
        <ul className="store-call jcenter">
          <li className="store-clst1">
            <span>{shopInfo.store.name}</span>
          </li>
          <li className="store-clst2">
            <span>
              <a href={`tel:${shopInfo.tel}`} className="c17">{shopInfo.tel}</a>
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Info;
