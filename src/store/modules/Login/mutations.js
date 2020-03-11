import {RECEIVEUSERINFO} from './mutations-type'

export default{
    [RECEIVEUSERINFO](state,userInfo){
        state.userInfo=userInfo
    }
}