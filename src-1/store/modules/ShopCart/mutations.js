import {RECEIVESHOPCARTLIST} from './mutations-type'

export default{
    [RECEIVESHOPCARTLIST](state,shopCartList){
        state.shopCartList=shopCartList
    }
}