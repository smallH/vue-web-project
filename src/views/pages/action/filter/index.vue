<template>
	<div id="filter">
		<div class="bground">
			<div class="title">全局过滤filters</div>
			<div class="line"></div>
			<div class="content">
				<div>全局过滤配置是指在root/filters/index.js文件下定义过滤条件函数后，即可在表达式中使用“|”号来添加过滤条件，无需再从组件中引入或额外设置</div>
				<div class="code-title"></div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// filters/index.js
						
	// 首字母转为大写
	export function capitalize(value) {
		if(!value) return ''
		value = value.toString()
		return value.charAt(0).toUpperCase() + value.slice(1)
	}
	
	// Component
	&lt;div&gt;hello|capitalize&lt;/div&gt; //最终渲染为&lt;div&gt;Hello&lt;/div&gt;</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'filter',
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#filter {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 10px;
		font-weight: bold;
	}
	
	.md {
		margin-top: 10px;
		font-size: 16px;
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
</style>