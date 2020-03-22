import {reqBaseCategoryList} from '../../../api/index'
import {RECEIVEBASECATEGORYLIST} from './mutations-type'


export default{
    //获取首页三级分类
    async getBaseCategoryList({commit}){
        const result=await reqBaseCategoryList();
        if(result.code===200){
            commit(RECEIVEBASECATEGORYLIST,result.data)
        }
    }
}