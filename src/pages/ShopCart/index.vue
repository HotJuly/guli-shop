<template>
  <div id="shopcart">
    <div class="cart py-container">
      <!--All goods-->
      <div class="allgoods">
        <h4>
          全部商品
          <span></span>
        </h4>
        <div class="cart-main">
          <div class="yui3-g cart-th">
            <div class="yui3-u-1-4">
              <input class="chooseAll" type="checkbox" name="" id="" value="" />
              全部
            </div>
            <div class="yui3-u-1-4">商品</div>
            <div class="yui3-u-1-8">单价（元）</div>
            <div class="yui3-u-1-8">数量</div>
            <div class="yui3-u-1-8">小计（元）</div>
            <div class="yui3-u-1-8">操作</div>
          </div>
          <div class="cart-item-list" id="app">
            <div class="cart-body">
              <div
                class="cart-list"
                v-for="item in shopCartList"
                :key="item.id"
              >
                <ul class="goods-list yui3-g">
                  <li class="yui3-u-1-24">
                    <input
                      type="checkbox"
                      name="chk_list"
                      id=""
                      @change="checkCart(item)"
                      v-model="item.isChecked"
                    />
                  </li>
                  <li class="yui3-u-6-24">
                    <div class="good-item">
                      <div class="item-img">
                        <img :src="item.imgUrl" />
                      </div>
                      <div class="item-msg">{{ item.skuName }}</div>
                    </div>
                  </li>
                  <li class="yui3-u-5-24">
                    <div class="item-txt">{{ item.property }}</div>
                  </li>
                  <li class="yui3-u-1-8">
                    <span class="price">{{ item.skuPrice }}</span>
                  </li>
                  <li class="yui3-u-1-8">
                    <a
                      href="javascript:void(0)"
                      @click="change('dec', item)"
                      class="increment mins"
                      >-</a
                    >
                    <input
                      autocomplete="off"
                      type="text"
                      :value="item.skuNum"
                      @change="
                        event => {
                          change('change', item, event.target.value);
                        }
                      "
                      class="itxt"
                    />
                    <a
                      href="javascript:void(0)"
                      @click="change('inc', item)"
                      class="increment plus"
                      >+</a
                    >
                  </li>
                  <li class="yui3-u-1-8">
                    <span class="sum">{{ item.skuPrice * item.skuNum }}</span>
                  </li>
                  <li class="yui3-u-1-8">
                    <a href="javascript:;" @click="deleteCart(item.skuId)"
                      >删除</a
                    >
                    <br />
                    <a href="#none">移到收藏</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-tool">
          <div class="select-all" @click="checkAllCart">
            <input
              class="chooseAll"
              type="checkbox"
              name=""
              id=""
              v-model="isAllChecked"
            />
            <span>全选</span>
          </div>
          <div class="option">
            <a href="javascript:;" @click="deleteAllSelected">删除选中的商品</a>
            <a href="#none">移到我的关注</a>
            <a href="#none">清除下柜商品</a>
          </div>
          <div class="money-box">
            <div class="chosed">
              已选择 <span>{{ selectedTotal }}</span
              >件商品
            </div>
            <div class="sumprice">
              <span>
                <em>总价（不含运费） ：</em>
                <i class="summoney">¥{{ total }}</i>
              </span>
              <span>
                <em>已节省：</em>
                <i>-¥20.00</i>
              </span>
            </div>
            <div class="sumbtn">
              <router-link class="sum-btn" to="/trade">结算</router-link>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="liked">
          <ul class="sui-nav nav-tabs">
            <li class="active">
              <a href="#index" data-toggle="tab">猜你喜欢</a>
            </li>
            <li>
              <a href="#profile" data-toggle="tab">特惠换购</a>
            </li>
          </ul>
          <div class="clearfix"></div>
          <div class="tab-content">
            <div id="index" class="tab-pane active">
              <div
                id="myCarousel"
                data-ride="carousel"
                data-interval="4000"
                class="sui-carousel slide"
              >
                <div class="carousel-inner">
                  <div class="active item">
                    <ul>
                      <li>
                        <img src="./img/like1.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a
                            href="#"
                            class="sui-btn btn-bordered btn-xlarge btn-default"
                          >
                            <i class="car"></i>
                            <span class="cartxt">加入购物车</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <img src="./img/like2.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a
                            href="#"
                            class="sui-btn btn-bordered btn-xlarge btn-default"
                          >
                            <i class="car"></i>
                            <span class="cartxt">加入购物车</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <img src="./img/like3.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a
                            href="#"
                            class="sui-btn btn-bordered btn-xlarge btn-default"
                          >
                            <i class="car"></i>
                            <span class="cartxt">加入购物车</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <img src="./img/like4.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a
                            href="#"
                            class="sui-btn btn-bordered btn-xlarge btn-default"
                          >
                            <i class="car"></i>
                            <span class="cartxt">加入购物车</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="item">
                    <ul>
                      <li>
                        <img src="./img/like1.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a
                            href="#"
                            class="sui-btn btn-bordered btn-xlarge btn-default"
                          >
                            <i class="car"></i>
                            <span class="cartxt">加入购物车</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <img src="./img/like2.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a
                            href="#"
                            class="sui-btn btn-bordered btn-xlarge btn-default"
                          >
                            <i class="car"></i>
                            <span class="cartxt">加入购物车</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <img src="./img/like3.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a
                            href="#"
                            class="sui-btn btn-bordered btn-xlarge btn-default"
                          >
                            <i class="car"></i>
                            <span class="cartxt">加入购物车</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <img src="./img/like4.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a
                            href="#"
                            class="sui-btn btn-bordered btn-xlarge btn-default"
                          >
                            <i class="car"></i>
                            <span class="cartxt">加入购物车</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="#myCarousel"
                  data-slide="prev"
                  class="carousel-control left"
                  >‹</a
                >
                <a
                  href="#myCarousel"
                  data-slide="next"
                  class="carousel-control right"
                  >›</a
                >
              </div>
            </div>
            <div id="profile" class="tab-pane">
              <p>特惠选购</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'ShopCart',
  data() {
    return {
      isAllChecked: false
    };
  },
  computed: {
    ...mapState({
      shopCartList: state => state.shopCart.shopCartList
    }),
    ...mapGetters(['total', 'selectedTotal', 'selectedArr'])
  },
  methods: {
    async checkCart(good) {
      const { skuId, isChecked } = good;
      if (this.selectedArr.length === this.shopCartList.length) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
      await this.$store.dispatch('checkCart', { skuId, isChecked: isChecked });
      this.$store.dispatch('getShopCartList');
    },
    async checkAllCart() {
      const isAllChecked = this.isAllChecked;
      let promiseArr = [];
      this.shopCartList.forEach(({ skuId }) => {
        promiseArr.push(
          this.$store.dispatch('checkCart', { skuId, isChecked: !isAllChecked })
        );
      });
      await Promise.all(promiseArr);
      this.isAllChecked = !isAllChecked;
      this.$store.dispatch('getShopCartList');
    },
    async deleteCart(skuId) {
      await this.$store.dispatch('deleteCart', skuId);
      this.$store.dispatch('getShopCartList');
    },
    async deleteAllSelected() {
      let promiseArr = [];
      this.selectedArr.forEach(({ skuId }) => {
        promiseArr.push(this.$store.dispatch('deleteCart', skuId));
      });
      await Promise.all(promiseArr);
      await this.$store.dispatch('getShopCartList');
      if (this.selectedArr === 0) this.isAllChecked = false;
    },
    async change(select, good, value) {
      let { skuId, skuNum } = good;
      if (select === 'dec' && good.skuNum > 1) {
        skuNum = '-1';
      }
      if (select === 'inc') {
        skuNum = '1';
      }
      if (select === 'change') {
        skuNum = value - skuNum;
      }
      await this.$store.dispatch('addToCart', { skuId, skuNum });
      this.$store.dispatch('getShopCartList');
    }
  },
  mounted() {
    this.$store.dispatch('getShopCartList');
  }
};
</script>

