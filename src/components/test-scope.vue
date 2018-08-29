// 作用域插槽测试
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
				return(name + ".后缀");
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>