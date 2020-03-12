import {reqShopCartList,reqCheckCart,reqDeleteCart} from '../../../api/index'
import {RECEIVESHOPCARTLIST} from './mutations-type'


export default{
    //获取购物车列表
    async getShopCartList({commit}){
        const result=await reqShopCartList();
        if(result.code===200){
            commit(RECEIVESHOPCARTLIST,result.data)
        }
    },
    //切换商品的选中状态
    async checkCart({commit},{skuId,isChecked}){
        //checkbox框返回是布尔值,通过*1进行隐式转换为数字
        const result=await reqCheckCart(skuId,isChecked*1);
        if(result.code!==200){
            alert('更新选中状态失败')
        }
    },
    //从购物车中删除商品
    async deleteCart({commit},skuId){
        const result=await reqDeleteCart(skuId);
        if(result.code!==200){
            alert('删除商品失败')
        }
    }
}