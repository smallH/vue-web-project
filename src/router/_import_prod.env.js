/*路由异步组件懒加载*/
export function routerAsynFunc(file) {
	return routerAsyn[file];
};

const routerAsyn = {
	'login/index': r => require.ensure([], () => r(require(`../views/login/index`)), `login/index`),
	'core/index': r => require.ensure([], () => r(require(`../views/core/index`)), `core/index`),
	'pages/base/initialization': r => require.ensure([], () => r(require(`../views/pages/base/initialization/index`)), `pages/base/initialization/index`),
	'pages/base/introduction': r => require.ensure([], () => r(require(`../views/pages/base/introduction/index`)), `pages/base/introduction/index`),
	'pages/action/param': r => require.ensure([], () => r(require(`../views/pages/action/param/index`)), `pages/action/param/index`),
	'pages/action/param/getparam': r => require.ensure([], () => r(require(`../views/pages/action/param/getparam`)), `pages/action/param/getparam`),
	'pages/action/jsonserver': r => require.ensure([], () => r(require(`../views/pages/action/jsonserver/index`)), `pages/action/jsonserver/index`),
	'pages/action/proxy': r => require.ensure([], () => r(require(`../views/pages/action/proxy/index`)), `pages/action/proxy/index`),
	'pages/action/vx': r => require.ensure([], () => r(require(`../views/pages/action/vx/index`)), `pages/action/vx/index`),
	'pages/action/token': r => require.ensure([], () => r(require(`../views/pages/action/token/index`)), `pages/action/token/index`),
	'pages/action/iconfont': r => require.ensure([], () => r(require(`../views/pages/action/iconfont/index`)), `pages/action/iconfont/index`),
	'pages/action/thirdjs': r => require.ensure([], () => r(require(`../views/pages/action/thirdjs/index`)), `pages/action/thirdjs/index`)
};