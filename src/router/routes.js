import Index from '../pages/Index/Index.vue'
import Detail from '../pages/Detail/Detail.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import AddCartSuccess from '../pages/AddCartSuccess/AddCartSuccess.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default [
    {
        path:"/",
        component:Index,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:"/detail",
        component:Detail,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:"/search",
        component:Search,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:"/login",
        component:Login,
        beforeEnter(to, from, next){
            if(window.localStorage.getItem('token'))return;
            next();
        }
    },
    {
        path:"/addcartsuccess",
        component:AddCartSuccess,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:"/shopcart",
        component:ShopCart,
        meta:{
            isShowFooter:true
        }
    }
]