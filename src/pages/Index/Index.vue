<template>
    <div id="index">
        <!-- 商品分类导航 -->
        <TypeNav/>
        <!--列表-->
        <div class="py-container">
            <div class="yui3-g SortList">
                <div class="yui3-u Center banerArea">
                    <!--banner轮播-->
                    <div id="myCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel slide">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="active item">
                                <a href="http://baidu2.wypxj.com/">
                                    <img src="./img/banner3.jpg" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="http://baidu2.wypxj.com/">
                                    <img src="./img/banner2.jpg" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="http://baidu2.wypxj.com/">
                                    <img src="./img/banner3.jpg" />
                                </a>

                            </div>
                        </div>
                        <a href="#myCarousel" data-slide="prev" class="carousel-control left">‹</a>
                        <a href="#myCarousel" data-slide="next" class="carousel-control right">›</a>
                    </div>
                </div>
                <div class="yui3-u Right">
                    <div class="news">
                        <h4>
                            <em class="fl">尚品汇快报</em>
                            <span class="fr tip">更多 ></span>
                        </h4>
                        <div class="clearix"></div>
                        <ul class="news-list unstyled">
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                        </ul>
                    </div>
                    <ul class="yui3-g Lifeservice">
                        <li class="yui3-u-1-4 life-item tab-item">
                            <i class="list-item list-item-1"></i>
                            <span class="service-intro">话费</span>
                        </li>
                        <li class="yui3-u-1-4 life-item tab-item">
                            <i class="list-item list-item-2"></i>
                            <span class="service-intro">机票</span>
                        </li>
                        <li class="yui3-u-1-4 life-item tab-item">
                            <i class="list-item list-item-3"></i>
                            <span class="service-intro">电影票</span>
                        </li>
                        <li class="yui3-u-1-4 life-item tab-item">
                            <i class="list-item list-item-4"></i>
                            <span class="service-intro">游戏</span>
                        </li>
                        <li class="yui3-u-1-4 life-item notab-item">
                            <i class="list-item list-item-5"></i>
                            <span class="service-intro">彩票</span>
                        </li>
                        <li class="yui3-u-1-4 life-item notab-item">
                            <i class="list-item list-item-6"></i>
                            <span class="service-intro">加油站</span>
                        </li>
                        <li class="yui3-u-1-4 life-item notab-item">
                            <i class="list-item list-item-7"></i>
                            <span class="service-intro">酒店</span>
                        </li>
                        <li class="yui3-u-1-4 life-item notab-item">
                            <i class="list-item list-item-8"></i>
                            <span class="service-intro">火车票</span>
                        </li>
                        <li class="yui3-u-1-4 life-item  notab-item">
                            <i class="list-item list-item-9"></i>
                            <span class="service-intro">众筹</span>
                        </li>
                        <li class="yui3-u-1-4 life-item notab-item">
                            <i class="list-item list-item-10"></i>
                            <span class="service-intro">理财</span>
                        </li>
                        <li class="yui3-u-1-4 life-item notab-item">
                            <i class="list-item list-item-11"></i>
                            <span class="service-intro">礼品卡</span>
                        </li>
                        <li class="yui3-u-1-4 life-item notab-item">
                            <i class="list-item list-item-12"></i>
                            <span class="service-intro">白条</span>
                        </li>
                    </ul>
                    <div class="life-item-content">
                        <div class="life-detail">
                            <i class="close">关闭</i>
                            <p>话费充值</p>
                            <form action="" class="sui-form form-horizontal">
                                号码：
                                <input type="text" id="inputphoneNumber" placeholder="输入你的号码" />
                            </form>
                            <button class="sui-btn btn-danger">快速充值</button>
                        </div>
                        <div class="life-detail">
                            <i class="close">关闭</i> 机票
                        </div>
                        <div class="life-detail">
                            <i class="close">关闭</i> 电影票
                        </div>
                        <div class="life-detail">
                            <i class="close">关闭</i> 游戏
                        </div>
                    </div>
                    <div class="ads">
                        <img src="./img/ad1.png" />
                    </div>
                </div>
            </div>
        </div>
        <!--推荐-->
        <div class="show">
            <div class="py-container">
                <ul class="yui3-g Recommend">
                    <li class="yui3-u-1-6  clock">
                        <div class="time">
                            <img src="./img/clock.png" />
                            <h3>今日推荐</h3>
                        </div>
                    </li>
                    <li class="yui3-u-5-24">
                        <a href="list.html" target="_blank">
                            <img src="./img/today01.png" />
                        </a>
                    </li>
                    <li class="yui3-u-5-24">
                        <img src="./img/today02.png" />
                    </li>
                    <li class="yui3-u-5-24">
                        <img src="./img/today03.png" />
                    </li>
                    <li class="yui3-u-5-24">
                        <img src="./img/today04.png" />
                    </li>
                </ul>
            </div>
        </div>
        <!-- 商品排行 -->
        <TabBox/>
        <!-- 猜你喜欢 -->
        <RecommendLike/>
        <!--楼层-->
        <IndexRecommend/>
        <IndexRecommend/>
        <!--商标-->
        <div class="brand">
            <div class="py-container">
                <ul class="Brand-list blockgary">
                    <li class="Brand-item">
                        <img src="./img/brand_21.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_03.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_05.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_07.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_09.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_11.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_13.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_15.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_17.png" />
                    </li>
                    <li class="Brand-item">
                        <img src="./img/brand_19.png" />
                    </li>
                </ul>
            </div>
        </div>
        <ShopCartNav/>
        <!--页面底部END-->
        <!-- 楼层位置 -->
        <!-- <div id="floor-index" class="floor-index">
            <ul>
                <li>
                    <a class="num" href="javascript:;" style="display: none;">1F</a>
                    <a class="word" href="javascript;;" style="display: block;">家用电器</a>
                </li>
                <li>
                    <a class="num" href="javascript:;" style="display: none;">2F</a>
                    <a class="word" href="javascript;;" style="display: block;">手机通讯</a>
                </li>
                <li>
                    <a class="num" href="javascript:;" style="display: none;">3F</a>
                    <a class="word" href="javascript;;" style="display: block;">电脑办公</a>
                </li>
                <li>
                    <a class="num" href="javascript:;" style="display: none;">4F</a>
                    <a class="word" href="javascript;;" style="display: block;">家居家具</a>
                </li>
                <li>
                    <a class="num" href="javascript:;" style="display: none;">5F</a>
                    <a class="word" href="javascript;;" style="display: block;">运动户外</a>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
