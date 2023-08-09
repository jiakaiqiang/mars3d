import vue from 'vue';
import VueRouter from 'vue-router';
vue.use(VueRouter)
const routers = [
  {
    path:'/',
    redirect:"/home"
  },
  {
    path:'/home',
    name:'name',
    component:()=>import('../components/HelloWorld.vue')
  },
  {
    path:"/point",
    name:"point",
    component:()=>import('../components/point.vue')
  }
]
export default new VueRouter({routes: routers})