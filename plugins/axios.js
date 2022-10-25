import axios from "axios";


// // 设置baseURL
// axios.defaults.baseURL = "https://apis.dingyang.net/api";

// Vue.prototype.$http = axios;

// // 创建axios对象，暴露
// export default axios.create();
const service=axios.create({
    // baseURL:"https://apis.dingyang.net/api",
    //production
    baseURL:"https://dyapis.dingyang.net"
    //mock
    // baseURL:"http://127.0.0.1:4523/m1/1770172-0-default/"
    // localhost
    // baseURL:"http://localhost:8083"
})
service.interceptors.request.use((request)=>{
  
    if(request.params){
        request.params["site"]='huayin'
    } 
        
    return request
})
// service.interceptors.request.use((res)=>{
//     return res
// })
export default service