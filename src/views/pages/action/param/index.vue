<template>
	<div id="paramindex">
		<div class="bground">
			<div class="title">页面明文传参</div>
			<div class="line"></div>
			<div class="content">
				<div class="code-title">Demo：</div>
				<div class="param">
					<div class="param-input">
						<input type="text" v-model="inputText" />
					</div>
					<div class="param-btn" @click="paramBtn">传递参数</div>
				</div>
				<div class="code-title">核心代码：</div>
				<div class="md">
					<pre><code>{{md}}</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import paramCodeMD from './code.md'

	export default {
		name: 'paramindex',
		data() {
			return {
				inputText: "",
				md: paramCodeMD
			}
		},
		methods: {
			paramBtn() {
				let _this = this;
				this.$router.push({
					path: '/pages/action/param/getparam',
					query: {
						data: _this.inputText
					}
				})
			}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#paramindex {
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