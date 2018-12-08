<template>
	<div id="routerparam">
		<div class="bground">
			<div class="title">路由传递参数</div>
			<div class="line"></div>
			<div class="content">
				<div>路由切换页面时，若需要页面间传递参数，可使用 push：</div>
				<div class="code-title"></div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// 路由跳转并传参
	this.$router.push({
		path: '/somewhere', //其它页面的path地址
		data: {
			id: "" ,
			name:""
		}
	})
	
	// 新页面接受传递的参数
	this.$route.data; // {id:"", name:""}</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'routerparam',
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#routerparam {
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