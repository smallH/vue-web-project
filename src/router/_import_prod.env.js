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
	'pages/action/jsonserver': r => require.ensure([], () => r(require(`../views/pages/action/jsonserver/index`)), `pages/action/jsonserver/index`),
	'pages/action/proxy': r => require.ensure([], () => r(require(`../views/pages/action/proxy/index`)), `pages/action/proxy/index`),
	'pages/action/vx': r => require.ensure([], () => r(require(`../views/pages/action/vx/index`)), `pages/action/vx/index`),
	'pages/action/filter': r => require.ensure([], () => r(require(`../views/pages/action/filter/index`)), `pages/action/filter/index`),
	'pages/action/http': r => require.ensure([], () => r(require(`../views/pages/action/http/index`)), `pages/action/http/index`),
	'pages/action/routerasyn': r => require.ensure([], () => r(require(`../views/pages/action/routerasyn/index`)), `pages/action/routerasyn/index`),
	'pages/action/token': r => require.ensure([], () => r(require(`../views/pages/action/token/index`)), `pages/action/token/index`),
	'pages/action/iconfont': r => require.ensure([], () => r(require(`../views/pages/action/iconfont/index`)), `pages/action/iconfont/index`),
	'pages/action/thirdjs': r => require.ensure([], () => r(require(`../views/pages/action/thirdjs/index`)), `pages/action/thirdjs/index`),
	'pages/comp/uiconfirm': r => require.ensure([], () => r(require(`../views/pages/comp/uiconfirm/index`)), `pages/comp/uiconfirm/index`),
	'pages/comp/uimap': r => require.ensure([], () => r(require(`../views/pages/comp/uimap/index`)), `pages/comp/uimap/index`),
	'pages/comp/uimessage': r => require.ensure([], () => r(require(`../views/pages/comp/uimessage/index`)), `pages/comp/uimessage/index`),
	'pages/comp/uipagination': r => require.ensure([], () => r(require(`../views/pages/comp/uipagination/index`)), `pages/comp/uipagination/index`),
	'pages/comp/uiselect': r => require.ensure([], () => r(require(`../views/pages/comp/uiselect/index`)), `pages/comp/uiselect/index`),
	'pages/comp/uitable': r => require.ensure([], () => r(require(`../views/pages/comp/uitable/index`)), `pages/comp/uitable/index`),
	'pages/other/author': r => require.ensure([], () => r(require(`../views/pages/other/author/index`)), `pages/other/author/index`),
	'pages/other/learn': r => require.ensure([], () => r(require(`../views/pages/other/learn/index`)), `pages/other/learn/index`),
	'pages/other/virtualdom': r => require.ensure([], () => r(require(`../views/pages/other/virtualdom/index`)), `pages/other/virtualdom/index`)
};