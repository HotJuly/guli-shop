import {reqDetailInfo,reqAddToCart} from '../../../api/index'
import {RECEIVEDETAILINFO} from './mutations-type'

export default{
    async getDetailInfo({commit},skuId){
        const result=await reqDetailInfo(skuId);
        if(result.code===200){
            commit(RECEIVEDETAILINFO,result.data)
        }
    },
    async addToCart({commit},{skuId,skuNum,cb}){
        const result=await reqAddToCart(`/${skuId}/${skuNum}`);
        if(result.code===200){
            cb&&cb();
        }else{
            alert('商品添加失败')
        }
    }
}