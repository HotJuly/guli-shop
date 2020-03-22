import {RECEIVEORDERINFO} from './mutations-type'

export default{
    [RECEIVEORDERINFO](state,orderInfo){
        state.orderInfo=orderInfo
    }
}