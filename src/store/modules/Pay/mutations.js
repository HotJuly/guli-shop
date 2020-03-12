import {RECEIVEPAYORDERINFO} from './mutations-type'

export default{
    [RECEIVEPAYORDERINFO](state,payOrderInfo){
        state.payOrderInfo=payOrderInfo
    }
}