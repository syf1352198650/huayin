
import service from "~/plugins/axios";
export function getdata(params){
    // console.log(1111111111111111111111);
    return service({
        url:'/huayin/get-articles',
        method:'get',
        params:params
    })
}
export function getImage(){
    return service({
        url:"/huayin/get-img?name=1-4.webp",
        method:'get',
    })
}
export function getArticle(params){
    return service({
        url:"/huayin/get-articles",
        method:'get',
        params:params
    })
}
export function showEditArtial(id){
    return service({
        url:"/huayin/show-edit-article/"+id,
        method:'get',
    })
}