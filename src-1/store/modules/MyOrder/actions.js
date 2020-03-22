import {reqOrderInfo} from '../../../api/index'
import {RECEIVEORDERINFO} from './mutations-type'


export default{
    //获取订单信息
    async getOrderInfo({commit},{page,limit}){
        const result=await reqOrderInfo({page,limit});
        if(result.code===200){
            commit(RECEIVEORDERINFO,result.data)
        }
    }
}