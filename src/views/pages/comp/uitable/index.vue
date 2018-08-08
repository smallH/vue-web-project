<template>
	<div id="uitable">
		<div class="bground">
			<div class="title">表格</div>
			<div class="line"></div>
			<div class="content">
				<div>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</div>
				<div class="code-title">基础用法：</div>
				<div class="table-comp">
					<base-table :tcols="tcols" :theads="theads">
						<tr slot="tbody" v-for="item in tdatas" :id="item.id">
							<td>
								<div>{{item.dateTime}}</div>
							</td>
							<td>
								<div>{{item.name}}</div>
							</td>
							<td>
								<div>{{item.province}}</div>
							</td>
							<td>
								<div>{{item.city}}</div>
							</td>
							<td>
								<div>{{item.address}}</div>
							</td>
							<td>
								<div>{{item.tel}}</div>
							</td>
							<td>
								<div class="table-btn-list">
									<div class="table-btn" :id="item.id" @click="detailHandle">
										查看
									</div>
									<div class="table-btn left" :id="item.id">
										编辑
									</div>
									<div class="table-btn left" :id="item.id">
										设置
									</div>
									<div class="table-btn left" :id="item.id">
										删除
									</div>
								</div>
							</td>
						</tr>
					</base-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseTable from '@/components/base-table.vue'

	export default {
		name: 'uitable',
		data() {
			return {
				tcols: [1, 1, 1, 1, 1, 1, 3],
				theads: [
					[{
						colspan: 7,
						rowspan: 1,
						title: "设备列表"
					}],
					[{
						title: "日期",
					}, {
						title: "姓名",
					}, {
						title: "省份",
					}, {
						title: "市区",
					}, {
						title: "地址",
					}, {
						title: "邮编",
					}, {
						title: "操作",
					}, ]
				],
				tdatas: [{
					id: "ID1",
					dateTime: "2016-01",
					name: "王小虎",
					province: "上海",
					city: "上海市",
					address: "上海市",
					tel: "200333"
				}, {
					id: "ID2",
					dateTime: "2020-01",
					name: "张三",
					province: "福建",
					city: "厦门市",
					address: "厦门市",
					tel: "361000"
				},{
					id: "ID3",
					dateTime: "2016-01",
					name: "王小虎",
					province: "上海",
					city: "上海市",
					address: "上海市",
					tel: "200333"
				}, {
					id: "ID4",
					dateTime: "2020-01",
					name: "张三",
					province: "福建",
					city: "厦门市",
					address: "厦门市",
					tel: "361000"
				},{
					id: "ID5",
					dateTime: "2016-01",
					name: "王小虎",
					province: "上海",
					city: "上海市",
					address: "上海市",
					tel: "200333"
				}, {
					id: "ID6",
					dateTime: "2020-01",
					name: "张三",
					province: "福建",
					city: "厦门市",
					address: "厦门市",
					tel: "361000"
				}],
			}
		},
		components: {
			BaseTable
		},
		methods: {
			detailHandle(e) {
				console.log(e.target.id);
			}
		},
		mounted() {},
		watch: {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#uitable {
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
	
	.table-comp {
		width: 100%;
		margin-top: 20px;
	}
	
	.table-btn-list {
		display: flex;
		.table-btn {
			cursor: pointer;
			border-radius: 3px;
			background-color: #009688;
			color: white;
			width: 60px;
			padding: 5px;
			text-align: center;
		}
		.left {
			margin-left: 10px;
		}
	}
</style>