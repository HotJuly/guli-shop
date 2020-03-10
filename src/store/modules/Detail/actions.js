import {reqDetailInfo} from '../../../api/index'
import {RECEIVEDETAILINFO} from './mutations-type'


export default{
    //获取首页三级分类
    async getDetailInfo({commit},skuId){
        const result=await reqDetailInfo(skuId);
        if(result.code===200){
            commit(RECEIVEDETAILINFO,result.data)
        }
    }
}