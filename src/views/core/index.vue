<template>
	<div id="core">
		<div class="header">
			<div class="header-title">vue+axios+vuex+router</div>
		</div>
		<div class="content">
			<div class="tab">
				<div class="tabitem">
					<div class="tabitem-title">单页面路由切换</div>
					<div class="tabitem-mune">
						<ul class="tabitem-ul">
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/page1'}" class="rlink">
									page1
								</router-link>
							</li>
							<li class="tabitem-li">
								<router-link :to="{path:'/pages/page2'}" class="rlink">
									page2
								</router-link>
							</li>
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
		width: 250px;
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
		padding-left: 50px;
		padding-right: 150px;
	}
	
	.rlink {
		text-decoration: none;
		color: white;
	}
</style>