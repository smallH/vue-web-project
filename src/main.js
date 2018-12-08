import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import store from './vuex/store'
import { SetMomentConfig, SetAxiosConfig, SetRouterTransition, SetFilter } from '@/assets/js/middleware'
import VueBus from '@/assets/js/vue-bus';
import '@/assets/css/iconfont.styl'
import '@/assets/css/base.styl'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atelier-seaside-light.css'
Vue.use(VueHighlightJS)

Vue.use(VueBus); // 中央事件总线插件
Vue.config.productionTip = false; //设置为false以阻止vue在启动时生成生产提示

// 中间件配置
SetMomentConfig();
SetFilter();
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