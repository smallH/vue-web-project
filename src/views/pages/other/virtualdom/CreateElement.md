<script>
    createElement {
		// {String | Object | Function}    	
    	// 一个HTML标签，组件选项，或一个函数
    	// 必须Return 上述其中一个
    	'div'，
    	// {Object}
    	// 一个对应属性的数据对象，可选
    	{
			// 和`v-bind:class`一样的 API
			'class': {
				foo: true,
				bar: false
			},
			// 和`v-bind:style`一样的 API
			style: {
				color: 'red',
				fontSize: '14px'
			},
			// 正常的 HTML 特性
			attrs: {
				id: 'foo'
			},
			// 该节点为子节点时传递参数 props
			props: {
				myProp: 'bar'
			},
			// DOM 属性
			domProps: {
				innerHTML: 'baz'
			},
			// 事件监听器基于 "on"
			// 所以不再支持如 v-on:keyup.enter 修饰器
			// 需要手动匹配 keyCode。
			on: {
				click: this.clickHandler
			},
			// 仅对于组件，用于监听原生事件，而不是组件使用 vm.$emit 触发的事件。
			nativeOn: {
				click: this.nativeClickHandler
			},
			// 自定义指令. 注意事项：不能对绑定的旧值设值
			// Vue 会为您持续追踨
			directives: [{
				name: 'my-custom-directive',
				value: '2'
				expression: '1 + 1',
				arg: 'foo',
				modifiers: {
					bar: true
				}
			}],
			// 如果子组件有定义 slot 的名称
			slot: 'name-of-slot'
			// 其他特殊顶层属性
			key: 'myKey',
			ref: 'myRef'
		},
		// {String | Array}
		// 子节点VNode，可选
		[
			createElement('h1', 'hello world'),
			createElement(MyCompont, {
				props:{
					id: 'myid'
				}
			}),
			'text'
		]
    }
</script>