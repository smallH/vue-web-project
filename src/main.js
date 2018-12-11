import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import store from './vuex/store'
import { SetMomentConfig, SetAxiosConfig, SetRouterTransition, SetFilter } from '@/assets/js/middleware'
import VueBus from '@/assets/js/vue-bus';
import '@/assets/fonts/iconfont.styl'
import '@/assets/css/base.styl'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
/* 中央事件总线插件 */
Vue.use(VueBus);
/* ElementUI组件库 */
Vue.use(ElementUI);
/* 中间件配置 */
SetMomentConfig();
SetFilter();
SetAxiosConfig(router, store);
SetRouterTransition(router, store);
/* 创建实例 */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})