import ShopCartNav from './ShopCartNav/ShopCartNav'
import IndexRecommend from './IndexRecommend/IndexRecommend'
import RecommendLike from './RecommendLike/RecommendLike'
import TabBox from './TabBox/TabBox'
import TypeNav from '../../components/TypeNav/TypeNav'
export default {
    name:"Index",
    components:{
        ShopCartNav,
        IndexRecommend,
        RecommendLike,
        TabBox,
        TypeNav
    }
}
</script>

<style lang="stylus" scoped>
.row-405 
  width 404px
.row-225 
  width 225px
.row-165 
  width 165px
.row-330 
  width 330px
.row-220 
  width 220px
.row-218 
  width 218px
  &.split 
    border 1px solid #e4e4e4
    width 218px
    border-bottom 0
    border-top 0
a 
  color #666
  &.carousel-control 
    *font-size 30px
    *padding-left 3px
img 
  -webkit-backface-visibility hidden
  -webkit-transition opacity 0.3s ease-out
  -moz-transition opacity 0.3s ease-out
  -o-transition opacity 0.3s ease-out
  transition opacity 0.3s ease-out
  &:hover 
    opacity 0.8
.typeNav 
  border-bottom 2px solid #e1251b
.Recommend 
  height 165px
  background-color #eaeaea
  margin 10px 0
.Interest 
  height 405px
  border 1px solid #ededed
  margin -2px
  position relative
  .Interest-conver-split 
    overflow hidden
    border-right 1px solid #e4e4e4
    h5 
      text-align center
      border-bottom 1px dotted #e4e4e4
      padding 5px
      font-weight 700
      color #000
  .x-line 
    height 1px
    background #e4e4e4
    display block
    top 250px
    left 405px
    position absolute
    width 630px
    z-index 9999
.Floor-1 
  height 360px
em 
  font-style normal
.banerArea 
  .sui-carousel 
    padding 5px
    margin-bottom 0
.news 
  border 1px solid #e4e4e4
  margin-top 5px
  position relative
  z-index 3
  h4 
    border-bottom 1px solid #e4e4e4
    padding 5px 10px
    margin 5px 5px 0
    line-height 22px
    overflow hidden
  ul 
    &.news-list 
      padding 5px 15px
    li 
      line-height 26px
.Lifeservice 
  border-right 1px solid #e4e4e4
  overflow hidden
  position relative
  z-index 2
  overflow hidden
  .life-item 
    .list-item 
      background-image url(./img/icons.png)
      width 61px
      height 40px
      display block
      position relative
      *zoom 1
      _position relative
.SortList 
  margin-left 210px
  ul 
    &.Lifeservice 
      & > li 
        border-left 1px solid #e4e4e4
        border-bottom 1px solid #e4e4e4
        margin-right -1px
        height 64px
        text-align center
        position relative
        cursor pointer
