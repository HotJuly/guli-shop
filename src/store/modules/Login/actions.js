import {reqLogin,reqLogout} from '../../../api/index'
import {RECEIVEUSERINFO,RESETUSERINFO,SETUSERINFO} from './mutations-type'


export default{
    async toLogin({commit},data){
        const cb=data.callback;
        delete data.callback
        const result=await reqLogin(data);
        if(result.code===200){
            window.localStorage.setItem('token',JSON.stringify(result.data))
            commit(RECEIVEUSERINFO,result.data)
            cb&&cb();
        }
    },
    async userLogout({commit}){
        const result=await reqLogout();
        if(result.code===200){
            window.localStorage.removeItem('token');
            commit(RESETUSERINFO);
        }
    },
    async autoLogin({commit},userInfo){
        commit(SETUSERINFO,userInfo);
    }
}