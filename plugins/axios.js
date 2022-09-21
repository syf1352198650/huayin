import axios from "axios";


// // 设置baseURL
// axios.defaults.baseURL = "https://apis.dingyang.net/api";

// Vue.prototype.$http = axios;

// // 创建axios对象，暴露
// export default axios.create();
const service=axios.create({
    baseURL:"https://apis.dingyang.net/api",
})
// service.interceptors.request.use((request)=>{
//     return request
// })
// service.interceptors.request.use((res)=>{
//     return res
// })
export default service