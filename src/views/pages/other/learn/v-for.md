<!-- 循环语句 -->
<template v-for="item in filterItems">
	<li>{{item.name}}</li>
</template>

<!-- 计算属性过滤 -->
<script>
	data() {
		return {
			items: [{
				name: "大熊猫"
			}, {
				name: "北极熊"
			}, {
				name: "黑豹"
			}]
		}
	}，
	computed: {
		filterItems: function() {
			return this.items.filter(function(item) {
				return item.name.match(/熊/); // 筛选出带'熊'字的项
			});
		}
	}
</script>