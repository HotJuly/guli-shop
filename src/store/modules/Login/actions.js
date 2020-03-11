import {reqLogin} from '../../../api/index'
import {RECEIVEUSERINFO} from './mutations-type'


export default{
    async toLogin({commit},data){
        const cb=data.callback;
        delete data.callback
        const result=await reqLogin(data);
        if(result.code===200){
            window.localStorage.setItem('token',result.data.token)
            commit(RECEIVEUSERINFO,result.data)
            cb&&cb();
        }
    }
}