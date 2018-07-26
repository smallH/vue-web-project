<template>
	<div id="core">
		<div class="header">
			<div class="header-title">vue-web框架</div>
		</div>
		<div class="content">
			<div class="tab">
				<div class="tabitem">
					<div class="tabitem-title">框架介绍</div>
					<div class="tabitem-mune">
						<ul class="tabitem-ul">
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/base/initialization'}" class="rlink">
									概述
								</router-link>
							</li>
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/base/introduction'}" class="rlink">
									初始化
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="tabitem">
					<div class="tabitem-title">基本功能</div>
					<div class="tabitem-mune">
						<ul class="tabitem-ul">
							<li class="tabitem-li">路由传参</li>
							<li class="tabitem-li">代理服务</li>
						</ul>
					</div>
				</div>
				<div class="tabitem">
					<div class="tabitem-title">公用组件</div>
					<div class="tabitem-mune">
						<ul class="tabitem-ul">
							<li class="tabitem-li">下拉列</li>
							<li class="tabitem-li">表格</li>
							<li class="tabitem-li">询问框</li>
							<li class="tabitem-li">提示框</li>
							<li class="tabitem-li">高德地图</li>
						</ul>
					</div>
				</div>
				<div class="tabitem">
					<div class="tabitem-title">其它资料</div>
					<div class="tabitem-mune">
						<ul class="tabitem-ul">
							<li class="tabitem-li">作者信息</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="view">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'core',
		data() {
			return {}
		},
		mounted() {
			console.log(this.$route.query); //获取路由明文传参值
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.header {
		background-color: black;
		height: 50px;
		width: 100%;
		.header-title {
			color: white;
			font-size: 24px;
			height: 100%;
			margin-left: 40px;
			line-height: 46px;
		}
	}
	
	.content {
		display: flex;
		width: 100%;
		top: 50px;
		bottom: 0px;
		background: white;
		position: absolute;
	}
	
	.tab {
		height: 100%;
		width: 200px;
		border-right: solid 1px black;
		background-color: #E0E0E0;
		.tabitem {
			padding: 20px;
			.tabitem-title {
				padding: 5px;
				background-color: black;
				color: white;
				padding-left: 20px;
				font-size: 20px;
				border-radius: 5px;
			}
			.tabitem-mune {
				margin-top: 5px;
				padding-left: 20px;
				.tabitem-li {
					cursor: pointer;
					margin-top: 10px;
					width: fit-content;
				}
			}
		}
	}
	
	.view {
		flex: 1;
		height: 100%;
	}
	
	.rlink {
		text-decoration: none;
		color: black;
	}
</style>