import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import axios from 'axios';
import router from './router';
import store from './vuex/store';
import * as filters from './filters'; //全局过滤器
import { SetMomentConfig, SetAxiosConfig, SetRouterTransition } from '@/assets/js/middleware'; //中间件
import '@/assets/css/iconfont.styl'; // 图标样式
import '@/assets/css/base.styl'; // 基础样式

// Vue全局设置
Vue.config.productionTip = false; //设置为false以阻止vue在启动时生成生产提示
Vue.prototype.$http = axios;

// 向Vue添加全局过滤器
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
});

// 配置中间件，包括Axios及路由等
SetMomentConfig();
SetAxiosConfig(router, store);
SetRouterTransition(router, store);

new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})