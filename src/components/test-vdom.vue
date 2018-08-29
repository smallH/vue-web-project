// 渲染测试
<script>
	export default {
		name: "vdom",
		render: function(createElement) {
			return createElement(
				'h' + this.level, // tag name 标签名称
				{
					'class': {
						foo: true
					},
					attrs: {
						id: 'foo'
					},
					on: {
						click: this.clickHandler
					}
				},
				this.$slots.default // 不具名slot分发内容
			)
		},
		props: {
			level: {
				type: Number,
				required: true
			}
		},
		methods: {
			clickHandler: function() {
				console.log('clickHandler');
			}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.foo {
		color: red;
	}
</style>