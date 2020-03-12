<template>
    <div id="account myOrder">
        <div class="py-container">
            <div class="yui3-g home">
                <!--左侧列表-->
                <Aside />
                <!--右侧主内容-->
                <OrderList :orderInfo="orderInfo" :handleSizeChange="handleSizeChange" :handleCurrentChange="handleCurrentChange" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Aside from './Aside/Aside'
import OrderList from './OrderList/OrderList'
export default {
    name:"MyOrder",
    data(){
        return {
            page:1,
            limit:2
        }
    },
    mounted(){
        this.getOrderInfo()
    },
    computed:{
        ...mapState({
            orderInfo:state=>state.MyOrder.orderInfo
        })
    },
    methods:{
        handleSizeChange(limit){
            this.limit=limit;
            this.getOrderInfo();
        },
        handleCurrentChange(page){
            this.page=page;
            this.getOrderInfo();
        },
        getOrderInfo(){
            const {page,limit}=this;
            this.$store.dispatch('getOrderInfo',{page,limit});
        }
    },
    components:{
        Aside,
        OrderList
    }
}
</script>

<style lang="stylus" scoped>
seckillOrderseckillOrder 
  input 
    *display inline
    *zoom 1
a 
  color #666
.home 
  padding 10px
  color #333
.list1,
.list2,
.list3,
.list4 
  position relative
.list1 
  i 
    background-position -526px -73px
.list2 
  i 
    background-position -526px -104px
.list3 
  i 
    background-position -526px -132px
.list4 
  i 
    background-position -526px -163px
.td 
  width 200px
  margin 0 auto
  padding 0 20px
  display inline-block
  position relative
  ul 
    li 
      list-style-type none
      width 45%
      height 80px
      text-align center
      line-height 26px
      div 
        background-image url(./img/icons.png)
        width 50px
        height 50px
        position absolute
  span 
    color #999
  .td1 
    background-position -314px -7px
    position absolute
    top 25px
    left 40px
  .td2 
    background-position -319px -54px
    position absolute
    top 25px
    right 53px
  .td3 
    background-position -319px -97px
    position absolute
    top 109px
    left 46px
  .td4 
    background-position -319px -143px
    position absolute
    top 107px
    right 54px
.space 
  background-color #ddd
.space-x 
  width 178px
  height 0
  position absolute
  top 80px
  left 11px
  border-bottom 1px solid #ddd
.space-y 
  height 159px
  position absolute
  top 2px
  left 105px
  border-right 1px solid #ddd
.minus,
.change 
  border-right 1px solid #ddd
  margin-right -1px
.title 
  padding 20px 10px 10px
  color #666
.carousel-control 
  left 0
  top 47%
  border 0
  background #c3c3c3
  width 20px
  border-radius 0
.carousel-inner 
  & > .item 
    & > img 
      width 238px
      margin 0 auto
.jifen 
  overflow hidden
  padding 10px
  margin 5px 0
  .fr 
    width 185px
.fen 
  line-height 28px
  i 
    color red
.dui 
  padding-right 10px
.chong 
  margin-top 10px
.sui-form 
  &.form-horizontal 
    .control-group 
      margin-bottom 9px
      *margin-bottom 11px
      *padding-bottom 11px
.control-group 
  .control-label 
    float left
    width 96px
    ooverflow hidden
  .controls 
    float left
    width 139px
.ever 
  .tab-content 
    border 0
    border-top 0
.tab-content 
  .chosetype 
    margin-top 10px
.sui-nav 
  &.nav-tabs 
    background #f1f1f1
    padding-left 0
    border 1px solid #ddd
    margin 0
    overflow hidden
    & > li 
      & > a 
        border 0
        padding 10px 20px
        font-family "微软雅黑"
        .mark 
          vertical-align super
          background #e1251b
          color #f7f1f1
          padding 0 5px 2px
          border-radius 8px
        &:hover 
          background-color #e1251b !important
      & + li 
        margin-left 2px
    & > .active 
      & > a 
        .mark 
          background-color #ececec
          color #333
.sui-nav.nav-tabs > .active > a,
.sui-nav.nav-tabs > li > a:hover 
  background-color #e1251b
  color #fff
  border-radius 0
  border 0

</style>