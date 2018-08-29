<template>
	<div id="vdom">
		<div class="bground">
			<div class="title">Render函数</div>
			<div class="line"></div>
			<div class="content">
				<div></div>
				<div class="code-title">### Virtual Dom 虚拟DOM</div>
				<div>
					<div>DOM是文档对象模型(Document Object Model)的简写，在浏览器中我们可以通过js来操作DOM，但是这样的操作性能很差，于是Virtual Dom应运而生。Virtual Dom就是在js中模拟DOM对象树来优化DOM操作的一种技术或思路，其中Virtual Dom对象树的每个节点用VNode表示。当发生变化时，就对同级VNode进行Diff算法，最终通过Rander函数渲染VNode节点组成的对象树实现DOM操作。</div>
					<div class="md">
						<pre><code>{{vnodeformatMD}}</code></pre>
					</div>
				</div>
				<br />
				<div class="code-title">### Render函数中createElement创建VNode节点</div>
				<div>
					<div>Render函数通过createElement参数来创建Virtual Dom对象树，createElement构成了Vue Virtual Dom的模板，它有3个参数：</div>
					<div class="md">
						<pre><code>{{createelementMD}}</code></pre>
					</div>
					<div class="top">下面是一些由浅至深的用渲染创建组件的简单例子，当使用手脚架框架通过.vue文件引入渲染实现的组件时，则去掉模板中template标签即可</div>
					<div class="md">
						<pre><code>{{vnodedemo1MD}}</code></pre>
					</div>
					<div class="top">渲染多个相同的子节点：</div>
					<div class="md">
						<pre><code>{{vnodedemo2MD}}</code></pre>
					</div>
					<div class="top">通过渲染实现v-if、v-else和v-for循环：</div>
					<div class="md">
						<pre><code>{{vnodedemo3MD}}</code></pre>
					</div>
					<div class="top">v-model语法糖渲染实现：</div>
					<div class="md">
						<pre><code>{{vnodedemo4MD}}</code></pre>
					</div>
					<div class="top">多个组件中根据参数动态选择组件：</div>
					<div class="md">
						<pre><code>{{vnodedemo5MD}}</code></pre>
					</div>
					<div class="top">jsx写法：</div>
					<div class="md">
						<pre><code>{{vnodedemo6MD}}</code></pre>
					</div>
				</div>
				<!--使用渲染创建组件-->
				<!--<v-dom :level="6">hello</v-dom>-->
				<!--渲染约束原则:渲染多个相同的子节点-->
				<!--<ele></ele>-->
				<!--通过渲染实现v-if、v-else和v-for循环-->
				<!--<ele-list :list="list"></ele-list>
				<button @click="showlist">显示列表</button>-->
				<!--v-model语法渲染实现-->
				<!--<ele-model></ele-model>-->
				<!--多个组件中根据参数动态选择组件-->
				<!--<smart-item type='img' data='imgtype组件'></smart-item>-->
				<!--jsx写法-->
				<!--<jsx-item></jsx-item>-->
				<!--中央事件总线测试-->
				<!--<v-bus></v-bus>-->
			</div>
		</div>
	</div>
</template>

