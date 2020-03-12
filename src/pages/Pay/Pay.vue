<template>
    <div id="pay">
        <div class="cart py-container">
			<!--主内容-->
			<div class="checkout py-container  pay">
				<div class="checkout-tit">
					<h4 class="tit-txt"><span class="success-icon"></span><span  class="success-info">订单提交成功，请您及时付款，以便尽快为您发货~~</span></h4>
					<div class="paymark">
						<span class="fl">请您在提交订单<em class="orange time">4小时</em>之内完成支付，超时订单会自动取消。订单号：<em>145687</em></span>
						<span class="fr"><em class="sui-lead">应付金额：</em><em  class="orange money">￥17,654</em></span>
					</div>
				</div>

				<div class="check-info">
					<h4>重要说明：</h4>
					<ol>
						<li>尚品汇商城支付平台目前支持<span class="zfb">支付宝</span>支付方式。</li>
						<li>其它支付渠道正在调试中，敬请期待。</li>
						<li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
					</ol>
					<h4>支付宝账户信息：（很重要，<span class="save">请保存！！！</span>）</h4>
					<ul>
						<li>支付帐号：11111111</li>
						<li>密码：111111</li>
						<li>支付密码：111111</li>
					</ul>
				</div>


				<div class="checkout-steps">
					<!--收件人信息-->
					<div class="step-tit">
						<h5>支付平台</h5>
					</div>
					<div class="step-cont">
						<ul class="payType">
							<li><img src="./img/_/pay2.jpg"></li>
							<li><img src="./img/_/pay3.jpg"></li>
						</ul>

					</div>
					<div class="hr"></div>

					<!--支付和送货-->
					<div class="payshipInfo">
						<div class="step-tit">
							<h5>支付网银</h5>
						</div>
						<div class="step-cont">
							<ul class="payType">
								<li><img src="./img/_/pay10.jpg"></li>
								<li><img src="./img/_/pay11.jpg"></li>
								<li><img src="./img/_/pay12.jpg"></li>
								<li><img src="./img/_/pay13.jpg"></li>
								<li><img src="./img/_/pay14.jpg"></li>
								<li><img src="./img/_/pay15.jpg"></li>
								<li><img src="./img/_/pay16.jpg"></li>
								<li><img src="./img/_/pay17.jpg"></li>
								<li><img src="./img/_/pay18.jpg"></li>
								<li><img src="./img/_/pay19.jpg"></li>
								<li><img src="./img/_/pay20.jpg"></li>
								<li><img src="./img/_/pay21.jpg"></li>
								<li><img src="./img/_/pay22.jpg"></li>

							</ul>
						</div>
						<div class="hr"></div>
					</div>

					<div class="submit sui-text-center">
						<a @click="showQRCode()" class="sui-btn btn-danger btn-xlarge" href="javascript:;">立即支付</a>
					</div>
					<div class="otherpay">
						<div class="step-tit">
							<h5>其他支付方式</h5>
						</div>
						<div class="step-cont">
							<span><a href="weixinpay.html" target="_blank">微信支付</a></span>
							<span>中国银联</span>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { MessageBox } from 'element-ui';
import QRCode from 'qrcode'
export default {
    name:"Pay",
    props:["orderId"],
    mounted(){
        this.$store.dispatch('getPayOrderInfo',this.orderId)
    },
    computed:{
        ...mapState({
            payOrderInfo:state=>state.Pay.payOrderInfo
        })
    },
    methods:{
      async showQRCode(){
        let div=document.createElement('img');
        // const qrcode=new QRCode(div, {
        //             width : 300,
        //             height : 300
        //         })
        // // div=JSON.stringify(div);
        // qrcode.makeCode(this.payOrderInfo.codeUrl);
        const url=await QRCode.toDataURL(this.payOrderInfo.codeUrl)
        div.src=url;
        // console.dir(div)
        this.$alert(div.outerHTML, '请使用微信扫码支付', {
          dangerouslyUseHTMLString: true,
          center:true,
          showCancelButton:true,
          showConfirmButton:true,
          confirmButtonText: '我已成功支付',
          cancelButtonText: '支付中遇到了问题',
          showClose:false
        })
        .then(() => {
          alert('那你很棒棒哦,正在查询支付信息,请稍等几秒钟~~~')
        })
        .catch(() => {
          alert('请联系尚硅谷漂亮的前台')
        });
        if(!this.timer){
          let index=0;
          this.timer=setInterval(() => {
            this.queryPayStatus()
            .then(message=>{
              if(message==="已支付"){
                clearInterval(this.timer);
                alert('支付成功,点击确定将跳转购物车~~~')
                this.$router.replace('/shopcart');
              }
            })
            .catch(error=>{
              if(index===0){
                alert('支付未成功,请确认微信付款情况');
                index=1;
              }
            })
          }, 3000);
        }
        
      },
      queryPayStatus(){
        return this.$store.dispatch('queryPayStatus',this.payOrderInfo.orderId);
      },
      $alert:MessageBox.alert,
      $message:MessageBox
    },
    beforeDestroy(){
      clearInterval(this.timer)
    }
}
</script>

<style lang="stylus" scoped>
.checkout 
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
  background-position -370px 3px
  width 177px
  height 75px
  .title 
    font 19px "微软雅黑"
    position absolute
    top 24px
    left 190px
.checkout-steps 
  border 1px solid #ddd
  padding 25px
.step-tit 
  line-height 36px
  margin 15px 0
.step-cont 
  margin 0 10px 10px 20px
  ul 
    li 
      list-style-type none
      overflow hidden
  .con 
    float left
    padding 5px 10px
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
      margin 6px 0
  &.payType 
    li 
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
.recommendAddr 
  margin-top 10px
.addr-item 
  .name 
    width 120px
    border 1px solid #ddd
    height 18px
    padding 5px 10px
    text-align center
.payshipInfo 
  span 
    font-weight 700
.sendType 
  background #f4f4f4
  margin-bottom 2px
  .express 
    border 1px solid #ddd
    width 120px
    text-align center
.sendType,
.sendGoods 
  padding 15px
.sendGoods 
  background #feedef
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
.trade 
  padding 10px
  margin 10px 0
  text-align right
  background-color #f4f4f4
  border 1px solid #ddd
  .fc-receiverInfo 
    color #999
.pay 
  font-family "微软雅黑"
  .orange 
    color #e1251b
  .money 
    font-size 18px
  .checkout-tit 
    padding 10px
  .paymark 
    overflow hidden
    line-height 26px
    text-indent 38px
  .success-icon 
    width 30px
    height 30px
    display inline-block
    background url(./img/_/icon.png)
    background-position 0 0
  .success-info 
    padding 0 8px
    line-height 30px
    vertical-align top
.submit 
  .btn-xlarge 
    padding 15px 45px
    margin 15px 0 10px
    font 18px "微软雅黑"
    font-weight 700
    border-radius 0
    background-color #e1251b
    border 1px solid #e1251b
.check-info 
  padding-left 25px
  padding-bottom 15px
  margin-bottom 10px
  border 2px solid #e1251b
  h4 
    color #e1251b
  .save 
    font-size 18px
    font-weight 700
    color #e1251b
  li 
    line-height 24px
    font-size 14px
.check-info ol,
.check-info ul 
  padding-left 25px
.zfb 
  color #e1251b
  font-weight 700

</style>