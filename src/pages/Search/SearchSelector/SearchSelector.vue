<template>
    <!--selector-->
    <div class="clearfix selector">
        <div class="type-wrap logo">
            <div class="fl key brand">品牌</div>
            <div class="value logos">
                <ul class="logo-list">
                    <li class="trademark" @click="changeTrademark(trademark.tmId,trademark.tmName)" v-for="trademark in trademarkList" :key="trademark.tmName+trademark.tmId">{{trademark.tmName}}</li>
                    <!-- <li><img src="./img/_/phone06.png" /></li> -->
                </ul>
            </div>
            <div class="ext">
                <a href="javascript:void(0);" class="sui-btn">多选</a>
                <a href="javascript:void(0);">更多</a>
            </div>
        </div>
        <div class="type-wrap" v-for="attrs in attrsList" :key="`${attrs.attrName}-${attrs.attrId}`">
            <div class="fl key">{{attrs.attrName}}</div>
            <div class="fl value">
                <ul class="type-list">
                    <li v-for="attr in attrs.attrValueList" :key="attr">
                        <a @click="addOption(attrs.attrId,attr,attrs.attrName)">{{attr}}</a>
                    </li>
                </ul>
            </div>
            <div class="fl ext"></div>
        </div>
        <div class="type-wrap">
            <div class="fl key">更多筛选项</div>
            <div class="fl value">
                <ul class="type-list">
                    <li>
                        <a>特点</a>
                    </li>
                    <li>
                        <a>系统</a>
                    </li>
                    <li>
                        <a>手机内存 </a>
                    </li>
                    <li>
                        <a>单卡双卡</a>
                    </li>
                    <li>
                        <a>其他</a>
                    </li>
                </ul>
            </div>
            <div class="fl ext">
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:"SearchSelector",
    props:{
        setProps:Function.Required,
        setTrademark:Function.Required
    },
    computed:{
        ...mapGetters(['trademarkList','attrsList'])
    },
    methods:{
        addOption(propsId,select,propsName){
            const newProps=`${propsId}:${select}:${propsName}`;
            this.setProps(propsId,newProps);
        },
        changeTrademark(tmId,tmName){
            this.setTrademark(tmId,tmName);
        }
    }
}
</script>

<style scoped>
.bread,
.selector,
.type-wrap,
.value {
  overflow: hidden;
}
.bread,
.selector,
.details,
.hot-sale {
  margin-bottom: 5px;
}
.bread .form-dark {
  margin-bottom: 5px;
}
.bread .sui-breadcrumb {
  padding: 3px 15px;
  margin: 0;
}
.bread .sui-tag {
  margin-top: -5px;
}
.hot-sale,
.selector,
.filter {
  border: 1px solid #ddd;
}
.key {
  padding: 10px 10px 0 15px;
}
.type-wrap {
  margin: 0;
  position: relative;
  border-top: 1px solid #ddd;
}
.type-wrap ul li {
  float: left;
  list-style-type: none;
}
.type-wrap:first-child {
  border-top: 0;
}
.type-wrap .key {
  width: 100px;
  background: #f1f1f1;
  line-height: 26px;
  text-align: right;
}
.type-wrap .value {
  padding: 10px 0 0 15px;
  color: #333;
}
.type-wrap .logos {
  margin-left: 120px;
  padding-right: 90px;
}
.type-wrap .ext {
  position: absolute;
  top: 10px;
  right: 10px;
}
.sui-btn {
  border-radius: 0;
}
.sui-btn.btn-bordered.btn-danger {
  margin-right: 15px;
  border: 1px solid #e1251b;
  color: #e1251b;
}
.logo .brand {
  padding-bottom: 87px;
}
.ext .sui-btn {
  padding: 0 10px;
  background: #fff;
}
.ext a {
  color: #666;
}
ul.type-list li {
  display: block;
  margin-right: 30px;
  line-height: 26px;
}
ul.type-list li a {
  cursor: pointer;
  color: #555;
  padding: 2px;
  text-decoration: none;
}
ul.type-list li a.redhover {
  background: #e1251b;
  color: #fff;
  padding: 2px;
  text-decoration: none;
}
ul.type-list li a.grayhover {
  color: #555;
}
ul.logo-list li {
  border: 1px solid #e4e4e4;
  margin: -1px -1px 0 0;
  width: 105px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  color: #e1251b;
  font-style: italic;
  font-size: 14px;
}
.trademark {
  cursor: pointer;
}

</style>