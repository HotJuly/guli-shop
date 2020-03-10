import ajax from './ajax'

const baseURL="/api"

//首页Index接口
export const reqBaseCategoryList = ()=>ajax.get(baseURL+'/product/getBaseCategoryList')

//详情Detail接口
export const reqDetailInfo=(skuId)=>ajax.get(baseURL+`/item/${skuId}`)

//搜索Search接口
export const reqList=(option)=>ajax.post(baseURL+`/list`,{data:option})