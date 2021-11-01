import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TransferCenters from "@/views/TransferCenters";
import AdmineLogin from "@/views/AdmineLogin"
import Test from "@/views/Test";
import CustomerLogin from "@/views/CustomerLogin";
import Register from "@/views/Register";
import AdmineHome from "@/views/AdmineHome";
import CustomerHome from "@/views/CustomerHome";
import ForgetPwd from "@/views/ForgetPwd";
import NewPassword from "@/views/NewPassword";
import Undo from "@/views/Undo";
import Doing from "@/views/Doing";
import Done from "@/views/Done";
import Sum from "@/views/Sum";
import OrderDetail from "@/views/OrderDetail";
import TransferCenter from "@/views/TransferCenter";
import mail from "@/views/mail";

import dincang from "@/views/dincang";
import xcx from "@/views/xcx";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: TransferCenters
  },
  {
    path: '/adminelogin',
    name: 'AdmineLogin',
    component: AdmineLogin
  },
  {
    path: '/customerlogin',
    name: 'CustomerLogin',
    component: CustomerLogin
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/adminehome',
    name: 'AdmineHome',
    component: AdmineHome
  },
  {
    path: '/customerhome',
    name: 'CustomerHome',
    component: CustomerHome
  },
  {
    path: '/forget',
    name: 'ForgetPwd',
    component: ForgetPwd
  },
  {
    path: '/newpassword',
    name: 'NewPassword',
    component: NewPassword
  },
  {
    path: '/undo',
    name: 'Undo',
    component: Undo
  },
  {
    path: '/doing',
    name: 'Doing',
    component: Doing
  },
  {
    path: '/done',
    name: 'Done',
    component: Done
  },
  {
    path: '/sum',
    name: 'Sum',
    component: Sum
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: OrderDetail
  },
  {
    path: '/transfercenter',
    name: 'TransferCenter',
    component: TransferCenter
  },
  {
    path: '/mail',
    name: 'mail',
    component: mail
  },
  {
    path: '/dincang',
    name: 'dincang',
    component: dincang
  },
  {
    path: '/xcx',
    name: 'xcx',
    component: xcx
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
