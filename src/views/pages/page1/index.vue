<template>
	<div id="page1">
		<div class="bground">
			<div class="title">page1</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'page1',
		data() {
			return {}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#page1 {
		padding: 30px;
	}
	
	pre {
		margin-top: 5px;
		margin-bottom: 5px;
		padding: 5px;
		background-color: black;
		color: white;
		border-radius: 5px;
		width: fit-content;
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
			.torder {
				margin-top: 10px;
			}
			.code{
				font-size: 16px;
			}
		}
	}
</style>