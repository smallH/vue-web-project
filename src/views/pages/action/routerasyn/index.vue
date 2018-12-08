<template>
	<div id="routerasyn">
		<div class="bground">
			<div class="title">路由异步懒加载</div>
			<div class="line"></div>
			<div class="content">
				<div>懒加载也叫延迟加载，即在需要的时候进行加载，随用随载。在单页应用中，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，延时过长，不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时，仅在build打包代码时才用到懒加载。懒加载模块位于root/src/router/_import_prod.env.js</div>
				<div class="code-title"></div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// _import_prod.env.js
export function routerAsynFunc(file) {
	return routerAsyn[file];
};

const routerAsyn = {
	'login/index': r => require.ensure([], () => r(require(`../views/login/index`)), `login/index`)
};</code></pre>
				</div>
				<div class="code-title">路由定义页面：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// _import_dev.env.js
module.exports = (fileUrl) => {
	return resolve => require(['../views/' + fileUrl], resolve);
}

// router/index.js
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
	}]
})</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'routerasyn',
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#routerasyn {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 10px;
		font-weight: bold;
	}
	
	.md {
		margin-top: 10px;
		font-size: 18px;
	}
	
	.bground {
		width: 100%;
		height: 100%;
		min-height: 500px;
		background-color: #fff;
		border-radius: 5px;
		.title {
			font-size: 36px;
		}
		.line {
			margin-top: 20px;
			border-bottom: solid 1px #E4E4E4;
		}
		.content {
			margin-top: 10px;
		}
	}
	
	.param {
		display: flex;
		.param-input {
			width: 200px;
			input {
				font-size: 16px;
				width: 100%;
				height: 30px;
				border: solid 1px #DCDFE6;
				border-radius: 3px;
			}
			input:focus {
				outline: none;
				border: 1px solid #009688;
			}
		}
		.param-btn {
			cursor: pointer;
			border-radius: 3px;
			background-color: #009688;
			color: white;
			width: fit-content;
			padding: 5px;
			margin-left: 10px;
		}
	}
</style>