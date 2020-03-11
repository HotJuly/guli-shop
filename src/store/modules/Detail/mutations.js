import {RECEIVEDETAILINFO} from './mutations-type'

export default{
    [RECEIVEDETAILINFO](state,detailInfo){
        state.detailInfo=detailInfo;
    }
}