import {RECEIVEUSERINFO,RESETUSERINFO,SETUSERINFO} from './mutations-type'

export default{
    [RECEIVEUSERINFO](state,userInfo){
        state.userInfo=userInfo
    },
    [RESETUSERINFO](state){
        state.userInfo={}
    },
    [SETUSERINFO](state,userInfo){
        state.userInfo=userInfo
    },
}