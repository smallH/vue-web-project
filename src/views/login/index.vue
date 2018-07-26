<!-- vue文件基本结构 -->
<template>
	<div id="login">
		<div class="title">欢迎使用vue-web框架 ！</div>
		<div class="btn" @click="enterBtn">进入vue-web框架</div>
	</div>
</template>

<script>
	export default {
		// 命名
		name: 'login',
		// 方法
		methods: {
			enterBtn() {
				this.$router.push({
					path: '/core',
					query: {
						name: "admin",
						pw: "123456"
					}
				})
			}
		},
		// 入参
		props: {
			tObject: {
				type: Object,
				default: function() {
					return {}
				}
			},
			tArray: {
				type: Array,
				default: function() {
					return []
				}
			},
			tNumber: {
				type: Number,
				default: 0
			},
			tBoolean: {
				type: Boolean,
				default: false
			},
			tString: {
				type: String,
				default: ""
			}
		},
		// 变量
		data() {
			return {};
		},
		// 创建后
		created() {
			console.log("1.created：实例创建完成，但Dom还不存在");
			this.$nextTick(function() {
				console.log('4.$nextTick：在修改数据之后立即使用$nextTick，可获取更新后的真实Dom');
			});
		},
		// 挂载前
		beforeMount() {
			console.log("2.beforeMount：虚拟Dom创建完成，但未挂载到页面上");
		},
		// 挂载后
		mounted() {
			console.log('3.mounted：挂载到真实Dom上，并数据渲染完成');
		},
		// 组件引入
		components: {},
		// 过滤器
		filters: {},
		// 变量监察
		watch: {},
		// 计算
		computed: {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.title {
		text-align: center;
		font-size: 46px;
		font-weight: bold;
		margin-top: 200px;
	}
	
	.btn {
		cursor: pointer;
		border-radius: 5px;
		background-color: #009688;
		color: white;
		width: fit-content;
		padding: 20px;
		margin: 0 auto;
		margin-top: 0px;
		margin-top: 50px;
	}
</style>