<script>
	import VDom from '@/components/test-vdom.vue'
	import Vue from 'vue';
	import VBus from '@/components/test-vbus.vue'

	import vnodeformatMD from './VNodeFormat.md';
	import createelementMD from './CreateElement.md';
	import vnodedemo1MD from './VNodeDemo1.md';
	import vnodedemo2MD from './VNodeDemo2.md';
	import vnodedemo3MD from './VNodeDemo3.md';
	import vnodedemo4MD from './VNodeDemo4.md';
	import vnodedemo5MD from './VNodeDemo5.md';
	import vnodedemo6MD from './VNodeDemo6.md';

	// 使用渲染创建组件
	//	Vue.component('v-dom', {
	//		render: function(createElement) {
	//			return createElement(
	//				'h' + this.level, // tag name 标签名称
	//				this.$slots.default // 子组件中的阵列
	//			)
	//		},
	//		props: {
	//			level: {
	//				type: Number,
	//				required: true
	//			}
	//		}
	//	})

	// 渲染约束原则:渲染多个相同的子节点
	//	Vue.component('ele', {
	//		render: function(createElement) {
	//			var ChildNode = createElement('p', 'hello');
	//			// 设置子节点有多个相同的元素，方法1
	//			return createElement('div', [ChildNode, ChildNode]);
	//
	//			// 设置子节点有多个相同的元素，方法2，推荐用这种
	//			return createElement('div',
	//				Array.apply(null, {
	//					length: 5
	//				}).map(function() {
	//					return createElement('p', 'hello');
	//				})
	//			);
	//		}
	//	});

	// 通过渲染实现v-if、v-else和v-for循环
	//	Vue.component('ele-list', {
	//		render: function(createElement) {
	//			if(this.list.length) {
	//				return createElement('ul', this.list.map(function(item) {
	//					return createElement('li', item);
	//				}));
	//			} else {
	//				return createElement('p', '列表为空');
	//			}
	//		},
	//		props: {
	//			list: {
	//				type: Array,
	//				default: function() {
	//					return [];
	//				}
	//			}
	//		}
	//	});

	// v-model语法渲染实现
	//	Vue.component('ele-model', {
	//		render: function(createElement) {
	//			var _this = this;
	//			return createElement('div', [
	//				createElement('input', {
	//					domProps: {
	//						value: this.value
	//					},
	//					on: {
	//						input: function(e) {
	//							_this.value = e.target.value;
	//						}
	//					}
	//				}),
	//				createElement('p', 'value:' + this.value)
	//			]);
	//		},
	//		data: function() {
	//			return {
	//				value: ''
	//			}
	//		}
	//	});

	// 多个组件中根据参数动态选择组件
	//	Vue.component('img-item', {
	//		render: function(createElement) {
	//			return createElement('p', this.data);
	//		},
	//		props: {
	//			data: {
	//				type: String,
	//				default: '图片组件'
	//			}
	//		}
	//	});
	//
	//	Vue.component('video-item', {
	//		render: function(createElement) {
	//			return createElement('p', this.data);
	//		},
	//		props: {
	//			data: {
	//				type: String,
	//				default: '视频组件'
	//			}
	//		}
	//	});
	//
	//	Vue.component('smart-item', {
	//		render: function(createElement) {
	//			var _this = this;
	//
	//			function getComponent() {
	//				if(_this.type == 'img') {
	//					return 'img-item';
	//				} else {
	//					return 'video-item';
	//				}
	//			}
	//			return createElement(getComponent(), {
	//				props: {
	//					data: _this.$props.data
	//				}
	//			}, this.$slots.default);
	//		},
	//		props: {
	//			type: {
	//				type: String
	//			},
	//			data: {
	//				type: String
	//			}
	//		}
	//	});

	// jsx写法，需引入 "babel-plugin-transform-vue-jsx"
	//	Vue.component('jsx-item', {
	//		render: function(h) {
	//			return(
	//				<div>
	//					<ul>
	//						<li>jsx.1</li>
	//						<li>jsx.2</li>
	//					</ul>
	//				</div>
	//			)
	//		}
	//	});

	export default {
		name: 'vdom',
		data() {
			return {
				vnodeformatMD: vnodeformatMD,
				createelementMD: createelementMD,
				vnodedemo1MD: vnodedemo1MD,
				vnodedemo2MD: vnodedemo2MD,
				vnodedemo3MD: vnodedemo3MD,
				vnodedemo4MD: vnodedemo4MD,
				vnodedemo5MD: vnodedemo5MD,
				vnodedemo6MD: vnodedemo6MD,
				list: []
			}
		},
		methods: {
			showlist: function() {
				this.list = ['数组项A', '数组项B', '数组项C'];
			},
			clickHandle: function() {}
		},
		mounted() {},
		components: {
			VDom,
			VBus
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#vdom {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 10px;
		font-weight: bold;
	}
	
	.md {
		color: white;
		background-color: black;
		padding: 10px;
		margin-top: 10px;
		border-radius: 3px;
		font-size: 16px;
		width: 1000px;
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
	
	.top {
		margin-top: 20px;
	}
</style>