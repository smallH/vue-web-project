<template>
	<v-dom :level="6">hello</v-dom>
</template>

<script>
	Vue.component('v-dom', {
		render: function(createElement) {
			return createElement(
				'h' + this.level, // tag name 标签名称
				this.$slots.default // 子组件中的阵列
			)
		},
		props: {
			level: {
				type: Number,
				required: true
			}
		}
	})
</script>