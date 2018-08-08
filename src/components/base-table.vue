<!--
	组件名称：表格组件(本组件仅统一了表格的基础样式，对表格结构并无定义)
	作者：黄泽平
-->
<template>
	<div class="base-table">
		<!--外部嵌套-->
		<table cellpadding="0" cellspacing="0" border="0">
			<!--定义每列比例-->
			<colgroup>
				<col v-for="col in tcols" :width="col" />
			</colgroup>
			<!--定义表格标题-->
			<thead>
				<tr v-for="thead in theads">
					<th v-for="ichild in thead" :colspan="ichild.colspan ? ichild.colspan : 1" :rowspan="ichild.rowspan ? ichild.rowspan : 1">
						<div>{{ichild.title}}</div>
					</th>
				</tr>
			</thead>
			<!--展示表格数据-->
			<tbody>
				<slot name="tbody"></slot>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: "BaseTable",
		props: {
			tcols: {
				type: Array,
				default: []
			},
			theads: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.base-table {
		width: 100%;
		overflow: auto;
		padding-bottom: 10px;
		table {
			width: 100%;
			padding-left: 10px;
			padding-right: 10px;
			table-layout: fixed;
			border-collapse: separate;
			colgroup {
				col {
					display: table-column;
				}
			}
			thead {
				color: #909399;
				font-weight: 500;
				text-align: left;
				tr {
					display: table-row;
					vertical-align: inherit;
					border-color: inherit;
					th {
						background-color: #f1f7fa;
						border-bottom: 1px solid rgba(209, 216, 220, 0.6);
						div {
							padding-top: 10px;
							padding-bottom: 10px;
							padding-left: 10px;
							font-size: 14px;
							color: #666666;
						}
					}
				}
			}
			tbody {
				font-size: 14px;
				color: #444444;
				display: table-row-group;
				vertical-align: middle;
				border-color: inherit;
				border-collapse: separate;
				tr {
					background-color: white;
					display: table-row;
					vertical-align: inherit;
					border-color: inherit;
					td {
						min-width: 0;
						border-bottom: 1px solid #ebeef5;
						padding: 5px 0;
						box-sizing: border-box;
						text-overflow: ellipsis;
						vertical-align: middle;
						position: relative;
						div {
							padding-left: 10px;
							padding-right: 10px;
							line-height: 23px;
							box-sizing: border-box;
							white-space: normal;
							word-break: break-all;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}
				}
				tr:hover {
					background-color: #fafcfd;
				}
			}
		}
	}
</style>