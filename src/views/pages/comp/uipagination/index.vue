<template>
	<div id="uipagination">
		<div class="bground">
			<div class="title">分页</div>
			<div class="line"></div>
			<div class="content">
				<div>当数据量过多时，使用分页分解数据。</div>
				<div class="code-title">基础用法：</div>
				<div class="pagination-comp">
					<base-pagination :total="total" :currentPage='currentPage' :pageSize='pageSize' @pagechange="pagechange"></base-pagination>
					<base-pagination-t2 :total="total" :currentPage='currentPage' :pageSize='pageSize' @pagechange="pagechange"></base-pagination-t2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BasePagination from '@/components/base-pagination.vue'
	import BasePaginationT2 from '@/components/base-pagination-t2.vue'
	export default {
		name: 'uipagination',
		data() {
			return {
				total: 150, // 记录总条数
				pageSize: 10, // 每页显示条数
				currentPage: 1 // 当前的页数
			}
		},
		components: {
			BasePagination,
			BasePaginationT2
		},
		methods: {
			pagechange: function(currentPage) {
				console.log(currentPage);
			}
		},
		mounted() {},
		watch: {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#uipagination {
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
	
	.pagination-comp {
		margin-top: 10px;
	}
</style>