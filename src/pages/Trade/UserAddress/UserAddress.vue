<template>
    <div class="step-cont">
        <div class="addressInfo">
            <ul class="addr-detail">
                <li class="addr-item">
                    <div class="choose-address" @click="changeAddress(userAddress)" v-for="userAddress in userAddressList" :key="userAddress.userAddress">
                        <div class="con name" :class="{'selected':selectedAddress===userAddress}"><a href="javascript:;" ><em>{{userAddress.consignee}}</em><span title="点击取消选择"></span></a></div>
                        <div class="con address">
                            <span class="place">{{userAddress.userAddress}}</span>
                            <span class="phone">{{userAddress.phoneNum}}</span>
                            <span class="base" v-if="userAddress.isDefault*1">默认地址</span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </li>
            </ul>
            <!--确认地址-->
        </div>
    </div>
</template>

<script>
export default {
    name:"UserAddress",
    props:{
        userAddressList:Array.Required,
        selectedAddress:Array.Required,
        changeAddress:Function.Required
    }
}
</script>

<style lang="stylus" scoped>
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


</style>