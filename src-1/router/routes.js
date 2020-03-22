import Index from '../pages/Index/Index.vue'
import Detail from '../pages/Detail/Detail.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import AddCartSuccess from '../pages/AddCartSuccess/AddCartSuccess.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Trade from '../pages/Trade/Trade.vue'
import Pay from '../pages/Pay/Pay.vue'
import MyOrder from '../pages/MyOrder/MyOrder.vue'

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
        },
        props:route => ({ skuNum: route.query.skuNum,skuId:route.query.skuId }),
        beforeEnter(to, from, next){
            if(from.path==="/detail"){
                next();
            }else{
                next('/')
            }
        }
    },
    {
        path:"/shopcart",
        component:ShopCart,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:"/trade",
        component:Trade,
        meta:{
            isShowFooter:true
        },
        beforeEnter(to, from, next){
            if(from.path==="/shopcart"){
                next();
            }else{
                next('/shopcart')
            }
        }
    },
    {
        path:"/pay",
        component:Pay,
        meta:{
            isShowFooter:true
        },
        props:route => ({orderId:route.query.orderId}),
        beforeEnter(to, from, next){
            if(from.path==="/trade"){
                next();
            }else{
                next('/shopcart')
            }
        }
    },
    {
        path:"/myorder",
        component:MyOrder,
        meta:{
            isShowFooter:true
        },
        beforeEnter(to, from, next){
            const userInfo=window.localStorage.getItem('token');
            if(userInfo){
                next();
            }else{
                next('/login')
            }
        }
    }
]