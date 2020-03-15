<template>
    <div class="yui3-u-5-6 body" id="orderList">
        <div class="order">
            <div class="mt">
                <span class="fl"><strong>我的订单</strong></span>
            </div>
        </div>

        <div class="order-detail" id="item">

            <div class="ever">
                <div class="tab-content">
                    <div class="chosetype">
                        <table class="sui-table table-bordered-simple">
                            <thead>
                            <tr>
                                <th width="29%">商品</th>
                                <th width="31%">订单详情</th>
                                <th width="13%">收货人</th>
                                <th>金额</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div id="all" class="tab-pane active">
                        <div class="orders">
                            <OrderCard :order="order" :orderInfo="orderInfo"  v-for="order in orderInfo.records" :key="order.id"/>
                        </div>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="orderInfo.current"
                            :page-sizes="[2, 10, 20, 50]"
                            :page-size="orderInfo.size"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="orderInfo.total">
                        </el-pagination>

                        <!-- <div class="choose-order">
                            <div class="sui-pagination pagination-large top-pages">
                                <ul>
                                    <li class="prev disabled">
                                        <a href="javascript:">«上一页</a>
                                    </li>
                                    <li class="active disabled">
                                        <a href="javascript:">1</a>
                                    </li>
                                    <li class="active">
                                        <a href="javascript:">1</a>
                                    </li>

                                    <li class="prev disabled">
                                        <a href="javascript:">下一页»</a>
                                    </li>
                                </ul>
                                <div>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;共2页&nbsp;</span>
                                </div>
                            </div>
                        </div> -->
                        <div class="clearfix"></div>

                    </div>
                </div>
            </div>
        </div>

        <div class="order">
            <div class="mt">
                <span class="fl"><strong>猜你喜欢</strong></span>
            </div>
        </div>
        <div class="like-list">
            <ul class="yui3-g">
                <li class="yui3-u-1-4">
                    <div class="list-wrap">
                        <div class="p-img">
                            <img src="./img/_/itemlike01.png" />
                        </div>
                        <div class="attr">
                            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                        </div>
                        <div class="price">
                            <strong>
                            <em>¥</em>
                            <i>3699.00</i>
                        </strong>
                        </div>
                        <div class="commit">
                            <i class="command">已有6人评价</i>
                        </div>
                    </div>
                </li>
                <li class="yui3-u-1-4">
                    <div class="list-wrap">
                        <div class="p-img">
                            <img src="./img/_/itemlike02.png" />
                        </div>
                        <div class="attr">
                            <em>Apple苹果iPhone 6s/6s Plus 16G 64G 128G</em>
                        </div>
                        <div class="price">
                            <strong>
                            <em>¥</em>
                            <i>4388.00</i>
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
                            <img src="./img/_/itemlike03.png" />
                        </div>
                        <div class="attr">
                            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
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
                            <img src="./img/_/itemlike04.png" />
                        </div>
                        <div class="attr">
                            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
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
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {Pagination} from 'element-ui'
import OrderCard from './OrderCard/OrderCard'
export default {
    name:"OrderList",
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
        [Pagination.name]:Pagination,
        OrderCard
    }
}
</script>

<style scoped>
.body {
  color: #666;
}
.body .ever {
  margin: 20px;
}
.body .order,
.body .discount {
  border: 1px solid #ddd;
  margin: 0 20px 12px;
}
.order .mt {
  overflow: hidden;
  padding: 12px 10px;
  background-color: #f1f1f1;
  font-size: 15px;
}
.order .order-detail {
  padding: 10px;
  text-align: center;
}
.order-detail .none {
  color: #666;
  font-size: 16px;
}
.order-detail .orders {
  padding: 10px 0;
}
.orders .delete {
  cursor: pointer;
}
.like-list {
  padding: 20px;
  color: #666;
  margin: -12px 20px 20px;
  border: 1px solid #ddd;
  border-top: 0;
}
.like-list ul li .attr {
  padding-bottom: 10px;
}
.like-list ul li .list-wrap {
  line-height: 22px;
}
.like-list ul li .attr,
.like-list ul li .price,
.like-list ul li .commit {
  padding-left: 15px;
}
.list-wrap .price {
  font: 16px "微软雅黑";
  color: #e4393c;
}


</style>