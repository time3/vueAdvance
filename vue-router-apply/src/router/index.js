import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'; // 存放映射表的
// 第三方插件 引入后 要使用Vue.use()  =>  install

Vue.use(VueRouter); // install方法中 注册了两个全局组件 router-link router-view
// 会在每个组件上定义两个属性 $router $route  this.$router  this.$route


export default new VueRouter({
    mode:'hash', // h5api
    routes
});