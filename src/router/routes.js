import Index from '@/pages/Index'
import Detail from '@/pages/Detail'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import MyOrder from '@/pages/MyOrder'
import {getUserInfo} from '@/utils/storageUtils'

export default [{
    path: "/",
    component: Index,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/detail",
    component: Detail,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/search",
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/login",
    component: Login,
    beforeEnter(to, from, next) {
      if (getUserInfo().token) {
        next('/')
      } else {
        next();
      }
      
    }
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: {
      isShowFooter: true
    },
    props: route => ({
      skuNum: route.query.skuNum,
      skuId: route.query.skuId
    }),
    beforeEnter(to, from, next) {
      if (from.path === "/detail") {
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/trade",
    component: Trade,
    meta: {
      isShowFooter: true
    },
    beforeEnter(to, from, next) {
      if (from.path === "/shopcart") {
        next();
      } else {
        next('/shopcart')
      }
    }
  },
  {
    path: "/pay",
    component: Pay,
    meta: {
      isShowFooter: true
    },
    props: route => ({
      orderId: route.query.orderId
    }),
    beforeEnter(to, from, next) {
      if (from.path === "/trade") {
        next();
      } else {
        next('/shopcart')
      }
    }
  },
  {
    path: "/myorder",
    component: MyOrder,
    meta: {
      isShowFooter: true
    }
  }
]