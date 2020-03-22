import {RECEIVEBASECATEGORYLIST} from './mutations-type'

export default{
    [RECEIVEBASECATEGORYLIST](state,list){
        state.baseCategoryList=list.slice(0,15)
    }
}