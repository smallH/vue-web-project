<!-- 组件test-scope.vue -->
<template>
	<div>
		<slot name="book" :book-name="redo(book.name)"></slot>
	</div>
</template>

<script>
	export default {
		name: "TestScope",
		data() {
			return {}
		},
		props: {
			book: {
				type: Object
			}
		},
		methods: {
			redo: function(name) {
				return(name + ".后缀"); // 封装属性
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>