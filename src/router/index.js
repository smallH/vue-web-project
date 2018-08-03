import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const _import =
	process.env.NODE_ENV == "production" ?
	require("./_import_prod.env").routerAsynFunc :
	require("./_import_dev.env");

export default new VueRouter({
	routes: [{
		path: '/',
		name: 'login',
		component: _import('login/index'),
		meta: {
			needToken: true
		}
	}, {
		path: '/core',
		name: 'core',
		component: _import('core/index'),
		meta: {
			needToken: true
		},
		children: [{
				path: '/',
				name: '概述',
				component: _import('pages/base/initialization'),
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/base/initialization',
				component: _import('pages/base/initialization'),
				name: '概述',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/base/introduction',
				component: _import('pages/base/introduction'),
				name: '初始化',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/action/param',
				component: _import('pages/action/param'),
				name: '页面明文传参',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/action/param/getparam',
				component: _import('pages/action/param/getparam'),
				name: '页面明文传参',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/action/jsonserver',
				component: _import('pages/action/jsonserver'),
				name: 'json-server',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/action/proxy',
				component: _import('pages/action/proxy'),
				name: '服务代理',
				meta: {
					needToken: true
				}
			}
		]
	}]
})