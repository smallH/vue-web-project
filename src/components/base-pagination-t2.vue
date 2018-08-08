<!--分页组件-->
<template>
	<div class="pagination-box">
		<div class="info">共{{Math.ceil(total/pageSize)}}页/{{total}}条数据</div>
		<div class="pageBox">
			<ul class="pagination">
				<li :class="{'disabled': current == 1}">
					<a href="javascript:;" @click="setCurrent(current - 1)">
						< </a>
				</li>
				<li :class="{'disabled': current == 1}">
					<a href="javascript:;" @click="setCurrent(1)"> 首页 </a>
				</li>
				<li v-for="p in grouplist" :class="{'active': current == p.val}">
					<a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a>
				</li>
				<li :class="{'disabled': current == page}">
					<a href="javascript:;" @click="setCurrent(page)"> 尾页 </a>
				</li>
				<li :class="{'disabled': current == page}">
					<a href="javascript:;" @click="setCurrent(current + 1)"> > </a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current: this.currentPage
			}
		},
		props: {
			total: { // 数据总条数
				type: Number,
				default: 0
			},
			pageSize: { // 每页显示条数
				type: Number,
				default: 10
			},
			currentPage: { // 当前页码
				type: Number,
				default: 1
			},
			pagegroup: { // 分页条数
				type: Number,
				default: 3,
				coerce: function(v) {
					v = v > 0 ? v : 3;
					return v % 2 === 1 ? v : v + 1;
				}
			}
		},
		computed: {
			page: function() { // 总页数
				return Math.ceil(this.total / this.pageSize);
			},
			grouplist: function() { // 获取分页页码
				var len = this.page,
					temp = [],
					list = [],
					count = Math.floor(this.pagegroup / 2),
					center = this.current;
				if(len <= this.pagegroup) {
					while(len--) {
						temp.push({
							text: this.page - len,
							val: this.page - len
						});
					};
					return temp;
				}
				while(len--) {
					temp.push(this.page - len);
				};
				var idx = temp.indexOf(center);
				(idx < count) && (center = center + count - idx);
				(this.current > this.page - count) && (center = this.page - count);
				temp = temp.splice(center - count - 1, this.pagegroup);
				do {
					var t = temp.shift();
					list.push({
						text: t,
						val: t
					});
				} while (temp.length);
				if(this.page > this.pagegroup) {
					(this.current > count + 1) && list.unshift({
						text: '...',
						val: list[0].val - 1
					});
					(this.current < this.page - count) && list.push({
						text: '...',
						val: list[list.length - 1].val + 1
					});
				}
				return list;
			}
		},
		methods: {
			setCurrent: function(idx) {
				if(this.current != idx && idx > 0 && idx < this.page + 1) {
					this.current = idx;
					this.$emit('pagechange', this.current);
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.pagination-box {
		display: flex;
	}
	
	.info {
		margin-top: 20px;
		margin-right: 0;
		font-size: 14px;
		color: #444;
	}
	
	.pageBox {
		margin-top: 10px;
		.pagination {
			width: 100%;
			list-style: none;
			overflow: hidden;
			display: table;
			padding-left: 0px;
			li {
				float: left;
				height: 30px;
				border-radius: 5px;
				margin-left: 10px;
				background-color: #fff;
				border: 1px solid #C6C6C6;
				a {
					display: block;
					width: 30px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					font-size: 14px;
					border-radius: 5px;
					text-decoration: none;
					color: #C6C6C6;
				}
			}
			li:hover {
				border-color: #41a259;
				a {
					color: #41a259;
				}
			}
			.active {
				border-color: #41a259;
				a {
					color: #41a259;
				}
			}
		}
	}
</style>