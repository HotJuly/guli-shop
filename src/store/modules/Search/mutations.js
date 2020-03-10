import {RECEIVELIST} from './mutations-type'

export default{
    [RECEIVELIST](state,list){
        state.list=list
    }
}