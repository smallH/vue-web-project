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
			needToken: false
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
				component: _import('pages/base/introduction'),
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/base/initialization',
				component: _import('pages/base/initialization'),
				name: '初始化',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/base/introduction',
				component: _import('pages/base/introduction'),
				name: '概述',
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
			},
			{
				path: '/pages/action/vx',
				component: _import('pages/action/vx'),
				name: 'vuex应用',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/action/token',
				component: _import('pages/action/token'),
				name: 'token验证',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/action/iconfont',
				component: _import('pages/action/iconfont'),
				name: 'iconfont图标管理',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/action/thirdjs',
				component: _import('pages/action/thirdjs'),
				name: '其它文件引用',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/comp/uiselect',
				component: _import('pages/comp/uiselect'),
				name: '下拉列',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/comp/uitable',
				component: _import('pages/comp/uitable'),
				name: '表格',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/comp/uipagination',
				component: _import('pages/comp/uipagination'),
				name: '分页',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/comp/uiconfirm',
				component: _import('pages/comp/uiconfirm'),
				name: '询问框',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/comp/uimessage',
				component: _import('pages/comp/uimessage'),
				name: '消息框',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/comp/uimap',
				component: _import('pages/comp/uimap'),
				name: '高德地图',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/other/author',
				component: _import('pages/other/author'),
				name: '作者',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/other/learn',
				component: _import('pages/other/learn'),
				name: '知识点总结',
				meta: {
					needToken: true
				}
			},
			{
				path: '/pages/other/virtualdom',
				component: _import('pages/other/virtualdom'),
				name: '虚拟DOM',
				meta: {
					needToken: true
				}
			}
		]
	}]
})