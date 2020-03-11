import axios from 'axios'

const ajax=axios.create({
    baseURL:"/api",
    timeout:5000
})


ajax.interceptors.request.use((config)=>{
    const token=window.localStorage.getItem('token');
    if(token){
        config.headers['token']=token;
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