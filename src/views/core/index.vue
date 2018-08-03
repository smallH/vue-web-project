<template>
	<div id="core">
		<div class="header">
			<div class="header-title">welcome to vue-web !</div>
		</div>
		<div class="content">
			<div class="tab">
				<div class="tabitem">
					<div class="tabitem-title">框架介绍</div>
					<div class="tabitem-mune">
						<ul class="tabitem-ul">
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/base/introduction'}" class="rlink">
									概述
								</router-link>
							</li>
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/base/initialization'}" class="rlink">
									初始化
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="tabitem">
					<div class="tabitem-title">部分功能</div>
					<div class="tabitem-mune">
						<ul class="tabitem-ul">
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/action/param'}" class="rlink">
									页面明文传参
								</router-link>
							</li>
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/action/jsonserver'}" class="rlink">
									json-server
								</router-link>
							</li>
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/action/proxy'}" class="rlink">
									服务代理
								</router-link>
							</li>
							<li class="tabitem-li">vuex应用</li>
							<li class="tabitem-li">token过滤</li>
							<li class="tabitem-li">iconfont图标</li>
							<li class="tabitem-li">第三方库引用</li>
						</ul>
					</div>
				</div>
				<div class="tabitem">
					<div class="tabitem-title">基础组件</div>
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
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.header {
		background-color: #009688;
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
		overflow-y: auto;
		height: 100%;
		width: 200px;
		border-right: solid 1px black;
		background-color: #00746a;
		.tabitem {
			padding: 20px;
			.tabitem-title {
				padding: 5px;
				color: #e4e4e4;
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
					color: white;
				}
			}
		}
	}
	
	.view {
		overflow-y: auto;
		flex: 1;
		height: 100%;
		background-color: #fff;
	}
	
	.rlink {
		text-decoration: none;
		color: white;
	}
</style>