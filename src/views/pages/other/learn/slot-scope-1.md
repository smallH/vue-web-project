<test-scope :book="book">
	<template slot="book" scope="props">
		<div>{{props.bookName}}</div>
	</template>
</test-scope>

<script>
	data() {
		return {
			book: {
				name: "我的故乡"
			}
		}
	}
</script>