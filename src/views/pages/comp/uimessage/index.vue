<template>
	<div id="uimessage">
		<div class="bground">
			<div class="title">消息框</div>
			<div class="line"></div>
			<div class="content">
				<div>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</div>
				<div class="code-title">基础用法：</div>
				<div class="message-btn" @click="messageBtn">弹出消息框</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'uimessage',
		data() {
			return {}
		},
		components: {},
		methods: {
			messageBtn: function() {
				this.$globalMessage("这是一条系统消息！", 2000);
			}
		},
		mounted() {},
		watch: {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#uimessage {
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
	
	.message-btn {
		cursor: pointer;
		border-radius: 3px;
		background-color: #009688;
		color: white;
		width: fit-content;
		padding: 5px;
		margin-top: 10px;
	}
</style>