<template>
    <div class="goods-list">
        <ul class="yui3-g">
            <li class="yui3-u-1-5" v-for="good in goodsList" :key="`${good.title}-${good.id}`">
                <div class="list-wrap">
                    <div class="p-img">
                        <router-link :to="{path:'/detail',query:{skuId:good.id}}"><img :src="good.defaultImg" /></router-link>
                    </div>
                    <div class="price">
                        <strong>
                                <em>¥</em>
                                <i>{{good.price}}</i>
                            </strong>
                    </div>
                    <div class="attr">
                        <router-link :to="{path:'/detail',query:{skuId:good.id}}">{{good.title}}</router-link>
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
</template>

<script>
export default {
    name:"GoodList",
    props:{
        goodsList:Array.Required
    }
}
</script>

<style scoped>
.sui-navbar {
  margin-bottom: 0;
}
.sui-navbar .navbar-inner {
  padding-left: 0;
  border-radius: 0;
}
.sui-navbar .sui-nav > .active > a {
  background: #e1251b;
  color: #fff;
}
.goods-list {
  margin: 20px 0;
}
.goods-list ul li {
  margin-top: 10px;
  line-height: 28px;
}
.goods-list ul li:hover {
  box-shadow: 0 0 10px 2px #ededed;
}
.goods-list .p-img {
  width: 215px;
  height: 255px;
}
.p-img,
.price,
.attr,
.cu,
.commit,
.operate {
  padding-left: 15px;
}
.attr {
  width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
}
.attr a {
  color: #333;
  text-decoration: none;
}
.attr a:hover {
  color: #c81623;
}
.cu,
.commit {
  height: 22px;
}
.commit {
  font-size: 13px;
  color: #a7a7a7;
}
.commit .command span {
  font-weight: 700;
  color: #646fb0;
}
.price {
  font-size: 18px;
  color: #c81623;
}
.price i {
  margin-left: -5px;
}
.cu span {
  background: #c81623;
  color: #fff;
  padding: 3px;
  margin-right: 3px;
}
.operate {
  padding: 12px 15px;
}
.operate .sui-btn.btn-bordered {
  min-width: 85px;
}
.price i {
  margin: 0;
}

</style>