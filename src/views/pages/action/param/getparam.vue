<template>
	<div id="getparam">
		<div class="bground">
			<div class="title">页面明文传参</div>
			<div class="line"></div>
			<div class="content">
				<div>
					<div class="param">
						<div class="param-text">{{param}}</div>
						<div class="param-btn" @click="backBtn">返回</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'getparam',
		data() {
			return {
				param: ""
			}
		},
		methods: {
			backBtn() {
				this.$router.push({
					path: '/pages/action/param'
				})
			}
		},
		mounted() {
			this.param = this.$route.query.data;
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#getparam {
		padding: 30px;
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
		.param-text {
			line-height: 30px;
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