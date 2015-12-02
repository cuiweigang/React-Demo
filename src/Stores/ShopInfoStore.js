import Reflux from 'reflux';
import ShopInfoAction from '../Actions/ShopInfoAction';
import superagent from 'superagent';

var ShopInfoStore = Reflux.createStore({
  data: {
    shopInfo: {},
    product:{
      page:0,
      pageCount:0,
      items:[]
    }
  },
  init: function() {
    this.listenToMany(ShopInfoAction);
  },
  onShopInfo: function(data) {
    let that=this;
    superagent.post('http://api.imiaoke.cn/service/?path=api/v1/shop/info')
    .send(data)
    .type('json')
    .end(function(err,res) {
      console.log(res.body.data);
      that.data.shopInfo=res.body.data;
      that.trigger();
    });
  },
  onItems: function(shopId) {
    let that=this;
    superagent.post('http://api.imiaoke.cn/service/?path=api/v1/shop/product/list')
    .send({index: that.data.product.page+1, size: 12, shopId: shopId})
    .type('json')
    .end(function(err,res) {
      let data=res.body.data;
      console.log(data);
      that.data.product.page=data.page;
      that.data.product.pageCount=data.pageCount;
     that.data.product.items= that.data.product.items.concat(data.items);
      console.log('product',that.data.product);

      that.trigger();
    });
  }
});

export default ShopInfoStore;
