import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const _import =
	process.env.NODE_ENV == "production" ?
	require("./_import_prod.env").routerAsynFunc :
	require("./_import_dev.env");

export default new VueRouter({
	mode: 'hash',
	routes: [{
		path: '/',
		name: 'login',
		component: _import('login/index'),
		meta: {
			requireAuth: false
		}
	},{
		path: '/core',
		component: _import('core/index'),
		meta: {
			requireAuth: false
		},
		children: [{
				path: '/',
				name: 'page1',
				component: _import('pages/page1'),
				meta: {
					requireAuth: true
				}
			},{
				path: '/pages/page1',
				name: 'page1',
				component: _import('pages/page1'),
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/page2',
				name: 'page2',
				component: _import('pages/page2'),
				meta: {
					requireAuth: true
				}
			}
		]
	}]
})