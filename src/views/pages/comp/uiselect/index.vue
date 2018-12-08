<template>
	<div id="uiselect">
		<div class="bground">
			<div class="title">下拉列</div>
			<div class="line"></div>
			<div class="content">
				<div>(本框架组件只设计了部分常用组件，主要目的在于展示组件制定的代码规范。若没有严格需求建议使用ElementUI)<br /><br />当选项过多时，使用下拉菜单展示并选择内容。</div>
				<div class="code-title">基础用法：</div>
				<div class="select-comp">
					<base-select v-model="vmSelectedItem" :options="options" :placeholder="placeholder"></base-select>
				</div>
				<div class="code-title">可输入搜索：</div>
				<div class="select-comp">
					<base-input-select v-model="vmInputSelectedItem" :options="options" :placeholder="placeholder"></base-input-select>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseSelect from '@/components/base-select.vue'
	import BaseInputSelect from '@/components/base-input-select.vue'

	export default {
		name: 'uiselect',
		data() {
			return {
				vmSelectedItem: {},
				vmInputSelectedItem: {},
				placeholder: "请选择您最喜欢的食物",
				options: [{
					id: '选项1',
					label: '黄金糕'
				}, {
					id: '选项2',
					label: '双皮奶'
				}, {
					id: '选项3',
					label: '蚵仔煎'
				}, {
					id: '选项4',
					label: '龙须面'
				}, {
					id: '选项5',
					label: '北京烤鸭'
				}, {
					id: '选项6',
					label: '烤肉'
				}]
			}
		},
		components: {
			BaseSelect,
			BaseInputSelect
		},
		methods: {},
		mounted() {},
		watch: {
			vmSelectedItem(value) {
				return value;
			},
			vmInputSelectedItem(value) {
				console.log(value);
				return value;
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#uiselect {
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
	
	.select-comp {
		width: 300px;
		margin-top: 20px;
	}
</style>