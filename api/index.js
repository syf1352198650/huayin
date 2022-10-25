
import service from "~/plugins/axios";
export function getdata(params){
    // console.log(1111111111111111111111);
    return service({
        headers: {
            'Content-Type':'text/html; charset=utf-8'

        },
        url:'/articles',
        method:'get',
        params:params
    })
}
export function getImage(){
    return service({
        url:"/assets",
        method:'get',
        params:{category:'image'}
    })
}
export function getArticle(params){
    // console.log(11111);
    return service({
        headers: {
            'Content-Type':'text/html; charset=utf-8'

        },
        url:"/articles",
        method:'get',
        params:params
    })
}
export function showEditArtial(id){
    console.log(11111);
    return service({
        url:"/articles/"+id,
        method:'get',
    })
}