<template>
	<div id="learn">
		<div class="bground">
			<div class="title">常用知识点</div>
			<div class="line"></div>
			<div class="content">
				<div>关于vue的常用知识点总结与透析。</div>
				<div class="code-title">### 动态类名</div>
				<div class="page-4">
					<div>动态类名，如果表达式较长或逻辑复杂，应尽可能地优先使用计算属性。下列代码中 ["btn-" + this.size] 就是通过使用计算属性给元素动态设置类名：btn-large。</div>
					<div :class="dynclasses"><pre v-highlightjs><code class="javascript">我是通过计算出来的，我的字体比较大</code></pre></div>
				</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{dynclassesMD}}</code></pre>
					</div>
				</div>
				<div class="code-title">### 内置指令</div>
				<div class="page-5">
					<div>1.v-once指令：不需要表达式的指令，作用是使元素或组件只渲染一次，渲染后不随数据的变化而重新渲染，视为静态内容。该指令在业务中很少使用，当需要优化性能时可能会用到。</div>
					<div class="md" v-once>我始终只被渲染一次</div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vonceMD}}</code></pre>
					</div>
					<br />
					<div>2.v-if、v-else-if、v-else指令：条件渲染指令，当条件为真时当前元素、组件及所有子节点将被渲染。出于效率考虑，会尽可能地复用已有元素而非重新渲染，当给元素添加key属性后，则一定会重新渲染，。</div>
					<div>input元素复用：</div>
					<div>
						<div v-if="type === 'name'">
							<label>用户名：</label>
							<input placeholder="用户名(请先均输入文本)" />
						</div>
						<div v-else>
							<label>邮&nbsp;&nbsp;&nbsp;箱：</label>
							<input placeholder="邮箱(请先均输入文本)" />
						</div>
					</div>
					<div>input元素不复用：</div>
					<div>
						<div v-if="type === 'name'" key="name-input">
							<label>用户名：</label>
							<input placeholder="用户名(请先均输入文本)" />
						</div>
						<div v-else key="mail-input">
							<label>邮&nbsp;&nbsp;&nbsp;箱：</label>
							<input placeholder="邮箱(请先均输入文本)" />
						</div>
					</div>
					<button @click="handleToggleClick" style="margin-top: 5px;">切换输出类型</button>
					<br /><br />
					<div>3.v-show指令：与v-if的用法基本一致，只不过v-show是改变了元素的CSS属性display。选择情形：v-if更适合条件不经常改变的场景，因为它切换开销相对较大，而v-show适用于频繁切换条件。</div>
					<br />
					<div>4.使用v-for指令循环时实现过滤与排序</div>
					<div>
						<ul>
							<template v-for="item in filterItems">
								<li>{{item.name}}</li>
							</template>
						</ul>
					</div>
					<div>
						<div class="md">
							<pre v-highlightjs><code class="javascript">{{vforMD}}</code></pre>
						</div>
					</div>
				</div>
				<div class="code-title">### 关于v-model知识点</div>
				<div>1.@input代替v-model：使用v-model时，如果是中文输入法，一般在没有选定词组前，Vue不会更新数据，当敲下汉字时才会触发更新。如果希望总是实时更新，可以用@input代替v-model。</div>
				<div>
					<input type="text" @input="handleInput" />
					<p>输入内容为：{{message}}</p>
				</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vinputMD}}</code></pre>
					</div>
				</div>
				<br />
				<div>2.单选与复选中的v-model细节：单选和复选单独使用时，直接绑定真假即可，即picked匹配为true|false，代码如下。当组合使用时均用到v-model，v-model与input标签value属性匹配，单选组合picked匹配格式为字符串，复选组合picked匹配为字符串数组。</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">{{vmodelMD1}}</code></pre>
				</div>
				<br />
				<div>3.v-model修饰符：与事件修饰符类似，v-model也有修饰符，用于控制数据同步的时机。使用.lazy修饰符会转变为change事件中同步，此时message并不是实时改变，而是在失焦或按回车时更新</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">{{vmodelMD2}}</code></pre>
				</div><br />
				<div>使用.number修饰符可以将输入转换为Number类型，否则默认均为String类型</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">{{vmodelMD3}}</code></pre>
				</div><br />
				<div>使用.trim修饰符可以自动过滤输入的首尾空格</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">{{vmodelMD4}}</code></pre>
				</div>
				<div class="code-title">### 关于组件知识点</div>
				<div>1.组件入参大小写细节：由于HTML特性不区分大小写，当组件的入参props命名为驼峰式命名时，在组件应用时要转为短横分隔命名才会生效，实际业务中建议应尽量使用小写命名。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vcompMD1}}</code></pre>
					</div>
				</div>
				<br />
				<div>2.组件入参变量，如果直接传递数字、布尔值、数组、对象，而不使用v-bind，传递的仅仅是字符串。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vcompMD2}}</code></pre>
					</div>
				</div>
				<br />
				<div>3.组件通信原则，通过props入参，通过$emit往外抛出事件。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vcompMD3}}</code></pre>
					</div>
				</div>
				<br />
				<div>4.事件管理实现除了使用vuex外，还可以使用bus事件管理器，具体看项目规模按需选择。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vcompMD4}}</code></pre>
					</div>
				</div>
				<br />
				<div>5.除了通过双向绑定，watch监听变量变化外，也可以通过$refs手动去调用子组件内部的方法或修改变量。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vcompMD5}}</code></pre>
					</div>
				</div>
				<br />
				<div>6.一种特殊的slot用法，作用域插槽：使用场景是内容渲染权由使用者掌握，但数据可以通过子组件临时变量获取。即入参json属性数据需要通过子组件方法计算或封装才可使用，但实际上是由使用者渲染时，可以通过这种方法解决。实际业务中，这类slot用法较少。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{sscopeMD1}}</code></pre>
					</div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{sscopeMD2}}</code></pre>
					</div>
				</div>
				<div>
					<test-scope :book="book">
						<template slot="book" slot-scope="props">
							<div>{{props.bookName}}</div>
						</template>
					</test-scope>
				</div>
				<br />
				<div>7.$nextTick机制：Vue在观察到数据变化时并不是直接更新DOM，而是开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。在缓冲时会除去重复数据，从而避免不必要的计算和DOM操作。然后，在下一个事件循环tick中，Vue刷新队列并执行实际（已去重的）工作。所以如果用一个for循环来动态改变数据100次，其实它只会应用最后一次改变。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vnexttickMD}}</code></pre>
					</div>
				</div>
				<br />
				<div>8.组件嵌套子组件，可以通过this.$children获取子组件数量及data数据，自定义组件嵌套，一般使用不具名的slot标签。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{snestingMD1}}</code></pre>
					</div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{snestingMD2}}</code></pre>
					</div>
				</div>
				<div class="code-title">### 关于自定义指令知识点</div>
				<div>1.自定义指令分为全局和局部注册</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vdireMD1}}</code></pre>
					</div>
				</div>
				<br />
				<div>2.自定义指令包括5种钩子函数：bind、inserted、update、componentUpadate、unbind。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vdireMD2}}</code></pre>
					</div>
					<div>每个钩子函数都有以下几个参数可用：</div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vdireMD3}}</code></pre>
					</div>
				</div>
				<br />
				<div>3.自定义指令为绑定函数时的处理方法：如点击组件范围外，触发隐藏函数事件。</div>
				<div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vdireMD4}}</code></pre>
					</div>
					<div>注册v-clickoutside指令：</div>
					<div class="md">
						<pre v-highlightjs><code class="javascript">{{vdireMD5}}</code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import dynclassesMD from './dyn-classes.md';
	import vonceMD from './v-once.md';
	import vforMD from './v-for.md';
	import vinputMD from './v-input.md';

	import vmodelMD1 from './v-model-1.md';
	import vmodelMD2 from './v-model-2.md';
	import vmodelMD3 from './v-model-3.md';
	import vmodelMD4 from './v-model-4.md';

	import vcompMD1 from './v-comp-1.md';
	import vcompMD2 from './v-comp-2.md';
	import vcompMD3 from './v-comp-3.md';
	import vcompMD4 from './v-comp-4.md';
	import vcompMD5 from './v-comp-5.md';
	import vnexttickMD from './v-nexttick.md';
	import sscopeMD1 from './slot-scope-1.md';
	import sscopeMD2 from './slot-scope-2.md';
	import snestingMD1 from './slot-nesting-1.md';
	import snestingMD2 from './slot-nesting-2.md';

	import vdireMD1 from './v-directive-1.md';
	import vdireMD2 from './v-directive-2.md';
	import vdireMD3 from './v-directive-3.md';
	import vdireMD4 from './v-directive-4.md';
	import vdireMD5 from './v-directive-5.md';
	import TestScope from '@/components/test-scope.vue'

	export default {
		name: 'learn',
		data() {
			return {
				size: "large",
				disabled: true,
				type: "name",
				items: [{
					name: "大熊猫"
				}, {
					name: "北极熊"
				}, {
					name: "黑豹"
				}],
				message: "",
				book: {
					name: "我的故乡"
				},
				dynclassesMD: dynclassesMD,
				vonceMD: vonceMD,
				vforMD: vforMD,
				vinputMD: vinputMD,
				vmodelMD1: vmodelMD1,
				vmodelMD2: vmodelMD2,
				vmodelMD3: vmodelMD3,
				vmodelMD4: vmodelMD4,
				vcompMD1: vcompMD1,
				vcompMD2: vcompMD2,
				vcompMD3: vcompMD3,
				vcompMD4: vcompMD4,
				vcompMD5: vcompMD5,
				vnexttickMD: vnexttickMD,
				sscopeMD1: sscopeMD1,
				sscopeMD2: sscopeMD2,
				snestingMD1: snestingMD1,
				snestingMD2: snestingMD2,
				vdireMD1: vdireMD1,
				vdireMD2: vdireMD2,
				vdireMD3: vdireMD3,
				vdireMD4: vdireMD4,
				vdireMD5: vdireMD5
			}
		},
		computed: {
			dynclasses: function() {
				return ["btn", "md",
					{
						["btn-" + this.size]: this.size !== "",
						["disabled"]: this.disabled
					}
				]
			},
			filterItems: function() {
				return this.items.filter(function(item) {
					return item.name.match(/熊/); // 筛选出带'熊'字的项
				});
			},
			sortedItems: function() {
				return this.items.sort(function(a, b) {
					return a.name.length > b.name.length; // 由短到长
				});
			}
		},
		components: {
			TestScope
		},
		methods: {
			handleToggleClick: function() {
				this.type = this.type === 'name' ? 'mail' : 'name';
			},
			handleInput: function(e) {
				this.message = e.target.value;
			}
		},
		mounted() {
			this.msg = "go!";
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#learn {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 30px;
		font-weight: bold;
	}
	
	.md {
		margin-top: 10px;
		font-size: 16px;
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
	
	.page-4 {
		.btn-large {
			font-size: large;
		}
	}
</style>