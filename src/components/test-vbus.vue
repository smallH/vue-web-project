// 中央事件总线测试
<template>
	<div>
		<p>{{count}}</p>
		<button @click="addOneHandle">计数器加1</button>
	</div>
</template>

<script>
	export default {
		name: "VueBus",
		data() {
			return {
				count: 0
			}
		},
		mounted() {
			var _this = this;
			this.$bus.on("add", function() {
				_this.count++;
			});
		},
		methods: {
			addOneHandle: function() {
				this.$bus.emit('add');
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>