.service-intro 
  line-height 22px
  width 60px
  display block
.list-item-1 
  background-position 2px -5px
.list-item-2 
  background-position -60px -5px
.list-item-3 
  background-position -124px -5px
.list-item-4 
  background-position -188px -5px
.list-item-5 
  background-position 2px -76px
.list-item-6 
  background-position -60px -76px
.list-item-7 
  background-position -124px -76px
.list-item-8 
  background-position -188px -76px
.list-item-9 
  background-position 2px -146px
.list-item-10 
  background-position -60px -146px
.list-item-11 
  background-position -126px -142px
.list-item-12 
  background-position -191px -142px
.Right 
  .ads 
    margin-top 5px
.sui-nav.nav-tabs > .active > a,
.sui-nav.nav-tabs > li > a:hover 
  color #77b72c
.clock 
  background-color #5c5251
  color #fff
  font-size 18px
  text-align center
  .time 
    padding 30px 0
  h3 
    font-size 18px
.carousel-control 
  width 17px
  border 0
  border-radius 0
  background #585757
.py-container 
  .title 
    overflow hidden
    margin-top 15px
.title 
  .tip 
    background-image url(./img/icons.png)
    width 66px
    height 25px
    background-position 182px -104px
    line-height 30px
.like 
  .Favourate 
    border 1px solid #e4e4e4
  ul 
    li 
      img 
        width 142px
        height 142px
        padding 0
      .like-text 
        padding 0
        width 142px
        border-right 1px solid #e4e4e4
      &:last-child 
        .like-text 
          border-right 0
.like-text 
  h3 
    color #df3033
  p 
    margin-bottom 0
.blockgary 
  background #f7f7f7
.floors 
  h3 
    color #c81623
  .fr 
    ul 
      li 
        margin-left 0
        a 
          padding 0
          &:after 
            content "|"
            padding 0 10px
        &:last-child 
          a 
            &:after 
              content ""
    .sui-nav 
      margin 10px 0 0
      display inline-block
  .sui-nav 
    &.nav-tabs 
      border-bottom 0
      & > .active 
        & > a 
          font-weight 400
          color #e1251b
          border 0
          padding-top 1px
.floor 
  .floor-content 
    border-top 2px solid #c81623
    border-bottom 1px solid #e4e4e4
ul 
  &.jd-list 
    padding 15px 0
    overflow hidden
    li 
      list-style-type none
      float left
      width 40%
      margin 0 10px
      border-bottom 1px solid #e4e4e4
      text-align center
      line-height 26px
  &.brand-list 
    li 
      height 48px
      line-height 58px
.brandArea 
  position relative
  .brand-yline 
    height 405px
    width 1px
    position absolute
    left 80px
    border-left 1px dashed #e4e4e4
  ul 
    li 
      height 57px
      border-bottom 1px dashed #e4e4e4
      img 
        padding 11px 0
      &:nth-last-child(2) 
        border-bottom 0
      &:last-child 
        border-bottom 0
.split 
  position relative
  .floor-x-line 
    position absolute
    background #e4e4e4
    width 220px
    height 1px
    top 180px
.brand 
  .Brand-list 
    overflow hidden
    padding 15px 0
    margin 10px 0
  ul 
    li 
      img 
        border-left 1px dotted #ccc
        padding 0 10px
      &:first-child 
        img 
          border-left 0
#floor-index 
  position fixed
  left 280px
  top 120px
  display none
  a 
    text-decoration none
  ul 
    li 
      list-style-type none
      text-decoration none
      width 60px
      height 30px
      line-height 30px
      text-align center
      border-bottom 1px solid #ddd
      &:last-child 
        border-bottom 1px solid #ddd
      .num 
        color #666
        background #f7f7f7
      .word 
        display none
        background #90cb1c
        color #fff
.tab-item 
  cursor pointer
  position relative
  top 0
.life-item-content 
  width 246px
  height 164px
  top 218px
  padding-left 1px
  border-left 1px solid #e4e4e4
  overflow hidden
  position absolute
  z-index 2
.life-detail 
  display none
  background #fff
  height 159px
  padding 0 4px
.lifenow 
  display block
.close 
  cursor pointer
  float right
  color #ea4a36
#picLBxxl 
  li 
    height 250px
.picLB 
  overflow hidden
  zoom 1
  padding 0 10px
  li 
    height 250px
    margin 0 -1px
    overflow hidden
    background #fff
    position relative
    float left
    display inline
.picDl 
  width 1200px
  overflow hidden
  zoom 1
  height 250px
  position absolute
  top 0
  left 0
  margin 0
  dd 
    float left
    display inline
    overflow hidden

.item-list 
  .subitem 
    dl 
      &.fore 
        border-top 0

</style>