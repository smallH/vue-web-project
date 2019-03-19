/*路由异步组件懒加载*/
export function routerAsynFunc(file) {
	return routerAsyn[file];
};

const routerAsyn = {
	'login/index': r => require.ensure([], () => r(require(`../views/login/index`)), `login/index`),
	'core/index': r => require.ensure([], () => r(require(`../views/core/index`)), `core/index`),
	'pages/page1/index': r => require.ensure([], () => r(require(`../views/pages/page1/index`)), `pages/page1/index`),
	'pages/page2/index': r => require.ensure([], () => r(require(`../views/pages/page2/index`)), `pages/page2/index`),
};