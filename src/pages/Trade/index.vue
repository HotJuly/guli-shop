<template>
    <div id="trade">
        <div class="cart py-container">
            <!--主内容-->
            <div class="checkout py-container">
                <div class="checkout-tit">
                    <h4 class="tit-txt">填写并核对订单信息</h4>
                </div>
                <div class="checkout-steps">
                    <!--收件人信息-->
                    <div class="step-tit">
                        <h5>收件人信息<span></span></h5>
                    </div>
                    <UserAddress :userAddressList="userAddressList" :selectedAddress="selectedAddress" :changeAddress="changeAddress" />
                    <div class="hr"></div>
                    <!--支付和送货-->
                    <div class="payshipInfo">
                        <div class="step-tit">
                            <h5>支付方式</h5>
                        </div>
                        <div class="step-cont">
                            <ul class="payType">
                                <li class="selected" typeValue="1">在线支付<span title="点击取消选择"></span></li>
                                <li typeValue="0">货到付款<span title="点击取消选择"></span></li>
                                <input type="hidden" id="payType" value="1">
                            </ul>
                        </div>
                        <div class="hr"></div>
                        <div class="step-tit">
                            <h5>送货清单</h5>
                        </div>
                        <SendMessage :detailArrayList="detailArrayList" />
                        <div class="hr"></div>
                    </div>

                    <div class="linkInfo">
                        <div class="step-tit">
                            <h5>发票信息</h5>
                        </div>
                        <div class="step-cont">
                            <span>普通发票（电子）</span>
                            <span>个人</span>
                            <span>明细</span>
                        </div>
                    </div>
                    <div class="cardInfo">
                        <div class="step-tit">
                            <h5>使用优惠/抵用</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-summary">
                <div class="static fr">
                    <div class="list">
                        <span><i class="number">{{tradeInfo.totalNum}}</i>件商品，总商品金额</span>
                        <em class="allprice">¥{{tradeInfo.totalAmount}}</em>
                    </div>
                    <div class="list">
                        <span>返现：</span>
                        <em class="money">0.00</em>
                    </div>
                    <div class="list">
                        <span>运费：</span>
                        <em class="transport">0.00</em>
                    </div>
                </div>
            </div>
            <div class="clearfix trade">
                <div class="fc-price">应付金额:　<span class="price">¥{{tradeInfo.totalAmount}}</span></div>
                <div class="fc-receiverInfo">
                    寄送至:
                    <span id="receive-address">{{selectedAddress.userAddress}}</span>
                    收货人：<span id="receive-name">{{selectedAddress.consignee}}</span>
                    <span id="receive-phone">{{selectedAddress.phoneNum}}</span>
                </div>
            </div>
            <div class="submit">
                <a class="sui-btn btn-danger btn-xlarge" @click="toPay" href="javascript:;">提交订单</a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'
import UserAddress from './UserAddress/UserAddress'
import SendMessage from './SendMessage/SendMessage'
export default {
    name:"Trade",
    data(){
        return {
            selected:{}
        }
    },
    computed:{
        ...mapGetters(['userAddressList','detailArrayList']),
        ...mapState({
            tradeInfo:state=>state.trade.tradeInfo
        }),
        selectedAddress:{
            get(){
                if(!this.tradeInfo.userAddressList) return {};
                const defaultSelected=this.tradeInfo.userAddressList.find((userAddress)=>{
                    return userAddress.isDefault==="1";
                })
                return this.selected.userAddress?this.selected:defaultSelected
            },
            set(value){
                this.selectedAddress=value
            }
        }
    },
    methods:{
        changeAddress(userAddress){
            this.selected=userAddress;
        },
        async toPay(){
            const {consignee,phoneNum,userAddress}=this.selectedAddress;
            const {detailArrayList,tradeInfo:{tradeNo},paymentWay}=this;
            const orderInfo={
                    consignee,
                    consigneeTel:phoneNum,
                    deliveryAddress:userAddress,
                    paymentWay:'ONLINE',
                    orderComment:'',
                    orderDetailList:detailArrayList
                };
            const orderId=await this.$store.dispatch('submitOrder',{orderInfo,tradeNo});
            if(typeof orderId==="number"){
              this.$router.push({path:'/pay',query:{orderId}});
            }
        }
    },
    mounted(){
        this.$store.dispatch('getTradeInfo');
    },
    components:{
        UserAddress,
        SendMessage
    }
}
</script>

<style lang="stylus" scoped>
.checkout 
  margin 20px 0
  h5 
    font-weight 700
    margin 0
.hr 
  height 1px
  background-color #ddd
a 
  color #666
.top 
  background-color #f1f1f1
.logoArea 
  overflow hidden
  position relative
.logo 
  background url(./img/icons.png) no-repeat
  background-position -370px 5px
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
.checkout-steps 
  border 1px solid #ddd
  padding 25px
  font-family "微软雅黑"
.step-tit 
  line-height 36px
  margin 15px 0
  h5 
    span 
      float right
      a 
        color #555
        cursor pointer
        text-decoration none
        &:hover 
          color red
.step-cont 
  margin 0 10px 0 20px
  ul 
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
.seven 
  color #c81623
  margin-top 20px
.price 
  font 14px "微软雅黑"
  font-weight 700
  color #e12228
ul 
  &.addr-detail 
    li 
      width 99%
      margin 10px 0
  &.payType 
    li 
      position relative
      display inline-block
      padding 5px 20px
      border 1px solid #ddd
      *display inline
      _zoom 1
      *margin 5px 10px
      cursor pointer
  &.send-detail 
    li 
      margin-top 10px
      line-height 30px
.recommendAddr 
  margin-top 10px
.addr-item 
  .name 
    width 100px
    text-align center
    border 1px solid #ddd
    a 
      display block
      padding 5px 0
      position relative
      outline 0
      text-decoration none
      color inherit
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
    &.selected 
      border 1px solid #e1251b
      span 
        display block
  .address 
    line-height 30px
    margin-left 10px
    padding-left 5px
    width 55%
    &:hover 
      cursor pointer
    .edittext 
      padding-left 15px
      visibility hidden
    .base 
      padding 4px
      margin-left 10px
      background-color #878787
      color #fff
.addressInfo 
  .sui-modal 
    width 565px
.address-hover 
  background-color #ddd
  .edittext 
    visibility visible !important
.payshipInfo 
  span 
    font-weight 700
.num,
.exit 
  text-align center
.order-summary 
  overflow hidden
  padding-right 20px
.list,
.trade 
  line-height 26px
.list 
  span 
    float left
    width 160px
  em 
    font-family "微软雅黑"
.trade 
  padding 10px
  margin 10px 0
  text-align right
  background-color #f4f4f4
  border 1px solid #ddd
  .fc-receiverInfo 
    color #999
.submit 
  .btn-xlarge 
    padding 15px 45px
    float right
    margin 0 0 10px
    font 18px "微软雅黑"
    font-weight 700
    border-radius 0
    background-color #e1251b
    border 1px solid #e1251b
.number 
  color red
.payType 
  margin-bottom 10px
textarea 
  &:focus 
    outline none

</style>