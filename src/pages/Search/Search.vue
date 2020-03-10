<template>
    <div id="search">
        <TypeNav :setKeyWord="setKeyWord"/>
        <div class="main">
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x" v-show="category">{{category}}</li>
                        <li class="with-x" v-show="option.trademark">{{option.trademark}}</li>
                        <li class="with-x" v-for="prop in option.props" :key="prop">{{prop}}<i>×</i></li>
                    </ul>
                </div>
                <SearchSelector :setProps="setProps" :setTrademark="setTrademark"/>
                <!--details-->
                <div class="details">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li class="active">
                                    <a href="#">综合</a>
                                </li>
                                <li>
                                    <a href="#">销量</a>
                                </li>
                                <li>
                                    <a href="#">新品</a>
                                </li>
                                <li>
                                    <a href="#">评价</a>
                                </li>
                                <li>
                                    <a href="#">价格⬆</a>
                                </li>
                                <li>
                                    <a href="#">价格⬇</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <a href="item.html"  target="_blank"><img src="./img/_/mobile01.png" /></a>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile02.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile03.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile04.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile05.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile06.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile01.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile02.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile03.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/mobile04.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>6088.00</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="fr page">
                        <div class="sui-pagination pagination-large">
                            <ul>
                                <li class="prev disabled">
                                    <a href="#">«上一页</a>
                                </li>
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#">5</a>
                                </li>
                                <li class="dotted"><span>...</span></li>
                                <li class="next">
                                    <a href="#">下一页»</a>
                                </li>
                            </ul>
                            <div><span>共10页&nbsp;</span></div>
                        </div>
                    </div>
                </div>
                <!--hotsale-->
                <!-- <div class="clearfix hot-sale">
                    <h4 class="title">热卖商品</h4>
                    <div class="hot-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/like_01.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/like_03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>金属A面，360°翻转，APP下单省300！</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/like_04.png" />
                                    </div>
                                    <div class="attr">
                                        <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4068.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有20人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/like_02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> -->
            </div>
	    </div>
    </div>
</template>

<script>
import TypeNav from '../../components/TypeNav/TypeNav'
import SearchSelector from './SearchSelector/SearchSelector'
export default {
    name:"Search",
    data(){
        return {
            option:{
            }
        }
    },
    mounted(){
        // const {category1Id,category2Id,category3Id,categoryName,searchName}=this.$route.query;
        // this.option.category1Id=category1Id;
        // this.option.category2Id=category2Id;
        // this.option.category3Id=category3Id;
        // this.categoryName=categoryName;
        // this.searchName=searchName;
        this.option={...this.$route.query,props:[]};
        this.getList();
    },
    computed:{
        category(){
            return this.option.categoryName||this.option.keyword;
        }
    },
    methods:{
        getList(){
            this.$store.dispatch('getList',this.option)
        },
        setKeyWord(keyword){
            this.option.keyword=keyword;
        },
        setProps(propsId,newProps){
            let oldProps=this.option.props;
            let isRepeat=false;
            propsId=""+propsId;
            oldProps=oldProps.map((item)=>{
                const result=item.split(":")[0]===propsId;
                isRepeat=result?result:isRepeat;
                return result?newProps:item;
            })
            if(!isRepeat){
                this.option.props=[...oldProps,newProps];
            }else{
                this.option.props=oldProps
            }
            this.getList();
        },
        setTrademark(tmId,tmName){
            this.option={...this.option,trademark:`${tmId}:${tmName}`};
        }
    },
    components:{
        TypeNav,
        SearchSelector
    }
}
</script>

<style lang="stylus">
.main 
  margin 10px 0
a 
  color #666
em,
i 
  font-style normal
.sui-btn.btn-bordered.btn-danger:hover,
.sui-btn.btn-bordered.btn-danger:focus,
.operate .sui-btn.btn-bordered.btn-danger:active,
.operate .sui-btn.btn-bordered.btn-danger.active 
  border 1px solid #e1251b
  background-color #e1251b
.typeNav 
  border-bottom 2px solid #e1251b
.bread,
.selector,
.type-wrap,
.value 
  overflow hidden
.bread,
.selector,
.details,
.hot-sale 
  margin-bottom 5px
