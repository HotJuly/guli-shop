<template>
    <table class="sui-table table-bordered">
        <thead>
        <tr>
            <th colspan="5">
                <span class="ordertitle">{{order.createTime}}　订单编号：{{order.outTradeNo}} <span class="pull-right delete"><img src="./img/delete.png"/></span></span>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(good,index) in order.orderDetailList" :key="good.id">
            <td>
                <div class="typographic"><img :src="good.imgUrl" />
                    <a href="#" class="block-text">{{good.skuName}}</a><span>x{{good.skuNum}}</span>
                    <ul class="unstyled list-inline">
                        <li>申请售后</li>
                    </ul>
                </div>
            </td>
            <template v-if="index===0">
                <td rowspan="2" width="8%" class="center">{{order.consignee}}</td>
                <td rowspan="2" width="13%" class="center">
                    <ul class="unstyled">
                        <li>总金额¥{{order.totalAmount}}</li>
                        <li>{{order.paymentWay==="ONLINE"?"在线付款":"货到付款"}}</li>

                    </ul>
                </td>
                <td rowspan="2" width="8%" class="center">
                    <a href="#" class="btn">{{order.orderStatusName}}</a>
                </td>
                <td rowspan="2" width="13%" class="center">
                    <ul class="unstyled">
                        <li>
                            <a href="javascript:;" target="_blank">评价|晒单</a>
                        </li>

                    </ul>
                </td>
            </template>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name:"OrderCard",
    props:{
        order:Array.Required,
        orderInfo:Object.Required
    }
}
</script>

<style lang="stylus" scoped>
.typographic
    img
        width 82px
        height 82px
</style>