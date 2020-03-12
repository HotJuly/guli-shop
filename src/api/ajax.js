import axios from 'axios'

const ajax=axios.create({
    baseURL:"/api",
    timeout:5000
})


ajax.interceptors.request.use((config)=>{
    const userInfo=window.localStorage.getItem('token');
    if(userInfo){
        config.headers['token']=JSON.parse(userInfo).token;
    }
    return config
},(error)=>{
    return Promise.reject(error)
})

ajax.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})

export default ajax;