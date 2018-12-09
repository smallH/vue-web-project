/*路由异步组件懒加载*/
export function routerAsynFunc(file) {
	return routerAsyn[file];
};

const routerAsyn = {
	'login/index': r => require.ensure([], () => r(require(`../views/login/index`)), `login/index`),
	'core/index': r => require.ensure([], () => r(require(`../views/core/index`)), `core/index`)
};