<template>
    <dl class="AttrSelector">
        <dt>
            <div class="fl title">
                <i>{{spuSaleAttr.saleAttrName}}</i>
            </div>
        </dt>
        <dd v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList" :key="spuSaleAttrValue.saleAttrName+spuSaleAttrValue.id">
            <a href="javascript:;">{{spuSaleAttrValue.saleAttrValueName}}</a>
        </dd>
    </dl>
</template>

<script>
export default {
    name:"AttrSelector",
    props:{
        spuSaleAttr:Object.Required
    }
}
</script>

<style lang="stylus" scoped>
.summary-wrap 
  overflow hidden
  line-height 28px
  margin-top 10px
  .price 
    color #c81623
    em 
      font-size 24px
      font-weight 700
    i 
      font-size 16px
    span 
      font-size 12px
  dl 
    overflow hidden
    a 
      color #666
      line-height 24px
      padding 2px 14px
      margin-right 5px
      display block
      float left
      position relative
      outline 0
      border-top 1px solid #eee
      border-right 1px solid #bbb
      border-bottom 1px solid #bbb
      border-left 1px solid #eee
      background-color #fff
      text-decoration none
  .selected 
    border 1px solid #77b72c
    span 
      display block
  .locked 
    color #d6d6d6
    cursor not-allowed
    border-color #bbb
    border-style dotted
  a 
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

</style>