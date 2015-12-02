import React from 'react';

let that = null;
class Item extends React.Component {

  render () {
    var item = this.props.item;

    return (
      <li className={item.inventory<=0?"soldOut":""}>
        <a href="">
          <figure className="proTo-lst">
            <p className="proTo-img">
              <strong></strong>
              <img src={item.mainImg.url_320}/>
            </p>
            <figcaption>
              <h4>{item.name}</h4>
              <p>
                <span className="proTo-price">￥{item.price}</span>
                <strong className="proTo-stock">库存{item.inventory}件</strong>
              </p>
            </figcaption>
          </figure>
        </a>
      </li>
    )
  }
}

export default Item;