<style lang="stylus" scoped>
.top
  background-color #f1f1f1
a
  color #666
  text-decoration none
  &.increment
    text-decoration none
    width 6px
    text-align center
    padding 8px
    -moz-padding-top 10px
    -moz-padding-bottom 13px
    -webkit-padding-top 10px
    -webkit-padding-bottom 13px
  &.sum-btn
    display block
    position relative
    width 96px
    height 52px
    line-height 52px
    color #fff
    text-align center
    font-size 18px
    font-family "Microsoft YaHei"
    background #e1251b
    overflow hidden
.sumbtn
  float right
  a
    &:hover
      color #fff
.logoArea
  overflow hidden
  position relative
.logo
  background url(./img/icons.png) no-repeat
  background-position -370px 3px
  width 177px
  height 75px
  .title
    font 19px "微软雅黑"
    position absolute
    top 24px
    left 190px
.search
  position absolute
  right 0
  top 22px
  font-size 16px
  .btn-danger
    font-size 16px
.cart-th
  background #f5f5f5
  border 1px solid #ddd
  padding 10px
.cart-shop
  border-bottom 2px solid #ddd
  padding 10px 9px 5px
  .self
    color #fff
    background #e1251b
    padding 2px
.cart-tool
  overflow hidden
  border 1px solid #ddd
