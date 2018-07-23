/*路由异步组件懒加载*/
export function routerAsynFunc(file) {
	return routerAsyn[file];
};

const routerAsyn = {
	'login/index': r => require.ensure([], () => r(require(`../views/login/index`)), `admin/login`),
	'home/index': r => require.ensure([], () => r(require(`../views/home/index`)), `admin/home`),
	'home/child': r => require.ensure([], () => r(require(`../views/home/child`)), `admin/home/child`),
	'home/child1': r => require.ensure([], () => r(require(`../views/home/child1`)), `admin/home/child1`),
	'home/child2': r => require.ensure([], () => r(require(`../views/home/child2`)), `admin/home/child2`)
};