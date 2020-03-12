<template>
    <div id="SendMassage">
        <div class="step-cont">
            <ul class="send-detail">
                <li>
                    <div class="sendType">
                        <span>配送方式：</span>
                        <ul>
                            <li>
                                <div class="con express">天天快递</div>
                                <div class="con delivery">配送时间：预计8月10日（周三）09:00-15:00送达</div>
                            </li>
                        </ul>
                    </div>
                    <div class="sendGoods">
                        <span>商品清单：</span>
                        <ul class="yui3-g" v-for="goodDetail in detailArrayList" :key="goodDetail.skuId">
                            <li class="yui3-u-1-6">
                                <span><img :src="goodDetail.imgUrl"/></span>
                            </li>
                            <li class="yui3-u-7-12">
                                <div class="desc">Apple iPhone 6s (A1700) 64G 玫瑰金色 移动联通电信4G手机硅胶透明防摔软壳 本色系列</div>
                                <div class="seven">7天无理由退货</div>
                            </li>
                            <li class="yui3-u-1-12">
                                <div class="price">￥{{goodDetail.orderPrice}}</div>
                            </li>
                            <li class="yui3-u-1-12">
                                <div class="num">X{{goodDetail.skuNum}}</div>
                            </li>
                            <li class="yui3-u-1-12">
                                <div class="exit">有货</div>
                            </li>


                        </ul>
                    </div>
                    <div class="buyMessage">
                        <span>买家留言：</span>
                        <textarea placeholder="建议留言前先与商家沟通确认" class="remarks-cont"></textarea>
                    </div>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"SendMessage",
    props:{
        detailArrayList:Array.Required
    }
}
</script>

<style lang="stylus" scoped>
.step-cont 
  margin 0 10px 0 20px
  ul
    &.send-detail 
        li 
            margin-top 10px
            line-height 30px
    li 
      list-style-type none
      overflow hidden
  .con 
    float left
    padding 0
    margin 5px 0
  li 
    &.selected 
      border 1px solid #e1251b
      span 
        width 13px
        height 13px
        display none
        position absolute
        right 0
        _right -1px
        bottom 0
        _bottom -1px
        overflow hidden
        background url(./img/choosed.png) no-repeat
        display block
.sendType 
  background #f4f4f4
  margin-bottom 2px
  .express 
    border 1px solid #ddd
    width 120px
    text-align center
    margin-right 10px
.sendType,
.sendGoods 
  padding 15px
.sendGoods 
  background #feedef
.buyMessage 
  span 
    display block
  .remarks-cont 
    width 99%
    border-color #e4e2e2
    line-height 1.8
.seven 
  color #c81623
  margin-top 20px
.price 
  font 14px "微软雅黑"
  font-weight 700
  color #e12228
</style>