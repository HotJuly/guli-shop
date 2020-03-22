<template>
  <div id="addCartSuccess">
    <div class="success-cart">
      <div class="py-container ">
        <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入购物车！</h3>
        <div class="goods">
          <div class="left-good">
            <div class="left-pic"><img :src="good.skuDefaultImg" /></div>
            <div class="right-info">
              <p class="title">{{ good.skuName }}</p>
              <p class="attr">
                颜色：WFZ5099IH/5L钛金釜内胆 数量：{{ skuNum }}
              </p>
            </div>
          </div>
          <div class="right-gocart">
            <a
              href="javascript:;"
              class="sui-btn btn-xlarge"
              @click="
                $router.replace({ path: '/detail', query: { skuId, skuNum } })
              "
              >查看商品详情</a
            >
            <router-link to="/shopcart">去购物车结算 > </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCartSuccess',
  data() {
    return {
      good: {}
    };
  },
  props: ['skuId', 'skuNum'],
  mounted() {
    let good = window.sessionStorage.getItem('addGood')
    this.good = JSON.parse(good)
  }
}
</script>

<style lang="stylus" scoped>
a
  color #666
.success-cart
  background-color #f4f4f4
  h3
    font-weight 400
    font-size 16px
    color #6aaf04
    padding-top 10px
    padding-bottom 10px
    margin 0
  .icon-pc-right
    background-color #fff
    border 2px solid #6aaf04
    padding 3px
    margin-right 8px
    border-radius 15px
  .goods
    overflow hidden
    padding 10px 0
    .left-good
      float left
    .right-gocart
      float right
.other-item
  &.py-container
    margin-bottom 15px
.left-good
  .left-pic
    border 1px solid #dfdfdf
    width 60px
    float left
  .right-info
    color #444
    float left
    margin-left 10px
    p
      margin-bottom 0
      margin-top 0
.right-info
  .title
    width 100%
    line-height 28px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    font-size 14px
  .attr
    color #aaa
.right-gocart
  a
    padding 7px 36px
    font-size 15px
  .btn-danger
    background-color #e1251b
    &:hover
      background-color #e1251b
.btn-danger
  border 1px solid #e1251b
.banner-goods
  padding 10px
  ul
    li
      margin-bottom 20px
  .banner-item
    font-family "微软雅黑"
    .p-img
      float left
      border 1px solid #eaeaea
      margin-right 10px
    .p-name
      overflow hidden
      padding-right 35px
    .p-price
      line-height 26px
      font-size 14px
      color #c81623
    .p-btn
      margin-top 12px
.banner-item
  .p-name
    a
      color #555
      text-decoration none
      &:hover
        color #c81623
.sui-carousel
  .carousel-indicators
    color #444
    width 100px
    height 20px
    position relative
    margin 0 auto
    li
      background-color #fc9672
      width 25px
      cursor pointer
    .active
      background-color #e1251b
ul
  li
    .buy-list
      border 1px solid #eaeaea
      width 90%
.buy-list
  text-align center
  overflow hidden
  p
    margin-bottom 0
    margin-top 0
    color #c81623
  .operate
    width 80%
    margin 0 auto
    color #555
    overflow hidden
    line-height 32px
    font-size 15px
    i
      background-color #eaeaea
      border-radius 10px
      padding 4px
    a
      color #555
      text-decoration none
      &:hover
        color #c81623
    .point
      float left
    .zan
      float right
.buy-goods
  .buy-list
    .imgs
      overflow hidden
      width 80%
      margin 10px auto
      .ab-cover
        width 155px
        height 155px
        float left
        border 1px solid #eaeaea
      .ab-list
        border 1px solid #eaeaea
        width 52px
        float left
.imgs
  .ab-list
    ul
      li
        list-style none
        width 52px
        height 52px
</style>