.bread 
  .form-dark 
    margin-bottom 5px
  .sui-breadcrumb 
    padding 3px 15px
    margin 0
  .sui-tag 
    margin-top -5px
.hot-sale,
.selector,
.filter 
  border 1px solid #ddd
.key 
  padding 10px 10px 0 15px
.type-wrap 
  margin 0
  position relative
  border-top 1px solid #ddd
  ul 
    li 
      float left
      list-style-type none
  &:first-child 
    border-top 0
  .key 
    width 100px
    background #f1f1f1
    line-height 26px
    text-align right
  .value 
    padding 10px 0 0 15px
    color #333
  .logos 
    margin-left 120px
    padding-right 90px
  .ext 
    position absolute
    top 10px
    right 10px
.sui-btn 
  border-radius 0
  &.btn-bordered 
    &.btn-danger 
      margin-right 15px
      border 1px solid #e1251b
      color #e1251b
.logo 
  .brand 
    padding-bottom 87px
.ext 
  .sui-btn 
    padding 0 10px
    background #fff
  a 
    color #666
ul 
  &.type-list 
    li 
      display block
      margin-right 30px
      line-height 26px
      a 
        cursor pointer
        color #555
        padding 2px
        text-decoration none
        &.redhover 
          background #e1251b
          color #fff
          padding 2px
          text-decoration none
        &.grayhover 
          color #555
  &.logo-list 
    li 
      border 1px solid #e4e4e4
      margin -1px -1px 0 0
      width 105px
      height 52px
      text-align center
      line-height 52px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      font-weight 700
      color #e1251b
      font-style italic
      font-size 14px
.filter 
  background #f1f1f1
.sui-navbar 
  margin-bottom 0
  .navbar-inner 
    padding-left 0
    border-radius 0
  .sui-nav 
    & > .active 
      & > a 
        background #e1251b
        color #fff
.goods-list 
  margin 20px 0
  ul 
    li 
      margin-top 10px
      line-height 28px
      &:hover 
        box-shadow 0 0 10px 2px #ededed
  .p-img 
    width 215px
    height 255px
.p-img,
.price,
.attr,
.cu,
.commit,
.operate 
  padding-left 15px
.attr 
  width 85%
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 2
  overflow hidden
  margin-bottom 8px
  min-height 38px
  cursor pointer
  line-height 1.8
  a 
    color #333
    text-decoration none
    &:hover 
      color #c81623
.cu,
.commit 
  height 22px
.commit 
  font-size 13px
  color #a7a7a7
  .command 
    span 
      font-weight 700
      color #646fb0
.price 
  font-size 18px
  color #c81623
  i 
    margin-left -5px
.cu 
  span 
    background #c81623
    color #fff
    padding 3px
    margin-right 3px
.operate 
  padding 12px 15px
  .sui-btn 
    &.btn-bordered 
      min-width 85px
.sui-pagination ul > li > a:hover,
.sui-pagination ul > li > a:focus 
  border 1px solid #e1251b
  background #e1251b
.page 
  width 733px
  height 66px
  overflow hidden
.sui-pagination 
  div 
    float right
    width 241px
    display inline-block
    *display inline
    *zoom 1
  ul 
    display inline-block
    *display inline
    *zoom 1
    width 490px
    float left
    & > .active 
      & > a 
        background-color #fff
        color #e1251b
        border-color #fff
        cursor default
        &:hover 
          background #ccc
          border 1px solid #ddd
    & > li 
      display inline-block
      *display inline
      *zoom 1
      & > a 
        &:hover 
          background #ccc
          border 1px solid #ddd
.pagination-large ul > li > a,
.pagination-large ul > li > span 
  padding 9px 18px
  color #333
.sui-pagination ul > .dotted > span,
.sui-pagination ul > .dotted > a 
  border 0
.pagination-large 
  div 
    .page-num 
      padding 9px 18px
      & + . 
        padding 7px 16px
        color #666
        background-color #f6f6f6
        border 1px solid #ddd
.hot-sale 
  .hot-list 
    padding 15px
  .title 
    border-bottom 1px solid #ddd
    background #f1f1f1
    color #333
    margin 0
    padding 5px 0 5px 15px
.sort 
  position absolute
  display none

</style>