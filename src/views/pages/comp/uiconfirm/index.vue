<template>
	<div id="uiconfirm">
		<div class="bground">
			<div class="title">询问框</div>
			<div class="line"></div>
			<div class="content">
				<div>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</div>
				<div class="code-title">基础用法：</div>
				<div class="confirm-btn" @click="confirmBtn">弹出询问框</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'uiconfirm',
		data() {
			return {}
		},
		components: {},
		methods: {
			confirmBtn: function() {
				this.$globalConfirm("提示", "确认要删除吗？", () => {
					console.log("确定");
				}, () => {
					console.log("取消");
				});
			}
		},
		mounted() {},
		watch: {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#uiconfirm {
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
	
	.confirm-btn {
		cursor: pointer;
		border-radius: 3px;
		background-color: #009688;
		color: white;
		width: fit-content;
		padding: 5px;
		margin-top: 10px;
	}
</style>