.cart-body,
.deled
  margin 15px 0
.cart-body
  border 1px solid #ddd
.cart-list
  ul
    padding 10px
    border-bottom 1px solid #ddd
    li
      display inline-block
      *display inline
      *zoom 1
.price,
.sum,
.shopname,
.itxt
  font-family "微软雅黑"
.shopname
  font-size 14px
.self
  font-size 12px
.price,
.sum
  font-size 16px
.good-item
  width 260px
.item-img
  float left
  width 100px
  height 90px
.item-txt
  width 200px
.goods-list
  input
    border 1px solid #ddd
.mins
  border 1px solid #ddd
  border-right 0
  float left
.plus
  border 1px solid #ddd
  border-left 0
  float left
.itxt
  width 40px
  height 32px
  float left
  text-align center
  font-size 14px
  zoom 1
.select-all,
.option
  padding 10px
  overflow hidden
  float left
.option
  a
    float left
    padding 0 10px
.money-box
  float right
.chosed,
.sumprice
  float left
  padding 0 10px
.chosed
  line-height 26px
.sumprice
  width 200px
  line-height 22px
  em
    text-align right
.summoney
  color #c81623
  font 16px "微软雅黑"
.del
  background #fffdee
  .goods-list
    display block
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    margin-top 15px
.sui-nav
  &.nav-tabs
    background #f1f1f1
    padding-left 0
    border 1px solid #ddd
    overflow hidden
    & > li
      & > a
        border 0
        padding 10px 20px
        font-family "微软雅黑"
    & > .active
      & > a
        background-color #e1251b
        color #fff
        border-radius 0
        border 0
.item
  ul
    width 1000px
    margin 0 auto
    li
      list-style-type none
      display inline-block
      margin-right -7px
      border 1px dashed #ddd
      padding 20px
      *display inline
      *zoom 1
      position relative
      zoom 1
.carousel-control
  border-radius 0
  width 22px
  border 0
  background #ddd
.intro,
.money,
.incar
  line-height 20px
.money,
.incar
  text-align center
.money
  font 14px "微软雅黑"
  color #c81623
.incar
  margin 10px 0
.car
  width 20px
  height 20px
  position absolute
  background url(./img/icons.png) no-repeat
  background-position -422px -135px
.cartxt
  padding-left 23px
</style>
