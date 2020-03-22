import {RECEIVETRADEINFO,RECEIVESUBMITORDER} from './mutations-type'

export default{
    [RECEIVETRADEINFO](state,tradeInfo){
        state.tradeInfo=tradeInfo
    }
}