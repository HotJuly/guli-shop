import {reqTradeInfo,reqSubmitOrder} from '../../../api/index'
import {RECEIVETRADEINFO,RECEIVESUBMITORDER} from './mutations-type'


export default{
    //获取订单确认页面所需数据
    async getTradeInfo({commit}){
        const result=await reqTradeInfo();
        if(result.code===200){
            commit(RECEIVETRADEINFO,result.data)
        }
    },
    //提交订单
    async submitOrder({commit},{orderInfo,tradeNo}){
        const result=await reqSubmitOrder(orderInfo,tradeNo);
        if(result.code===200){
            return result.data;
        }else{
            alert('提交订单失败,请稍后重试')
            return result.message
        }
    }
}