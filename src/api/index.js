import ajax from './ajax'

//首页Index接口
export const reqBaseCategoryList = ()=>ajax.get('/product/getBaseCategoryList')

//详情Detail接口
export const reqDetailInfo=(skuId)=>ajax.get(`/item/${skuId}`)
export const reqAddToCart=(params)=>ajax.post(`/cart/addToCart${params}`)

//搜索Search接口
export const reqList=(option)=>ajax.post(`/list`,option)

//购物车ShopCart接口
// export const reqList=(option)=>ajax.post(`/list`,option)

//登录Login接口
export const reqLogin=(userInfo)=>ajax.post(`/user/passport/login`,userInfo)