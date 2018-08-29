<!-- tabs组件 -->
<div class="tabs">
	<div class="tabs-bar">
		<div v-for="(item,index) in navList" @click="handleClick(index)">{{item.label}}</div>
	</div>
	<div class="tabs-content">
		<!-- 不具名slot，即不设name -->
		<slot></slot>
	</div>
</div>

<script>
	// 获取子组件pane核心代码
	data:function(){
		return {
			navList:[]
		}
	},
	methods:{
		getTabs(){
			return this.$children.filter(function(item){
				return item.$options.name === 'pane';
			});
		},
		updateNav(){
			this.navList = [];
			var _this = this;
			this.getTabs().forEach(function(pane,index){
				_this.navList.push({
					label:pane.label,
					name:pane.name || index
				});
			});
		}
	}
</script>