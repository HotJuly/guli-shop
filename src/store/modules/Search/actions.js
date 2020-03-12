import {reqList} from '../../../api/index'
import {RECEIVELIST} from './mutations-type'


export default{
    //获取筛选后的产品列表
    async getList({commit},option){
        const searchParam={...option};
        //删除对象中的空属性
        for (const key in searchParam) {
            if (!searchParam.hasOwnProperty(key)||(typeof searchParam[key]==="string"&&!searchParam[key].trim())) {
                delete searchParam[key]
            }
        }
        const result=await reqList(searchParam);
        if(result.code===200){
            commit(RECEIVELIST,result.data)
        }
    }
}