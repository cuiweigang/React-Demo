import Reflux from 'reflux';
import ShopInfoAction from '../Actions/ShopInfoAction';
import superagent from 'superagent';

var ShopInfoStore = Reflux.createStore({
  data: {
    shopInfo: {},
    product: {
      page: 0,
      pageCount: 0,
      isNext: true,
      items: []
    }
  },
  init: function () {
    this.listenToMany(ShopInfoAction);
  },
  onShopInfo: function (data) {
    superagent.post('http://api.imiaoke.cn/service/?path=api/v1/shop/info')
        .send(data)
        .type('json')
        .end(function (err, res) {
          this.data.shopInfo = res.body.data;
          this.trigger();
        }.bind(this));
  },
  onItems: function (shopId) {

    superagent.post('http://api.imiaoke.cn/service/?path=api/v1/shop/product/list')
        .send({index: this.data.product.page + 1, size: 1, shopId: shopId})
        .type('json')
        .end(function (err, res) {
          let data = res.body.data;
          this.data.product.page = data.page;
          this.data.product.pageCount = data.pageCount;
          this.data.product.isNext = data.page >= data.pageCount;
          this.data.product.items = this.data.product.items.concat(data.items);

          this.trigger();
        }.bind(this));
  }
});

export default ShopInfoStore;
