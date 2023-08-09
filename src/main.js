import Vue from 'vue'
import App from './App.vue'
//在main.js中加入下面代码
import "mars3d-cesium/Build/Cesium/Widgets/widgets.css" //依赖的cesium库本身css
import "mars3d/dist/mars3d.css";
import * as mars3d from "mars3d";
import mars3dCesium from 'mars3d-cesium'
 import router from './rotuer/index'
//可以绑定下vue原型链，可以全局使用
Vue.prototype.mars3d = mars3d;
 
//在具体使用的vue等文件中
//直接使用 this.mars3d 进行相关调用。
window.mars3d= mars3d
Vue.prototype.mars3dCesium =  mars3dCesium
window.Cesium= mars3dCesium
Vue.config.productionTip = false
 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')