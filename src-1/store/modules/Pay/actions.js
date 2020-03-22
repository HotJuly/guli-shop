import {reqPayOrderInfo,reqPayStatus} from '../../../api/index'
import {RECEIVEPAYORDERINFO} from './mutations-type'


export default{
    //获取支付订单ID
    async getPayOrderInfo({commit},orderId){
        const result=await reqPayOrderInfo(orderId);
        if(result.code===200){
            commit(RECEIVEPAYORDERINFO,result.data)
        }
    },
    //查询订单支付状态
    async queryPayStatus({commit},orderId){
        const result=await reqPayStatus(orderId);
        if(result.code===200){
            console.log('支付成功')
            return Promise.resolve(result.message)
            // commit(RECEIVEPAYORDERINFO,result.data)
        }else{
            return Promise.reject(result.message)
        }
    }
}