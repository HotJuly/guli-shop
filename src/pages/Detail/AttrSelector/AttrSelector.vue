<template>
    <dl class="AttrSelector">
        <dt>
            <div class="fl title">
                <i>{{spuSaleAttr.saleAttrName}}</i>
            </div>
        </dt>
        <dd v-for="(spuSaleAttrValue,index) in spuSaleAttr.spuSaleAttrValueList" :key="spuSaleAttrValue.saleAttrName+spuSaleAttrValue.id">
            <a :class="saleAttr[spuSaleAttrValue.baseSaleAttrId]===index?'selected':''" @click="checkSelected(spuSaleAttrValue.baseSaleAttrId,index)" href="javascript:;">{{spuSaleAttrValue.saleAttrValueName}}</a>
        </dd>
    </dl>
</template>

<script>
export default {
    name:"AttrSelector",
    data(){
      return {
        saleAttr:{
          "1":0,
          "2":0,
          "3":0,
        }
      }
    },
    props:{
        spuSaleAttr:Object.Required
    },
    methods:{
      checkSelected(id,index){
        this.saleAttr[id]=index;
      }
    }
}
</script>

<style scoped>
.summary-wrap {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.summary-wrap .price {
  color: #c81623;
}
.summary-wrap .price em {
  font-size: 24px;
  font-weight: 700;
}
.summary-wrap .price i {
  font-size: 16px;
}
.summary-wrap .price span {
  font-size: 12px;
}
.summary-wrap dl {
  overflow: hidden;
}
.summary-wrap dl a {
  color: #666;
  line-height: 24px;
  padding: 2px 14px;
  margin-right: 5px;
  display: block;
  float: left;
  position: relative;
  outline: 0;
  border-top: 1px solid #eee;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-left: 1px solid #eee;
  background-color: #fff;
  text-decoration: none;
}
.summary-wrap .selected {
  border: 1px solid #77b72c;
}
.summary-wrap .selected span {
  display: block;
}
.summary-wrap .locked {
  color: #d6d6d6;
  cursor: not-allowed;
  border-color: #bbb;
  border-style: dotted;
}
.summary-wrap a span {
  width: 13px;
  height: 13px;
  display: none;
  position: absolute;
  right: 0;
  _right: -1px;
  bottom: 0;
  _bottom: -1px;
  overflow: hidden;
  background: url("./img/choosed.png") no-repeat;
}

</style>